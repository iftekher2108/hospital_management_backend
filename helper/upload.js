const multer = require('multer');
const fs = require('fs')
const path = require("path");

// user upload
const userStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        if(file.fieldname == 'user') {
            const upPath = "public/user/";
            if(fs.existsSync(upPath)) {
                fs.mkdirSync(upPath,{ recursive: true });
            }
         cb(null, upPath)   
        }
    },
    filename: (req, file, cb) => cb(null, "user-"+ Date.now() + path.extname(file.originalname)),
})
exports.userUpload = multer({ storage: userStorage })


// patient upload

const patientStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        if(file.fieldname == 'picture') {
            const upPath = "public/patient/";
            if(fs.existsSync(upPath)) {
                fs.mkdirSync(upPath, { recursive: true });
            }
          cb(null, upPath)  
        }
    },
    filename: (req, file, cb) => cb(null, "patient-"+ Date.now() + path.extname(file.originalname)),
})
exports.patientUpload = multer({ storage:patientStorage })




