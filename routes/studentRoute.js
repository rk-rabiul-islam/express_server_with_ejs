const express = require('express');
const { getAllStudents, createStudents } = require('../controllers/studentController');
const router = express.Router();

// student route

router.get('/', getAllStudents);
router.get('/create', createStudents);




// export router
module.exports = router;