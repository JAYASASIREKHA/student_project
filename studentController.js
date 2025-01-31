const Student = require('../models/Student');

exports.createStudent = async (req, res) => {
    try {
        const { serialNo, name, class: studentClass, batch, paymentDate, mobile, payAmount } = req.body;
        const newStudent = new Student({ serialNo, name, class: studentClass, batch, paymentDate, mobile, payAmount });
        const savedStudent = await newStudent.save();
        res.status(201).json(savedStudent);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.editStudent = async (req, res) => {
    try {
        const s_id = req.params.id;
        const { serialNo, name, class: studentClass, batch, paymentDate, mobile, payAmount } = req.body;
        const updatedStudent = await Student.findByIdAndUpdate(s_id, { serialNo, name, class: studentClass, batch, paymentDate, mobile, payAmount }, { new: true });
        if (!updatedStudent) {
            return res.status(404).json({ message: "Student not found" });
        }
        res.status(200).json(updatedStudent);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;
        await Student.findByIdAndDelete(id);
        res.status(200).json({ message: "Student deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
