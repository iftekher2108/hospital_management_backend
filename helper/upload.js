const multer = require('multer');
const path = require("path");

// user upload
const userStorage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "public/user/"),
    filename: (req, file, cb) => cb(null, "user-"+ Date.now() + path.extname(file.originalname)),
})
exports.userUpload = multer({ storage: userStorage })


// patient upload

const patientStorage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "public/patient/"),
    filename: (req, file, cb) => cb(null, "patient-"+ Date.now() + path.extname(file.originalname)),
})
exports.patientUpload = multer({ storage:patientStorage })


