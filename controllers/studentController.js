
/**
 * @desc get all student data
 * @name GET / sutdest
 * @access public
 */
const getAllStudents = (req, res) =>{

    res.render('index');
}

/**
 * @desc get all student data
 * @name GET / sutdest
 * @access public
 */
const createStudents = (req, res) =>{

    res.render('createStudent');
}





// export controllers
module.exports = {
    getAllStudents,
    createStudents
}