document.addEventListener("DOMContentLoaded", function () {
  // DOM Elements
  const formPages = document.querySelectorAll(".form-page");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const submitBtn = document.querySelector(".submit-btn");
  const progressBar = document.querySelector(".progress");
  const progressText = document.querySelector(".progress-text");
  const languageButtons = document.querySelectorAll(".lang-btn");

  // Update translations object with new languages
  const translations = {
    ru: {
      formTitle: "Заполните анкету",
      name: "Имя",
      phone: "Телефон",
      gender: "Введите имя",
      male: "Я Мужчина",
      female: "Я Женщина",
      country: "Выберите Вашу Страну",
      selectCountry: "-- Выберите страну --",
      region: "Выберите Ваш город",
      selectRegion: "-- Выберите Ваш город --",
      age: "Сколько Вам лет?",
      nationality: "Национальность",
      prayer: "Читаете ли Вы намаз?",
      beard: "Носите ли Вы бороду?",
      quran: "Умеете ли Вы читать К`уран?",
      madhhab: "Ваш Мазхаб?",
      maritalStatus: "Семейное положение",
      children: "Количество детей",
      relocation: "Готовы ли Вы к переезду?",
      desiredWifeAge: "Возраст Будущей жены?",
      character: "Ваш Характер",
      height: "Ваш Рост (в сантиметрах)",
      weight: "Ваш Вес (в килограммах)",
      education: "Образование",
      whatsapp: "Номер в WhatsApp:",
      instagram: "Логин в Instagram:",
      telegram: "Логин в Telegram:",
      aboutMe: "О себе:",
      aboutWife: "О будущей жене:",
      photo: "Загрузите свою фотографию",
      reviewTitle: "Проверьте введённые данные перед отправкой",
      next: "Далее",
      prev: "Назад",
      submit: "Отправить",
      yes: "Да",
      no: "Нет",
      other: "Свой вариант",
      uploadHint: "Или перетяните его из папки в это поле",
      remove: "Удалить",
    },
    kz: {
      formTitle: "Анкетаны толтырыңыз",
      name: "Атыңыз",
      phone: "Телефон",
      gender: "Атыңызды енгізіңіз",
      male: "Мен ер адаммын",
      female: "Мен әйел адаммын",
      country: "Еліңізді таңдаңыз",
      selectCountry: "-- Елді таңдаңыз --",
      region: "Қалаңызды таңдаңыз",
      selectRegion: "-- Қалаңызды таңдаңыз --",
      age: "Жасыңыз қанша?",
      nationality: "Ұлты",
      prayer: "Намаз оқисыз ба?",
      beard: "Сақалыңыз бар ма?",
      quran: "Құран оқи аласыз ба?",
      madhhab: "Мазхабыңыз?",
      maritalStatus: "Отбасылық жағдайы",
      children: "Балалар саны",
      relocation: "Көшуді қарастырасыз ба?",
      desiredWifeAge: "Болашақ жұбайыңыздың жасы?",
      character: "Сипатыңыз",
      height: "Бойыңыз (см)",
      weight: "Салмағыңыз (кг)",
      education: "Білімі",
      whatsapp: "WhatsApp нөмірі:",
      instagram: "Instagram логині:",
      telegram: "Telegram логині:",
      aboutMe: "Өзім туралы:",
      aboutWife: "Болашақ жұбайым туралы:",
      photo: "Фотосуретті жүктеңіз",
      reviewTitle: "Жібермес бұрын енгізген деректеріңізді тексеріңіз",
      next: "Келесі",
      prev: "Артқа",
      submit: "Жіберу",
      yes: "Иә",
      no: "Жоқ",
      other: "Өз нұсқаңыз",
      uploadHint: "Немесе файлды осы жерге апарыңыз",
      remove: "Жою",
    },
    kg: {
      formTitle: "Анкетаны толтуруңуз",
      name: "Атыңыз",
      phone: "Телефон",
      gender: "Атыңызды киргизиңиз",
      male: "Мен эркекмин",
      female: "Мен аялмын",
      country: "Өлкөңүздү тандаңыз",
      selectCountry: "-- Өлкөнү тандаңыз --",
      region: "Шаарыңызды тандаңыз",
      selectRegion: "-- Шаары тандаңыз --",
      age: "Жашыңыз канча?",
      nationality: "Улутуңуз",
      prayer: "Намаз окуйсузбу?",
      beard: "Сакалыңыз барбы?",
      quran: "Куран окуй аласызбы?",
      madhhab: "Мазхабыңыз?",
      maritalStatus: "Үй-бүлөлүк абалы",
      children: "Балдардын саны",
      relocation: "Көчүүгө даярсызбы?",
      desiredWifeAge: "Келген аялыңыздын жашы?",
      character: "Мүнөзүңүз",
      height: "Боюңуз (см)",
      weight: "Салмагыңыз (кг)",
      education: "Билимиңиз",
      whatsapp: "WhatsApp номери:",
      instagram: "Instagram логини:",
      telegram: "Telegram логини:",
      aboutMe: "Өзүм жөнүндө:",
      aboutWife: "Келген аялым жөнүндө:",
      photo: "Сүрөтүңүздү жүктөңүз",
      reviewTitle: "Жөнөтүүдөн мурун киргизген маалыматыңызды текшериңиз",
      next: "Кийинки",
      prev: "Артка",
      submit: "Жөнөтүү",
      yes: "Ооба",
      no: "Жок",
      other: "Өз вариантыңыз",
      uploadHint: "Же файлды бул жерге сүйрөп таштаңыз",
      remove: "Өчүрүү",
    },
    uz: {
      formTitle: "Anketani to'ldiring",
      name: "Ismingiz",
      phone: "Telefon",
      gender: "Ismingizni kiriting",
      male: "Men erkakman",
      female: "Men ayolman",
      country: "Mamlakatni tanlang",
      selectCountry: "-- Mamlakatni tanlang --",
      region: "Shahringizni tanlang",
      selectRegion: "-- Shaharni tanlang --",
      age: "Yoshingiz nechida?",
      nationality: "Millatingiz",
      prayer: "Namoz o'qiysizmi?",
      beard: "Soqolingiz bormi?",
      quran: "Qur'on o'qiy olasizmi?",
      madhhab: "Mazhabingiz?",
      maritalStatus: "Oilaviy holat",
      children: "Farzandlar soni",
      relocation: "Ko'chishga tayyormisiz?",
      desiredWifeAge: "Kelajakdagi xotiningiz yoshi?",
      character: "Xarakteringiz",
      height: "Bo'yingiz (sm)",
      weight: "Vazningiz (kg)",
      education: "Ma'lumotingiz",
      whatsapp: "WhatsApp raqami:",
      instagram: "Instagram logini:",
      telegram: "Telegram logini:",
      aboutMe: "O'zim haqimda:",
      aboutWife: "Kelajakdagi xotinim haqida:",
      photo: "Suratingizni yuklang",
      reviewTitle: "Yuborishdan oldin kiritilgan ma'lumotlarni tekshiring",
      next: "Keyingi",
      prev: "Orqaga",
      submit: "Yuborish",
      yes: "Ha",
      no: "Yo'q",
      other: "Boshqa variant",
      uploadHint: "Yoki faylni shu yerga sudrab tashlang",
      remove: "O'chirish",
    },
    en: {
      formTitle: "Fill out the form",
      name: "Name",
      phone: "Phone",
      gender: "Enter your name",
      male: "I'm Male",
      female: "I'm Female",
      country: "Select your country",
      selectCountry: "-- Select country --",
      region: "Select your city",
      selectRegion: "-- Select your city --",
      age: "How old are you?",
      nationality: "Nationality",
      prayer: "Do you pray?",
      beard: "Do you have a beard?",
      quran: "Can you read Quran?",
      madhhab: "Your Madhhab?",
      maritalStatus: "Marital status",
      children: "Number of children",
      relocation: "Are you ready to relocate?",
      desiredWifeAge: "Desired wife's age?",
      character: "Your character",
      height: "Your height (cm)",
      weight: "Your weight (kg)",
      education: "Education",
      whatsapp: "WhatsApp number:",
      instagram: "Instagram username:",
      telegram: "Telegram username:",
      aboutMe: "About me:",
      aboutWife: "About future wife:",
      photo: "Upload your photo",
      reviewTitle: "Review your information before submitting",
      next: "Next",
      prev: "Back",
      submit: "Submit",
      yes: "Yes",
      no: "No",
      other: "Other",
      uploadHint: "Or drag and drop file here",
      remove: "Remove",
    },
    eg: {
      formTitle: "املء الاستمارة",
      name: "الاسم",
      phone: "الهاتف",
      gender: "أدخل اسمك",
      male: "أنا رجل",
      female: "أنا امرأة",
      country: "اختر بلدك",
      selectCountry: "-- اختر البلد --",
      region: "اختر مدينتك",
      selectRegion: "-- اختر المدينة --",
      age: "كم عمرك؟",
      nationality: "الجنسية",
      prayer: "هل تصلي؟",
      beard: "هل لديك لحية؟",
      quran: "هل تستطيع قراءة القرآن؟",
      madhhab: "مذهبك؟",
      maritalStatus: "الحالة الاجتماعية",
      children: "عدد الأطفال",
      relocation: "هل أنت مستعد للانتقال؟",
      desiredWifeAge: "عمر الزوجة المرغوب؟",
      character: "شخصيتك",
      height: "طولك (سم)",
      weight: "وزنك (كجم)",
      education: "التعليم",
      whatsapp: "رقم الواتساب:",
      instagram: "اسم المستخدم في إنستغرام:",
      telegram: "اسم المستخدم في تيليجرام:",
      aboutMe: "عن نفسي:",
      aboutWife: "عن الزوجة المستقبلية:",
      photo: "قم بتحميل صورتك",
      reviewTitle: "راجع معلوماتك قبل الإرسال",
      next: "التالي",
      prev: "السابق",
      submit: "إرسال",
      yes: "نعم",
      no: "لا",
      other: "خيار آخر",
      uploadHint: "أو اسحب الملف وأسقطه هنا",
      remove: "إزالة",
    },
  };

// Faqat bitta til almashtirish logikasi qoldiramiz
const langSelector = document.querySelector(".lang-selector");
const selectedLang = document.querySelector(".selected-lang");
const langItems = document.querySelectorAll(".lang-item");

// Dropdown menyuni boshqarish
selectedLang.addEventListener("click", function(e) {
    e.stopPropagation();
    langSelector.classList.toggle("active");
});

// Dropdown menyuni yopish
document.addEventListener("click", function() {
    langSelector.classList.remove("active");
});

// Tilni tanlash
langItems.forEach(item => {
    item.addEventListener("click", function() {
        const lang = this.dataset.lang;
        const flag = this.querySelector(".flag-icon").innerHTML;
        const name = this.querySelector(".lang-name").textContent;

        // Tanlangan tilni yangilash
        selectedLang.querySelector(".flag-icon").innerHTML = flag;
        selectedLang.querySelector(".lang-name").textContent = name;

        // Faol tilni yangilash
        langItems.forEach(i => i.classList.remove("active"));
        this.classList.add("active");

        // Dropdown menyuni yopish
        langSelector.classList.remove("active");

        // Sahifani tarjima qilish
        translatePage(lang);
    });
});

// Tarjima funktsiyasi
function translatePage(lang) {
    const translation = translations[lang];
    if (!translation) return;

    // Matn elementlarini yangilash
    document.querySelectorAll("[data-translate]").forEach(el => {
        const key = el.dataset.translate;
        if (translation[key]) {
            el.textContent = translation[key];
        }
    });

    // Input placeholderlarni yangilash
    document.querySelectorAll("[data-placeholder]").forEach(el => {
        const key = el.dataset.placeholder;
        if (translation[key]) {
            el.placeholder = translation[key];
        }
    });

    // Select optionlarni yangilash
    document.querySelectorAll("[data-option]").forEach(el => {
        const key = el.dataset.option;
        if (translation[key]) {
            el.textContent = translation[key];
        }
    });

    // Agar sizda boshqa tarjima qilinadigan elementlar bo'lsa, ularni ham shu yerda yangilashingiz kerak
}






  // Form state
  let currentPage = 1;
  const totalPages = 12;
  let currentLanguage = "ru";

  // Initialize form
  // initForm();

  // Event Listeners
  nextBtn.addEventListener("click", goToNextPage);
  prevBtn.addEventListener("click", goToPrevPage);
  submitBtn.addEventListener("click", submitForm);

  // Language switcher
  languageButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      languageButtons.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");
      currentLanguage = this.dataset.lang;
      translatePage(currentLanguage);
    });
  });

  // Other input fields
  document
    .getElementById("nationality")
    .addEventListener("change", function () {
      toggleOtherInput(this, "other-nationality");
    });

  document.getElementById("madhhab").addEventListener("change", function () {
    toggleOtherInput(this, "other-madhhab");
  });

  document
    .getElementById("marital-status")
    .addEventListener("change", function () {
      toggleOtherInput(this, "other-marital-status");
    });

  document.getElementById("children").addEventListener("change", function () {
    toggleOtherInput(this, "other-children");
  });

  document.getElementById("education").addEventListener("change", function () {
    toggleOtherInput(this, "other-education");
  });

  // Radio buttons with "other" option
  document
    .querySelectorAll('input[type="radio"][value="other"]')
    .forEach((radio) => {
      radio.addEventListener("change", function () {
        const name = this.getAttribute("name");
        const otherInput = document.querySelector(
          `input[name="${name}-other"]`
        );
        otherInput.style.display = this.checked ? "block" : "none";
        if (!this.checked) otherInput.value = "";
      });
    });

  // Checkbox with "other" option
  document
    .querySelector('input[name="character"][value="other"]')
    .addEventListener("change", function () {
      const otherInput = document.querySelector(
        'input[name="character-other"]'
      );
      otherInput.style.display = this.checked ? "block" : "none";
      if (!this.checked) otherInput.value = "";
    });

  // Age range slider
  const minAgeSlider = document.getElementById("desired-wife-age-min");
  const maxAgeSlider = document.getElementById("desired-wife-age-max");
  const minAgeValue = document.getElementById("min-age-value");
  const maxAgeValue = document.getElementById("max-age-value");

  // Yangi kod - faqat bitta slider uchun
  const ageSlider = document.getElementById("desired-wife-age");
  const ageValue = document.getElementById("age-value");

  if (ageSlider && ageValue) {
    ageSlider.addEventListener("input", function () {
      ageValue.textContent = this.value;
    });
  } else {
    console.error("Slider yoki uning qiymati ko'rsatkichi topilmadi!");
  }

  // File upload preview
  const photoInput = document.getElementById("photo");
  const previewContainer = document.getElementById("preview-container");
  const previewImage = document.getElementById("preview-image");
  const removePhotoBtn = document.getElementById("remove-photo");

  photoInput.addEventListener("change", function () {
    if (this.files && this.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        previewImage.src = e.target.result;
        previewContainer.style.display = "block";
      };
      reader.readAsDataURL(this.files[0]);
    }
  });

  removePhotoBtn.addEventListener("click", function () {
    photoInput.value = "";
    previewImage.src = "#";
    previewContainer.style.display = "none";
  });

  // Country and region/city selection
  document.getElementById("country").addEventListener("change", function () {
    const country = this.value;
    const regionSelect = document.getElementById("region");

    // Clear previous options
    regionSelect.innerHTML = `<option value="">${translations[currentLanguage].selectRegion}</option>`;

    if (country) {
      // Add cities based on selected country
      const cities = getCitiesByCountry(country);
      cities.forEach((city) => {
        const option = document.createElement("option");
        option.value = city;
        option.textContent = city;
        regionSelect.appendChild(option);
      });
    }
  });
  const editBtn = document.querySelector(".edit-btn");
  const editModeContainer = document.getElementById("edit-mode-container");
  const allQuestionsContainer = document.getElementById(
    "all-questions-container"
  );
  const saveEditBtn = document.querySelector(".save-edit-btn");
  const scrollToTopBtn = document.getElementById("scrollToTop");

  // Initialize the form
  function initForm() {
    // Set up initial values
    document.getElementById("heightValue").textContent =
      document.getElementById("height").value;
    document.getElementById("weightValue").textContent =
      document.getElementById("weight").value;

    // Set up event listeners for dynamic elements
    document.getElementById("height").addEventListener("input", function () {
      document.getElementById("heightValue").textContent = this.value;
    });

    document.getElementById("weight").addEventListener("input", function () {
      document.getElementById("weightValue").textContent = this.value;
    });

    document.getElementById("region").addEventListener("change", function () {
      document.getElementById("customCityGroup").style.display =
        this.value === "Другая" ? "block" : "none";
    });

    // Set up other event listeners
    setupEventListeners();

    // Show first page
    showPage(currentPage);
  }

  // Show specific page
  function showPage(pageNumber) {
    // Hide all pages
    formPages.forEach((page) => {
      page.classList.remove("active");
    });

    // Show current page
    const currentPageElement = document.querySelector(
      `.form-page[data-page="${pageNumber}"]`
    );
    if (currentPageElement) {
      currentPageElement.classList.add("active");
    }

    // Update navigation buttons
    prevBtn.disabled = pageNumber === 1;
    nextBtn.style.display = pageNumber === totalPages ? "none" : "block";
    submitBtn.style.display = pageNumber === totalPages ? "block" : "none";
    editBtn.style.display = pageNumber === totalPages ? "block" : "none";

    // Update progress
    updateProgress();

    // If on review page, populate the data
    if (pageNumber === totalPages) {
      populateReviewData();
    }

    // Scroll to top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Update progress bar
  function updateProgress() {
    const progress = (currentPage / totalPages) * 100;
    document.querySelector(".progress").style.width = `${progress}%`;
    document.querySelector(
      ".progress-text"
    ).textContent = `Готово: ${currentPage} / ${totalPages - 1}`;
  }

  // Setup event listeners
  function setupEventListeners() {
    // Navigation buttons
    prevBtn.addEventListener("click", goToPrevPage);
    nextBtn.addEventListener("click", goToNextPage);
    submitBtn.addEventListener("click", submitForm);

    // Edit button
    editBtn.addEventListener("click", enterEditMode);

    // Save edit button
    saveEditBtn.addEventListener("click", saveEdit);

    // Scroll to top button
    scrollToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });

    // Show/hide scroll to top button based on scroll position
    window.addEventListener("scroll", () => {
      scrollToTopBtn.style.display =
        window.pageYOffset > 300 ? "block" : "none";
    });

    // Handle "other" option inputs
    document.querySelectorAll("select").forEach((select) => {
      select.addEventListener("change", function () {
        const otherInput = this.nextElementSibling;
        if (otherInput && otherInput.classList.contains("other-input")) {
          otherInput.style.display = this.value === "other" ? "block" : "none";
        }
      });
    });

    // Handle radio buttons with "other" options
    document.querySelectorAll('input[type="radio"]').forEach((radio) => {
      radio.addEventListener("change", function () {
        if (this.value === "other") {
          const otherInput = this.closest(".radio-group").nextElementSibling;
          if (otherInput && otherInput.classList.contains("other-input")) {
            otherInput.style.display = "block";
          }
        } else {
          const otherInput = this.closest(".radio-group").nextElementSibling;
          if (otherInput && otherInput.classList.contains("other-input")) {
            otherInput.style.display = "none";
          }
        }
      });
    });

    // Photo upload preview
    const photoInput = document.getElementById("photo");
    if (photoInput) {
      photoInput.addEventListener("change", function (e) {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = function (event) {
            const previewContainer =
              document.getElementById("preview-container");
            const previewImage = document.getElementById("preview-image");
            previewImage.src = event.target.result;
            previewContainer.style.display = "block";
          };
          reader.readAsDataURL(file);
        }
      });

      document
        .getElementById("remove-photo")
        .addEventListener("click", function () {
          photoInput.value = "";
          document.getElementById("preview-container").style.display = "none";
        });
    }
  }

  // Navigation functions
  function goToPrevPage() {
    if (currentPage > 1) {
      currentPage--;
      showPage(currentPage);
    }
  }

  function goToNextPage() {
    if (isCurrentPageValid()) {
      currentPage++;
      showPage(currentPage);
      updateNavigation();
      window.scrollTo(0, 0);
    } else {
      alert("Пожалуйста, заполните все обязательные поля корректно");
    }
  }

  function validateCurrentPage() {
    // Sahifa elementini topish
    const pageElement = document.querySelector(
      `.form-page[data-page="${currentPage}"]`
    );
    if (!pageElement) {
      console.error(`Sahifa ${currentPage} topilmadi`);
      return false;
    }

    // Sahifa bo'yicha validatsiya
    switch (currentPage) {
      case 1:
        if (!document.getElementById("name").value.trim()) {
          alert(translations[currentLanguage].nameRequired);
          return false;
        }
        if (!document.getElementById("phone").value.trim()) {
          alert(translations[currentLanguage].phoneRequired);
          return false;
        }
        break;

      case 2:
        if (!document.querySelector('input[name="gender"]:checked')) {
          alert(translations[currentLanguage].genderRequired);
          return false;
        }
        if (!document.getElementById("country").value) {
          alert(translations[currentLanguage].countryRequired);
          return false;
        }
        break;

      // ... boshqa sahifalar uchun validatsiya qoidalari

      default:
        // Barcha majburiy maydonlarni tekshirish
        const requiredInputs = pageElement.querySelectorAll("[required]");
        let isValid = true;

        requiredInputs.forEach((input) => {
          if (!input.value.trim()) {
            input.style.borderColor = "red";
            isValid = false;
            if (!document.querySelector(".error-message")) {
              const errorMsg = document.createElement("div");
              errorMsg.className = "error-message";
              errorMsg.textContent =
                translations[currentLanguage].fieldRequired;
              errorMsg.style.color = "red";
              input.parentNode.insertBefore(errorMsg, input.nextSibling);
            }
          } else {
            input.style.borderColor = "";
            const errorMsg = input.parentNode.querySelector(".error-message");
            if (errorMsg) errorMsg.remove();
          }
        });

        return isValid;
    }

    return true;
  }

  // Enter edit mode
  function enterEditMode() {
    // Hide all form pages
    formPages.forEach((page) => {
      page.style.display = "none";
    });

    // Hide navigation buttons
    document.querySelector(".form-navigation").style.display = "none";

    // Show edit mode container
    editModeContainer.classList.add("active");

    // Populate all questions
    allQuestionsContainer.innerHTML = "";

    formPages.forEach((page) => {
      const pageClone = page.cloneNode(true);
      pageClone.style.display = "block";

      // Make sure all IDs are unique in edit mode
      const inputs = pageClone.querySelectorAll("input, select, textarea");
      inputs.forEach((input) => {
        if (input.id) {
          input.id = "edit-" + input.id;
        }
      });

      allQuestionsContainer.appendChild(pageClone);
    });

    // Show scroll to top button
    scrollToTopBtn.style.display = "block";

    // Initialize any dynamic elements in edit mode
    const editHeight = document.getElementById("edit-height");
    const editWeight = document.getElementById("edit-weight");
    if (editHeight && editWeight) {
      document.getElementById("edit-heightValue").textContent =
        editHeight.value;
      document.getElementById("edit-weightValue").textContent =
        editWeight.value;

      editHeight.addEventListener("input", function () {
        document.getElementById("edit-heightValue").textContent = this.value;
      });

      editWeight.addEventListener("input", function () {
        document.getElementById("edit-weightValue").textContent = this.value;
      });
    }

    // Handle region select in edit mode
    const editRegion = document.getElementById("edit-region");
    if (editRegion) {
      editRegion.addEventListener("change", function () {
        const editCustomCityGroup = document.getElementById(
          "edit-customCityGroup"
        );
        if (editCustomCityGroup) {
          editCustomCityGroup.style.display =
            this.value === "Другая" ? "block" : "none";
        }
      });
    }
  }

  // Save edit and exit edit mode
  function saveEdit() {
    // Update original forms with edited values
    formPages.forEach((originalPage) => {
      const pageNumber = originalPage.dataset.page;
      const editedPage = allQuestionsContainer.querySelector(
        `.form-page[data-page="${pageNumber}"]`
      );

      if (editedPage) {
        // Update all inputs
        const inputs = editedPage.querySelectorAll("input, select, textarea");
        inputs.forEach((input) => {
          const originalId = input.id.replace("edit-", "");
          const originalInput = originalPage.querySelector(`#${originalId}`);

          if (originalInput) {
            if (input.type === "radio" || input.type === "checkbox") {
              originalInput.checked = input.checked;
            } else {
              originalInput.value = input.value;
            }
          }
        });
      }
    });

    // Hide edit mode
    editModeContainer.classList.remove("active");

    // Show form pages again
    formPages.forEach((page) => {
      page.style.display = "";
    });

    // Show navigation buttons
    document.querySelector(".form-navigation").style.display = "";

    // Hide scroll to top button
    scrollToTopBtn.style.display = "none";

    // Update review data
    populateReviewData();
  }

  // Populate review data
  function populateReviewData() {
    const reviewData = document.getElementById("review-data");
    reviewData.innerHTML = "";

    // Helper function to get radio button value
    function getRadioValue(name) {
      const selected = document.querySelector(`input[name="${name}"]:checked`);
      return selected ? selected.value : "Не указано";
    }

    // Helper function to get other input value
    function getOtherValue(name) {
      const otherInput = document.querySelector(`input[name="${name}-other"]`);
      return otherInput && otherInput.style.display !== "none"
        ? otherInput.value
        : null;
    }

    // Page 1 data
    const page1Data = `
        <div class="review-item">
            <p><strong>Имя:</strong> ${
              document.getElementById("name").value || "Не указано"
            }</p>
            <p><strong>Телефон:</strong> ${
              document.getElementById("phone").value || "Не указано"
            }</p>
        </div>
    `;

    // Page 2 data
    const gender = getRadioValue("gender");
    const country = document.getElementById("country").value || "Не указано";

    const page2Data = `
        <div class="review-item">
            <p><strong>Пол:</strong> ${
              gender === "male"
                ? "Мужчина"
                : gender === "female"
                ? "Женщина"
                : "Не указано"
            }</p>
            <p><strong>Страна:</strong> ${country}</p>
        </div>
    `;

    // Page 3 data
    let region = document.getElementById("region").value || "Не указано";
    if (region === "Другая") {
      region =
        document.getElementById("customCity").value ||
        "Другой город (не указано)";
    }

    const page3Data = `
        <div class="review-item">
            <h3>Местоположение</h3>
            <p><strong>Город:</strong> ${region}</p>
        </div>
    `;

    // Page 4 data
    const age = document.getElementById("age").value || "Не указано";

    const page4Data = `
        <div class="review-item">
            <h3>Возраст</h3>
            <p><strong>Возраст:</strong> ${age}</p>
        </div>
    `;

    // Combine all data
    reviewData.innerHTML = page1Data + page2Data + page3Data + page4Data;

    // Add more pages as needed...
  }

  // Submit form
  function submitForm() {
    // Here you would typically send the form data to the server
    // For now, we'll just show a success message
    alert("Форма успешно отправлена! Спасибо за вашу анкету.");

    // You could also redirect the user or reset the form
    // window.location.href = 'thank-you.html';
  }

  // Initialize the form when DOM is loaded
  document.addEventListener("DOMContentLoaded", initForm);
  // Tahrirlash tugmasi uchun hodisa (DOM yuklanganidan keyin ishga tushirish)
  document.addEventListener("DOMContentLoaded", function () {
    const editBtn = document.querySelector(".edit-btn");
    if (editBtn) {
      editBtn.addEventListener("click", function () {
        // Barcha sahifalarni ko'rsatish
        document.querySelectorAll(".form-page").forEach((page) => {
          page.classList.add("active");
        });

        // Progress barlarni qayta sozlash
        updateProgressBar(0);

        // Tugmalarni qayta sozlash
        document.querySelector(".prev-btn").disabled = true;
        document.querySelector(".next-btn").style.display = "inline-block";
        document.querySelector(".edit-btn").style.display = "none";
        document.querySelector(".submit-btn").style.display = "none";

        // Birinchi sahifaga qaytish
        currentPage = 1;
        document.querySelector('.form-page[data-page="1"]').scrollIntoView();
        showPage(currentPage);
      });
    }
  });
  function updateFormTitles() {
    const formTitles = document.querySelectorAll(".form-title");
    formTitles.forEach((title) => {
      // Полностью заменяем текст заголовка на перевод
      title.textContent = translations[currentLanguage].formTitle;
    });

    // Для страницы 1 (особый заголовок)
    const page1Title = document.querySelector(
      '.form-page[data-page="1"] .form-title'
    );
    if (page1Title) {
      page1Title.textContent =
        currentLanguage === "ru"
          ? "Введите ваши данные"
          : "Деректеріңізді енгізіңіз";
    }

    // Для страницы 10 (Контактная информация)
    const page10Title = document.querySelector(
      '.form-page[data-page="10"] .form-title'
    );
    if (page10Title) {
      page10Title.textContent =
        currentLanguage === "ru"
          ? "Контактная информация"
          : "Байланыс ақпараты";
    }

    // Для страницы 11 (Дополнительная информация)
    const page11Title = document.querySelector(
      '.form-page[data-page="11"] .form-title'
    );
    if (page11Title) {
      page11Title.textContent =
        currentLanguage === "ru"
          ? "Дополнительная информация"
          : "Қосымша ақпарат";
    }

    // Для страницы 12 (Проверка данных)
    const page12Title = document.querySelector(
      '.form-page[data-page="12"] .form-title'
    );
    if (page12Title) {
      page12Title.textContent =
        currentLanguage === "ru"
          ? "Проверьте введённые данные перед отправкой"
          : "Жібермес бұрын енгізген деректеріңізді тексеріңіз";
    }
  }

  function translatePage(lang) {
    const t = translations[lang];

    // Update labels and placeholders
    document.querySelector('label[for="name"]').textContent = t.name;
    document.getElementById("name").placeholder = t.name;

    document.querySelector('label[for="phone"]').textContent = t.phone;
    document.getElementById("phone").placeholder = t.phone;

    document.querySelector(".form-group label").textContent = t.gender;
    document.querySelector('input[value="male"]').nextSibling.textContent =
      t.male;
    document.querySelector('input[value="female"]').nextSibling.textContent =
      t.female;

    document.querySelector('label[for="country"]').textContent = t.country;
    document.getElementById("country").firstElementChild.textContent =
      t.selectCountry;

    document.querySelector('label[for="region"]').textContent = t.region;
    document.getElementById("region").firstElementChild.textContent =
      t.selectRegion;

    document.querySelector('label[for="age"]').textContent = t.age;

    document.querySelector('label[for="nationality"]').textContent =
      t.nationality;

    document.querySelector("label").textContent = t.prayer;
    document.querySelector(
      'input[name="prayer"][value="yes"]'
    ).nextSibling.textContent = t.yes;
    document.querySelector(
      'input[name="prayer"][value="no"]'
    ).nextSibling.textContent = t.no;
    document.querySelector(
      'input[name="prayer"][value="other"]'
    ).nextSibling.textContent = t.other;

    document.querySelector("label").textContent = t.beard;
    document.querySelector(
      'input[name="beard"][value="yes"]'
    ).nextSibling.textContent = t.yes;
    document.querySelector(
      'input[name="beard"][value="no"]'
    ).nextSibling.textContent = t.no;
    document.querySelector(
      'input[name="beard"][value="other"]'
    ).nextSibling.textContent = t.other;

    document.querySelector("label").textContent = t.quran;
    document.querySelector(
      'input[name="quran"][value="yes"]'
    ).nextSibling.textContent = t.yes;
    document.querySelector(
      'input[name="quran"][value="no"]'
    ).nextSibling.textContent = t.no;
    document.querySelector(
      'input[name="quran"][value="other"]'
    ).nextSibling.textContent = t.other;

    document.querySelector('label[for="madhhab"]').textContent = t.madhhab;

    document.querySelector('label[for="marital-status"]').textContent =
      t.maritalStatus;

    document.querySelector('label[for="children"]').textContent = t.children;

    document.querySelector("label").textContent = t.relocation;
    document.querySelector(
      'input[name="relocation"][value="yes"]'
    ).nextSibling.textContent = t.yes;
    document.querySelector(
      'input[name="relocation"][value="no"]'
    ).nextSibling.textContent = t.no;
    document.querySelector(
      'input[name="relocation"][value="other"]'
    ).nextSibling.textContent = t.other;

    document.querySelector('label[for="desired-wife-age"]').textContent =
      t.desiredWifeAge;

    document.querySelector("label").textContent = t.character;
    document.querySelector(
      'input[name="character"][value="other"]'
    ).nextSibling.textContent = t.other;

    document.querySelector('label[for="height"]').textContent = t.height;
    document.querySelector('label[for="weight"]').textContent = t.weight;

    document.querySelector('label[for="education"]').textContent = t.education;

    document.querySelector('label[for="whatsapp"]').textContent = t.whatsapp;
    document.getElementById("whatsapp").placeholder = t.whatsapp;

    document.querySelector('label[for="instagram"]').textContent = t.instagram;
    document.getElementById("instagram").placeholder = t.instagram;

    document.querySelector('label[for="telegram"]').textContent = t.telegram;
    document.getElementById("telegram").placeholder = t.telegram;

    document.querySelector('label[for="about-me"]').textContent = t.aboutMe;
    document.getElementById("about-me").placeholder = t.aboutMe;

    document.querySelector('label[for="about-wife"]').textContent = t.aboutWife;
    document.getElementById("about-wife").placeholder = t.aboutWife;

    document.querySelector('label[for="photo"]').textContent = t.photo;
    document.querySelector(".upload-hint").textContent = t.uploadHint;
    document.getElementById("remove-photo").textContent = t.remove;

    // Update buttons
    nextBtn.textContent = t.next;
    prevBtn.textContent = t.prev;
    submitBtn.textContent = t.submit;

    // Update form titles
    updateFormTitles();
  }

  function goToNextPage() {
    if (!validateCurrentPage()) {
      return;
    }

    // Agar oxirgi sahifada bo'lsak
    if (currentPage >= totalPages) {
      if (confirm(translations[currentLanguage].confirmSubmit)) {
        submitForm();
      }
      return;
    }

    currentPage++;
    showPage(currentPage);
    updateProgress();

    // Agar bu ko'rib chiqish sahifasi bo'lsa
    if (currentPage === totalPages) {
      if (!populateReviewData()) {
        currentPage--; // Orqaga qaytamiz
        showPage(currentPage);
      }
    }
  }

  function goToPrevPage() {
    currentPage--;
    showPage(currentPage);
    updateProgress();
  }

  function updateProgress() {
    const progressPercentage = ((currentPage - 1) / (totalPages - 1)) * 100;
    progressBar.style.width = `${progressPercentage}%`;
    progressText.textContent =
      currentLanguage === "ru"
        ? `Готово: ${currentPage - 1} / ${totalPages - 1}`
        : `Дайын: ${currentPage - 1} / ${totalPages - 1}`;
  }

  function updateProgressBar(currentPage) {
    const progress = (currentPage / totalPages) * 100;
    document.querySelector(".progress").style.width = `${progress}%`;
    document.querySelector(
      ".progress-text"
    ).textContent = `Готово: ${currentPage} / ${totalPages}`;
  }

  function validateCurrentPage() {
    const currentPageElement = document.querySelector(
      `.form-page[data-page="${currentPage}"]`
    );

    // Sahifa elementini tekshiramiz
    if (!currentPageElement) {
      console.error(`${currentPage}-sahifa elementi topilmadi`);
      return false;
    }

    const requiredInputs = currentPageElement.querySelectorAll("[required]");

    let isValid = true;

    requiredInputs.forEach((input) => {
      if (!input.value.trim()) {
        input.style.borderColor = "red";
        isValid = false;
        // Scroll to the first invalid input
        if (isValid === false) {
          input.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      } else {
        input.style.borderColor = "#ddd";
      }
    });

    // Additional validation for specific pages
    if (currentPage === 1) {
      const nameInput = document.getElementById("name");
      const phoneInput = document.getElementById("phone");

      if (!nameInput.value.trim()) {
        nameInput.style.borderColor = "red";
        isValid = false;
        nameInput.scrollIntoView({ behavior: "smooth", block: "center" });
      }

      if (!phoneInput.value.trim() || !isValidPhone(phoneInput.value)) {
        phoneInput.style.borderColor = "red";
        isValid = false;
        phoneInput.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }

    // Telefon raqamni tekshiruvchi funksiya
    function isValidPhone(phone) {
      const cleaned = phone.replace(/\D/g, ""); // raqam bo‘lmagan belgilarni olib tashlaydi
      return cleaned.length >= 10;
    }

    if (currentPage === 2) {
      const genderSelected = document.querySelector(
        'input[name="gender"]:checked'
      );
      const countrySelected = document.getElementById("country").value;

      if (!genderSelected) {
        alert(
          currentLanguage === "ru"
            ? "Пожалуйста, выберите ваш пол"
            : "Өтінемін, жынысыңызды таңдаңыз"
        );
        isValid = false;
      }

      if (!countrySelected) {
        document.getElementById("country").style.borderColor = "red";
        isValid = false;
        document
          .getElementById("country")
          .scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }

    if (currentPage === 4) {
      const ageInput = document.getElementById("age");
      const age = parseInt(ageInput.value);

      if (isNaN(age) || age < 18 || age > 65) {
        ageInput.style.borderColor = "red";
        isValid = false;
        ageInput.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }

    if (currentPage === 9) {
      const heightInput = document.getElementById("height");
      const weightInput = document.getElementById("weight");
      const height = parseInt(heightInput.value);
      const weight = parseInt(weightInput.value);

      if (isNaN(height) || height < 150 || height > 220) {
        heightInput.style.borderColor = "red";
        isValid = false;
        heightInput.scrollIntoView({ behavior: "smooth", block: "center" });
      }

      if (isNaN(weight) || weight < 45 || weight > 120) {
        weightInput.style.borderColor = "red";
        isValid = false;
        weightInput.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }

    if (currentPage === 11) {
      const photoInput = document.getElementById("photo");
      if (!photoInput.files || !photoInput.files[0]) {
        alert(
          currentLanguage === "ru"
            ? "Пожалуйста, загрузите вашу фотографию для проверки"
            : "Өтінемін, тексеру үшін фотосуретіңізді жүктеңіз"
        );
        isValid = false;
        photoInput.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
    checkPageCompletion(currentPage);

    return isValid;
  }

  function isValidPhone(phone) {
    return phone.length >= 10;
  }

  function toggleOtherInput(selectElement, otherInputId) {
    const otherInput = document.getElementById(otherInputId);
    if (selectElement.value === "other") {
      otherInput.style.display = "block";
    } else {
      otherInput.style.display = "none";
      otherInput.value = "";
    }
  }

  const countrySelect = document.getElementById("country");
  const citySelect = document.getElementById("region");
  const customCityGroup = document.getElementById("customCityGroup");

  function getCitiesByCountry(country) {
    const cities = {
      kazakhstan: [
        "Алматы",
        "Астана",
        "Шымкент",
        "Актобе",
        "Тараз",
        "Атырау",
        "Кызылорда",
        "Актау",
        "Павлодар",
        "Караганда",
        "Костанай",
        "Туркестан",
      ],
      kyrgyzstan: [
        "Бишкек",
        "Ош",
        "Джалал-Абад",
        "Каракол",
        "Токмок",
        "Узген",
        "Базар-Коргон",
      ],
      uzbekistan: [
        "Ташкент",
        "Самарканд",
        "Бухара",
        "Наманган",
        "Андижан",
        "Навои",
      ],
      russia: [
        "Москва",
        "Санкт-Петербург",
        "Казань",
        "Уфа",
        "Махачкала",
        "Новосибирск",
        "Екатеринбург",
        "Нижний Новгород",
        "Челябинск",
      ],
      indonesia: [
        "Джакарта",
        "Бандунг",
        "Сурабая",
        "Медан",
        "Семаранг",
        "Бекаси",
        "Депок",
        "Тангеранг",
        "Палембанг",
        "Макассар",
        "Южный Тангеранг",
        "Батам",
      ],
    };
    return cities[country] || [];
  }

  // Yurt tanlanganda shaharlar yangilanadi
  countrySelect.addEventListener("change", function () {
    const selectedCountry = this.value;
    const cities = getCitiesByCountry(selectedCountry);

    citySelect.innerHTML = `<option value="">-- Выберите Ваш город --</option>`;
    cities.forEach((city) => {
      const option = document.createElement("option");
      option.value = city;
      option.textContent = city;
      citySelect.appendChild(option);
    });

    // "Другая" opsiyasini qo‘shamiz
    const otherOption = document.createElement("option");
    otherOption.value = "Другая";
    otherOption.textContent = "Другая (введите вручную)";
    citySelect.appendChild(otherOption);

    // Reset custom city input
    customCityGroup.style.display = "none";
    document.getElementById("customCity").value = "";
  });

  // Agar "Другая" tanlansa, input maydoni chiqsin
  citySelect.addEventListener("change", function () {
    if (this.value === "Другая") {
      customCityGroup.style.display = "block";
    } else {
      customCityGroup.style.display = "none";
    }
  });

  function populateReviewData() {
    const reviewDataElement = document.getElementById("review-data");

    if (!reviewDataElement) {
      console.error("Ko'rib chiqish maydoni topilmadi");
      alert(
        currentLanguage === "ru"
          ? "Ошибка: Не найдена область просмотра данных"
          : "Қате: Деректерді қарау аймағы табылмады"
      );
      return false;
    }

    reviewDataElement.innerHTML = "";

    try {
      // Personal Info
      addReviewItem(
        translations[currentLanguage].name,
        document.getElementById("name").value
      );
      addReviewItem(
        translations[currentLanguage].phone,
        document.getElementById("phone").value
      );

      // ... (qolgan kodlaringizni shu yerda saqlang)

      return true;
    } catch (error) {
      console.error("Ma'lumotlarni to'ldirishda xato:", error);
      return false;
    }
  }

  function addReviewItem(label, value) {
    if (!value) return;

    const reviewDataElement = document.getElementById("review-data");
    const itemDiv = document.createElement("div");
    itemDiv.className = "review-item";

    const labelSpan = document.createElement("div");
    labelSpan.className = "review-label";
    labelSpan.textContent = label;

    const valueSpan = document.createElement("div");
    valueSpan.className = "review-value";
    valueSpan.textContent = value;

    itemDiv.appendChild(labelSpan);
    itemDiv.appendChild(valueSpan);
    reviewDataElement.appendChild(itemDiv);
  }

  function submitForm() {
    // Yakuniy validatsiya
    if (!validateCurrentPage()) {
      alert(translations[currentLanguage].fillRequiredFields);
      return;
    }

    // Ma'lumotlarni yig'ish
    const formData = new FormData();

    // Ism va telefon
    formData.append("name", document.getElementById("name").value);
    formData.append("phone", document.getElementById("phone").value);

    // ... barcha boshqa maydonlarni qo'shing

    // Rasmni qo'shish
    const photoInput = document.getElementById("photo");
    if (photoInput.files[0]) {
      formData.append("photo", photoInput.files[0]);
    }

    // Yuborish tugmasini bloklash
    const submitBtn = document.getElementById("submit-btn");
    submitBtn.disabled = true;
    submitBtn.textContent = translations[currentLanguage].submitting;

    // Serverga yuborish
    fetch("http://localhost:3000/api/submit-form", {
      method: "POST",
      body: formData,
    })
      .then(async (response) => {
        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.message || "Unknown error");
        }
        return response.json();
      })
      .then((data) => {
        alert(translations[currentLanguage].submitSuccess);
        // Formani tozalash yoki boshqa sahifaga o'tish
        resetForm();
      })
      .catch((error) => {
        console.error("Yuborishda xato:", error);
        alert(`${translations[currentLanguage].submitError}: ${error.message}`);
      })
      .finally(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = translations[currentLanguage].submit;
      });
  }

  function resetForm() {
    // Formani tozalash
    document.querySelectorAll("input, select, textarea").forEach((element) => {
      if (element.type !== "button" && element.type !== "submit") {
        element.value = "";
      }
    });

    // Birinchi sahifaga qaytish
    currentPage = 1;
    showPage(currentPage);
    updateProgress();
  }

  function updateProgress() {
    const progressBar = document.getElementById("progress-bar");
    if (progressBar) {
      const progress = (currentPage / totalPages) * 100;
      progressBar.style.width = `${progress}%`;
      progressBar.setAttribute("aria-valuenow", progress);
    }
  }

  // Добавьте эту функцию в ваш код
  function setupInputListeners() {
    // Обработчики для всех input, select и textarea
    document.querySelectorAll("input, select, textarea").forEach((input) => {
      input.addEventListener("input", function () {
        checkPageCompletion(currentPage);
      });
      input.addEventListener("change", function () {
        checkPageCompletion(currentPage);
      });
    });

    // Особые обработчики для радио-кнопок и чекбоксов
    document
      .querySelectorAll('input[type="radio"], input[type="checkbox"]')
      .forEach((input) => {
        input.addEventListener("change", function () {
          checkPageCompletion(currentPage);
        });
      });

    // Особые обработчики для страницы 1
    document.getElementById("name").addEventListener("input", function () {
      checkPageCompletion(currentPage);
    });
    document.getElementById("phone").addEventListener("input", function () {
      checkPageCompletion(currentPage);
    });

    // Особые обработчики для страницы 2
    document.querySelectorAll('input[name="gender"]').forEach((radio) => {
      radio.addEventListener("change", function () {
        checkPageCompletion(currentPage);
      });
    });
    document.getElementById("country").addEventListener("change", function () {
      checkPageCompletion(currentPage);
    });
  }

  // Обновите функцию initForm
  function initForm() {
    showPage(currentPage);
    updateProgress();
    setupInputListeners(); // Добавьте этот вызов
  }

  // Улучшенная функция checkPageCompletion
  function checkPageCompletion(pageNumber) {
    const currentPageElement = document.querySelector(
      `.form-page[data-page="${pageNumber}"]`
    );
    if (!currentPageElement) return;

    const requiredInputs = currentPageElement.querySelectorAll("[required]");
    let isComplete = true;

    requiredInputs.forEach((input) => {
      if (input.type === "checkbox" || input.type === "radio") {
        // Для чекбоксов и радио проверяем, есть ли хотя бы один выбранный в группе
        const name = input.name;
        const checked = document.querySelector(`input[name="${name}"]:checked`);
        if (!checked) {
          isComplete = false;
        }
      } else if (!input.value.trim()) {
        isComplete = false;
      }
    });

    // Дополнительные проверки для страниц с особыми требованиями
    if (pageNumber === 1) {
      const nameInput = document.getElementById("name");
      const phoneInput = document.getElementById("phone");
      if (
        !nameInput.value.trim() ||
        !phoneInput.value.trim() ||
        !isValidPhone(phoneInput.value)
      ) {
        isComplete = false;
      }
    }

    if (pageNumber === 2) {
      const genderSelected = document.querySelector(
        'input[name="gender"]:checked'
      );
      const countrySelected = document.getElementById("country").value;
      if (!genderSelected || !countrySelected) {
        isComplete = false;
      }
    }

    if (pageNumber === 4) {
      const ageInput = document.getElementById("age");
      const age = parseInt(ageInput.value);
      if (isNaN(age)) isComplete = false;
    }

    if (pageNumber === 11) {
      const photoInput = document.getElementById("photo");
      if (!photoInput.files || !photoInput.files[0]) {
        isComplete = false;
      }
    }

    // Обновляем состояние кнопки "Далее"
    if (pageNumber !== totalPages && nextBtn) {
      nextBtn.style.backgroundColor = isComplete ? "" : "#ccc";
      nextBtn.disabled = !isComplete;
    }
  }
});
