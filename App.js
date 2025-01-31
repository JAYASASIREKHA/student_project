import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage"; // Import LoginPage
import StudentManagement from "./pages/StudentManagement"; // Import Student Management Page
import './style.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for Login Page */}
        <Route path="/" element={<LoginPage />} />

        {/* Route for Student Management Page */}
        <Route path="/student-management" element={<StudentManagement />} />
      </Routes>
    </Router>
  );
}

export default App;
