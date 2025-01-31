import React, { useEffect, useState } from "react";
import { getStudents } from "../api/studentService";
import StudentForm from "../components/StudentForm";
import StudentList from "../components/StudentList";
import SearchBar from "../components/SearchBar";

const StudentManagement = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch Students from API
  const fetchStudents = async () => {
    try {
      const response = await getStudents();
      setStudents(response.data);
      console.log("Fetched Students:", response.data); // Debugging log
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // Debugging: Check if searchTerm updates correctly
  useEffect(() => {
    console.log("Search term:", searchTerm);
  }, [searchTerm]);

  // Filtering Students by Payment Date
  const filteredStudents = students.filter((student) => {
    return searchTerm ? student.paymentDate.trim() === searchTerm.trim() : true;
  });

  // Debugging: Check filtered results
  useEffect(() => {
    console.log("Filtered Students:", filteredStudents);
  }, [filteredStudents]);

  return (
    <div className="container">
      <h1>Student Management System</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      <StudentForm selectedStudent={selectedStudent} refreshData={fetchStudents} />
      <StudentList students={filteredStudents} selectStudent={setSelectedStudent} refreshData={fetchStudents} />
    </div>
  );
};

export default StudentManagement;
