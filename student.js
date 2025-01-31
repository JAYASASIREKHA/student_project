const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

router.post('/', studentController.createStudent);
router.get('/', studentController.getStudents);
router.put('/:id', studentController.editStudent);
router.delete('/:id', studentController.deleteStudent);

module.exports = router;
