const Student = require('../models/studentModel');
const fs = require('fs');
const path = require('path');

/**
 * @desc get all student data
 * @name GET / sutdest
 * @access public
 */
const getAllStudents = async (req, res) =>{

    let students = await Student.find();
    res.render('index', {students});
}

/**
 * @desc View student Form
 * @name GET / sutdest/createStudent
 * @access public
 */
const viewStudentForm = (req, res) =>{
    res.render('createStudent');
}

/**
 * @desc creat new student data
 * @name GET / sutdest/createStudent
 * @access public
 */
const createStudent = (req, res) =>{

    // creact a new student
    Student.create({
        ...req.body,
        photo : req.file.filename
    });

    // redirect to all student page 
    res.redirect('/student');
}

/**
 * @desc view single student data
 * @name GET / sutdest/view/:id
 * @access public
 */
const viewSingleStudent = async (req, res) =>{
    let id = req.params.id;
    let view_single = await Student.findById(id);
    res.render('view', {view_single});
}

/**
 * @desc edit student data
 * @name GET / sutdest/edit/:id
 * @access public
 */
const studentDataUpdateForm = async (req, res) =>{

    let id = req.params.id;
    let edit_student_data = await Student.findById(id);

    res.render('edit', {edit_student_data});
}

/**
 * @desc edit student data
 * @name GET / sutdest/edit/:id
 * @access public
 */
const editStudentData = async (req, res) =>{
    let id = req.params.id

    let file_name = req.body.old_photo

    if (req.file) {
        file_name = req.file.filename

         fs.unlink(path.join(__dirname, `../assets/upload/${req.body.old_photo}`),
          (err) => {
            if (err) {
              console.error(err)
              return
            }
            //file removed
          });
    }

    await Student.findByIdAndUpdate(id, {
        ...req.body,
        photo: file_name
    },{ 
        new: true 
    });
    
    res.redirect('/student');
}

/**
 * @desc edit student data
 * @name GET / sutdest/edit/:id
 * @access public
 */
const deleteStudentData = async (req, res) =>{
    let id = req.params.id;

    let deletPhoto = await Student.findById(id);
    let photo = deletPhoto.photo

    fs.unlink(path.join(__dirname, `../assets/upload/${photo}`),
    (err) => {
      if (err) {
        console.error(err)
        return
      }
      //file removed
    });

    await Student.findByIdAndDelete(id);
    res.redirect('/student');
}



// export controllers
module.exports = {
    getAllStudents,
    viewStudentForm,
    createStudent,
    viewSingleStudent,
    studentDataUpdateForm,
    editStudentData,
    deleteStudentData

}