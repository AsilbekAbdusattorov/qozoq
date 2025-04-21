require('dotenv').config(); // .env faylini yuklash uchun
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const app = express();

// .env fayldan o'qilgan sozlamalar
const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost';
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://shop7347:Asilbek2007@cluster0.nob2u.mongodb.net/nikah-space?retryWrites=true&w=majority";
const ALLOWED_ORIGINS = process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',') : ['http://localhost:3000', 'http://127.0.0.1:5500'];

// Enhanced CORS configuration
app.use(
  cors({
    origin: ALLOWED_ORIGINS,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// MongoDB connection
mongoose.connect(MONGODB_URI)
  .then(() => console.log("Successfully connected to MongoDB"))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

// File upload configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Updated Schema with status field
const formSubmissionSchema = new mongoose.Schema({
  name: String,
  phone: String,
  gender: String,
  country: String,
  region: String,
  age: Number,
  nationality: String,
  prayer: String,
  beard: String,
  quran: String,
  madhhab: String,
  maritalStatus: String,
  children: String,
  relocation: String,
  desiredWifeAgeMin: Number,
  desiredWifeAgeMax: Number,
  character: [String],
  height: Number,
  weight: Number,
  education: String,
  whatsapp: String,
  instagram: String,
  telegram: String,
  aboutMe: String,
  aboutWife: String,
  photo: String,
  language: String,
  status: { 
    type: String, 
    default: 'pending', 
    enum: ['pending', 'approved', 'rejected'] 
  },
  submittedAt: { type: Date, default: Date.now },
});

const FormSubmission = mongoose.model("FormSubmission", formSubmissionSchema);

// Form submission endpoint
app.post('/api/submit-form', upload.single('photo'), async (req, res) => {
    try {
        const formData = {
            ...req.body,
            photo: req.file ? `/images/uploads/${req.file.filename}` : null
        };

        const newSubmission = new FormSubmission(formData);
        const savedSubmission = await newSubmission.save();
        
        res.status(200).json({ 
            success: true,
            message: 'Form submitted successfully',
            data: savedSubmission
        });
    } catch (error) {
        console.error("Error saving submission:", error);
        res.status(500).json({ 
            success: false,
            message: 'Error submitting form',
            error: error.message
        });
    }
});

// Get all submissions with pagination and filtering
app.get('/api/submissions', async (req, res) => {
    try {
        const { page = 1, search, country, gender, status } = req.query;
        const limit = 10;
        const skip = (page - 1) * limit;

        // Build query
        const query = {};
        
        if (search) {
            query.$or = [
                { name: { $regex: search, $options: 'i' } },
                { phone: { $regex: search, $options: 'i' } },
                { country: { $regex: search, $options: 'i' } }
            ];
        }
        
        if (country) query.country = country;
        if (gender) query.gender = gender;
        if (status) query.status = status;

        const submissions = await FormSubmission.find(query)
            .sort({ submittedAt: -1 })
            .skip(skip)
            .limit(limit)
            .lean();

        const totalCount = await FormSubmission.countDocuments(query);
        const totalPages = Math.ceil(totalCount / limit);

        res.json({
            submissions,
            totalPages,
            currentPage: parseInt(page),
            totalCount
        });
    } catch (error) {
        console.error("Error fetching submissions:", error);
        res.status(500).json({ 
            success: false,
            message: 'Error fetching submissions',
            error: error.message
        });
    }
});

// Get single submission
app.get('/api/submissions/:id', async (req, res) => {
    try {
        const submission = await FormSubmission.findById(req.params.id).lean();
        if (!submission) {
            return res.status(404).json({ 
                success: false,
                message: 'Submission not found'
            });
        }
        
        // Ensure photo URL is correct
        if (submission.photo && !submission.photo.startsWith('http')) {
            submission.photo = `${API_BASE_URL}:${PORT}${submission.photo}`;
        }
        
        res.json(submission);
    } catch (error) {
        console.error("Error fetching submission:", error);
        res.status(500).json({ 
            success: false,
            message: 'Error fetching submission',
            error: error.message
        });
    }
});

// Update submission status
app.patch('/api/submissions/:id/status', async (req, res) => {
    try {
        const { status } = req.body;
        if (!['pending', 'approved', 'rejected'].includes(status)) {
            return res.status(400).json({ 
                success: false,
                message: 'Invalid status value'
            });
        }

        const updatedSubmission = await FormSubmission.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true }
        );

        if (!updatedSubmission) {
            return res.status(404).json({ 
                success: false,
                message: 'Submission not found'
            });
        }

        res.json({
            success: true,
            message: 'Status updated successfully',
            data: updatedSubmission
        });
    } catch (error) {
        console.error("Error updating status:", error);
        res.status(500).json({ 
            success: false,
            message: 'Error updating status',
            error: error.message
        });
    }
});

// Delete submission
app.delete('/api/submissions/:id', async (req, res) => {
    try {
        const deletedSubmission = await FormSubmission.findByIdAndDelete(req.params.id);
        if (!deletedSubmission) {
            return res.status(404).json({ 
                success: false,
                message: 'Submission not found'
            });
        }

        res.json({
            success: true,
            message: 'Submission deleted successfully'
        });
    } catch (error) {
        console.error("Error deleting submission:", error);
        res.status(500).json({ 
            success: false,
            message: 'Error deleting submission',
            error: error.message
        });
    }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on ${API_BASE_URL}:${PORT}`);
});