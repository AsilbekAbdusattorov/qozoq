document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const submissionsBody = document.getElementById('submissions-body');
    const prevPageBtn = document.getElementById('prev-page');
    const nextPageBtn = document.getElementById('next-page');
    const pageInfo = document.getElementById('page-info');
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const countryFilter = document.getElementById('country-filter');
    const genderFilter = document.getElementById('gender-filter');
    const statusFilter = document.getElementById('status-filter');
    const modal = document.getElementById('submission-modal');
    const closeModal = document.querySelector('.close-modal');
    const closeBtn = document.getElementById('close-btn');
    const approveBtn = document.getElementById('approve-btn');
    const rejectBtn = document.getElementById('reject-btn');
    
    // State variables
    let currentPage = 1;
    let totalPages = 1;
    let submissions = [];
    let currentSubmissionId = null;
    
    // Initialize
    fetchSubmissions();
    
    // Event listeners
    prevPageBtn.addEventListener('click', goToPrevPage);
    nextPageBtn.addEventListener('click', goToNextPage);
    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', handleSearchEnter);
    countryFilter.addEventListener('change', handleFilterChange);
    genderFilter.addEventListener('change', handleFilterChange);
    statusFilter.addEventListener('change', handleFilterChange);
    closeModal.addEventListener('click', closeModalWindow);
    closeBtn.addEventListener('click', closeModalWindow);
    window.addEventListener('click', handleOutsideClick);
    approveBtn.addEventListener('click', approveSubmission);
    rejectBtn.addEventListener('click', rejectSubmission);
    
    // Functions
    function fetchSubmissions() {
        showLoading(true);
        
        let url = `http://localhost:3000/api/submissions?page=${currentPage}`;
        
        const searchTerm = searchInput.value.trim();
        if (searchTerm) url += `&search=${encodeURIComponent(searchTerm)}`;
        
        const country = countryFilter.value;
        if (country) url += `&country=${encodeURIComponent(country)}`;
        
        const gender = genderFilter.value;
        if (gender) url += `&gender=${encodeURIComponent(gender)}`;
        
        const status = statusFilter.value;
        if (status) url += `&status=${encodeURIComponent(status)}`;
        
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text().then(text => {
                    return text ? JSON.parse(text) : {};
                });
            })
            .then(data => {
                submissions = data.submissions || [];
                totalPages = data.totalPages || 1;
                renderSubmissions();
                updatePagination();
            })
            .catch(error => {
                console.error('Fetch error:', error);
                showError('Failed to load submissions. Please try again.');
                submissions = [];
                renderSubmissions();
            })
            .finally(() => showLoading(false));
    }
    
    function renderSubmissions() {
        submissionsBody.innerHTML = '';
        
        if (submissions.length === 0) {
            submissionsBody.innerHTML = `
                <tr>
                    <td colspan="8" class="no-results">No submissions found</td>
                </tr>
            `;
            return;
        }
        
        submissions.forEach(sub => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${sub._id ? sub._id.substring(18, 24) : 'N/A'}</td>
                <td>${sub.name || 'N/A'}</td>
                <td>${sub.age || 'N/A'}</td>
                <td>${sub.country || 'N/A'}</td>
                <td>${sub.gender === 'male' ? 'Male' : 'Female'}</td>
                <td><span class="status-badge ${sub.status || 'pending'}">${sub.status || 'Pending'}</span></td>
                <td>${sub.submittedAt ? new Date(sub.submittedAt).toLocaleDateString() : 'N/A'}</td>
                <td class="actions">
                    <button class="action-btn view" data-id="${sub._id}" title="View details">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="action-btn delete" data-id="${sub._id}" title="Delete">
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
            `;
            submissionsBody.appendChild(row);
        });
        
        // Add event listeners to action buttons
        document.querySelectorAll('.action-btn.view').forEach(btn => {
            btn.addEventListener('click', () => viewSubmission(btn.getAttribute('data-id')));
        });
        
        document.querySelectorAll('.action-btn.delete').forEach(btn => {
            btn.addEventListener('click', () => {
                if (confirm('Are you sure you want to delete this submission?')) {
                    deleteSubmission(btn.getAttribute('data-id'));
                }
            });
        });
    }
    
    function updatePagination() {
        pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
        prevPageBtn.disabled = currentPage <= 1;
        nextPageBtn.disabled = currentPage >= totalPages;
    }
    
    function viewSubmission(submissionId) {
        currentSubmissionId = submissionId;
        const detailsContainer = document.getElementById('submission-details');
        detailsContainer.innerHTML = '<div class="loading-spinner"></div>';
        modal.style.display = 'flex';
        
        fetch(`http://localhost:3000/api/submissions/${submissionId}`)
            .then(response => {
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                return response.text().then(text => {
                    return text ? JSON.parse(text) : {};
                });
            })
            .then(submission => {
                if (!submission || Object.keys(submission).length === 0) {
                    throw new Error('Empty submission data');
                }
                
                detailsContainer.innerHTML = '';
                
                // Create photo section if exists
                if (submission.photo) {
                    const photoSection = document.createElement('div');
                    photoSection.className = 'photo-section';
                    photoSection.innerHTML = `
                        <div class="detail-label">Photo:</div>
                        <div class="photo-container">
                            <img src="${submission.photo}" alt="User photo" onerror="this.style.display='none'">
                        </div>
                    `;
                    detailsContainer.appendChild(photoSection);
                }
                
                // Create and append detail rows
                const fields = [
                    { label: 'ID', value: submission._id },
                    { label: 'Name', value: submission.name },
                    { label: 'Phone', value: submission.phone },
                    { label: 'Gender', value: submission.gender === 'male' ? 'Male' : 'Female' },
                    { label: 'Age', value: submission.age },
                    { label: 'Country', value: submission.country },
                    { label: 'Region/City', value: submission.region },
                    { label: 'Nationality', value: submission.nationality },
                    { label: 'Prayer', value: submission.prayer },
                    { label: 'Beard', value: submission.beard },
                    { label: 'Quran Reading', value: submission.quran },
                    { label: 'Madhhab', value: submission.madhhab },
                    { label: 'Marital Status', value: submission.maritalStatus },
                    { label: 'Children', value: submission.children },
                    { label: 'Relocation', value: submission.relocation },
                    { label: 'Desired Wife Age', value: submission.desiredWifeAgeMin && submission.desiredWifeAgeMax 
                        ? `${submission.desiredWifeAgeMin}-${submission.desiredWifeAgeMax}` : 'N/A' },
                    { label: 'Character', value: submission.character 
                        ? JSON.parse(submission.character).join(', ') : 'N/A' },
                    { label: 'Height', value: submission.height },
                    { label: 'Weight', value: submission.weight },
                    { label: 'Education', value: submission.education },
                    { label: 'WhatsApp', value: submission.whatsapp },
                    { label: 'Instagram', value: submission.instagram },
                    { label: 'Telegram', value: submission.telegram },
                    { label: 'About Me', value: submission.aboutMe },
                    { label: 'About Future Wife', value: submission.aboutWife },
                    { label: 'Status', value: submission.status || 'pending' },
                    { label: 'Submitted At', value: submission.submittedAt 
                        ? new Date(submission.submittedAt).toLocaleString() : 'N/A' }
                ];
                
                fields.forEach(field => {
                    if (!field.value && field.value !== 0) return;
                    
                    const row = document.createElement('div');
                    row.className = 'detail-row';
                    row.innerHTML = `
                        <div class="detail-label">${field.label}:</div>
                        <div class="detail-value">${field.value}</div>
                    `;
                    detailsContainer.appendChild(row);
                });
                
                // Update action buttons based on status
                const status = submission.status || 'pending';
                approveBtn.style.display = status === 'pending' || status === 'rejected' ? 'block' : 'none';
                rejectBtn.style.display = status === 'pending' || status === 'approved' ? 'block' : 'none';
            })
            .catch(error => {
                console.error('Error:', error);
                detailsContainer.innerHTML = `
                    <div class="error-message">
                        Failed to load submission details. Please try again.
                    </div>
                `;
            });
    }
    
    function deleteSubmission(submissionId) {
        showLoading(true);
        
        fetch(`http://localhost:3000/api/submissions/${submissionId}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return response.text().then(text => {
                return text ? JSON.parse(text) : {};
            });
        })
        .then(() => {
            showSuccess('Submission deleted successfully');
            fetchSubmissions();
        })
        .catch(error => {
            console.error('Error:', error);
            showError('Failed to delete submission');
        })
        .finally(() => showLoading(false));
    }
    
    function approveSubmission() {
        if (!currentSubmissionId) return;
        updateSubmissionStatus(currentSubmissionId, 'approved');
    }
    
    function rejectSubmission() {
        if (!currentSubmissionId) return;
        updateSubmissionStatus(currentSubmissionId, 'rejected');
    }
    
    function updateSubmissionStatus(submissionId, status) {
        showLoading(true);
        
        fetch(`http://localhost:3000/api/submissions/${submissionId}/status`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ status })
        })
        .then(response => {
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return response.text().then(text => {
                return text ? JSON.parse(text) : {};
            });
        })
        .then(() => {
            showSuccess(`Submission ${status} successfully`);
            closeModalWindow();
            fetchSubmissions();
        })
        .catch(error => {
            console.error('Error:', error);
            showError(`Failed to ${status} submission`);
        })
        .finally(() => showLoading(false));
    }
    
    function goToPrevPage() {
        if (currentPage > 1) {
            currentPage--;
            fetchSubmissions();
        }
    }
    
    function goToNextPage() {
        if (currentPage < totalPages) {
            currentPage++;
            fetchSubmissions();
        }
    }
    
    function handleSearch() {
        currentPage = 1;
        fetchSubmissions();
    }
    
    function handleSearchEnter(e) {
        if (e.key === 'Enter') handleSearch();
    }
    
    function handleFilterChange() {
        currentPage = 1;
        fetchSubmissions();
    }
    
    function closeModalWindow() {
        modal.style.display = 'none';
        currentSubmissionId = null;
    }
    
    function handleOutsideClick(e) {
        if (e.target === modal) closeModalWindow();
    }
    
    function showLoading(show) {
        const loader = document.querySelector('.loading-message');
        if (loader) loader.textContent = show ? 'Loading...' : 'No submissions found';
    }
    
    function showSuccess(message) {
        // Replace with a better notification system
        const notification = document.createElement('div');
        notification.className = 'notification success';
        notification.textContent = message;
        document.body.appendChild(notification);
        setTimeout(() => notification.remove(), 3000);
    }
    
    function showError(message) {
        // Replace with a better notification system
        const notification = document.createElement('div');
        notification.className = 'notification error';
        notification.textContent = message;
        document.body.appendChild(notification);
        setTimeout(() => notification.remove(), 3000);
    }
});