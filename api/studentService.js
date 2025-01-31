import axios from 'axios';

const API_URL = "http://localhost:5000/students"; // Change if needed

export const getStudents = async () => axios.get(API_URL);
export const createStudent = async (studentData) => axios.post(API_URL, studentData);
export const updateStudent = async (id, studentData) => axios.put(`${API_URL}/${id}`, studentData);
export const deleteStudent = async (id) => axios.delete(`${API_URL}/${id}`);
