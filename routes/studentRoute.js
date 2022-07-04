const express = require('express');
const { getAllStudents, viewStudentForm, createStudent, viewSingleStudent, deleteStudentData, studentDataUpdateForm, editStudentData } = require('../controllers/studentController');
const router = express.Router();
const multer = require('multer'); 
const path = require('path');

// multer work
const storage = multer.diskStorage({

    destination : (req, file, cb) => {

        cb(null, path.join(__dirname, '../assets/upload/'))
    },
    filename : (req, file, cb) => {
        let {name} = req.body;
        let extName = path.extname(file.originalname);
        let fileName = name + '_' + Date.now() + extName;
        
        cb(null, fileName);

    }
});
// multer load
const dataSetting = multer({
    storage : storage
}).single('photo');

// student route

router.get('/', getAllStudents);
router.get('/create', viewStudentForm);
router.post('/', dataSetting, createStudent);
router.get('/:id', viewSingleStudent);
router.get('/edit/:id', studentDataUpdateForm);
router.post('edit/:id', dataSetting, editStudentData);
router.get('/delete/:id', deleteStudentData);




// export router
module.exports = router;