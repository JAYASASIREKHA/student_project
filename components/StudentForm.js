import React, { useState, useEffect } from "react";
import { createStudent, updateStudent } from "../api/studentService";

const StudentForm = ({ selectedStudent, refreshData }) => {
  const [student, setStudent] = useState({
    serialNo: "",
    name: "",
    class: "",
    batch: "",
    paymentDate: "",
    mobile: "",
    payAmount: "",
  });

  useEffect(() => {
    if (selectedStudent) {
      setStudent(selectedStudent);
    }
  }, [selectedStudent]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedStudent) {
      await updateStudent(selectedStudent._id, student);
    } else {
      await createStudent(student);
    }
    refreshData();
    setStudent({ serialNo: "", name: "", class: "", batch: "", paymentDate: "", mobile: "", payAmount: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="student-form">
      <input type="text" name="serialNo" placeholder="Serial No" value={student.serialNo} onChange={handleChange} required />
      <input type="text" name="name" placeholder="Name" value={student.name} onChange={handleChange} required />
      <input type="text" name="class" placeholder="Class" value={student.class} onChange={handleChange} required />
      <input type="text" name="batch" placeholder="Batch" value={student.batch} onChange={handleChange} required />
      <input type="date" name="paymentDate" placeholder="Payment Date" value={student.paymentDate} onChange={handleChange} required />
      <input type="text" name="mobile" placeholder="Mobile" value={student.mobile} onChange={handleChange} required />
      <input type="number" name="payAmount" placeholder="Pay Amount" value={student.payAmount} onChange={handleChange} required />
      <button type="submit">{selectedStudent ? "Update" : "Add"}</button>
    </form>
  );
};

export default StudentForm;
