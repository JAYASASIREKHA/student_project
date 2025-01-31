import React from "react";
import { deleteStudent } from "../api/studentService";

const StudentList = ({ students, selectStudent, refreshData }) => {
  const handleDelete = async (id) => {
    await deleteStudent(id);
    refreshData();
  };

  return (
    <table className="student-table">
      <thead>
        <tr>
          <th>Serial No</th>
          <th>Name</th>
          <th>Class</th>
          <th>Batch</th>
          <th>Payment Date</th>
          <th>Mobile</th>
          <th>Pay Amount</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student._id}>
            <td>{student.serialNo}</td>
            <td>{student.name}</td>
            <td>{student.class}</td>
            <td>{student.batch}</td>
            <td>{student.paymentDate}</td>
            <td>{student.mobile}</td>
            <td>{student.payAmount}</td>
            <td>
              <button onClick={() => selectStudent(student)}>Edit</button>
              <button onClick={() => handleDelete(student._id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentList;
