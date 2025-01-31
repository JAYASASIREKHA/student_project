document.addEventListener("DOMContentLoaded", () => {
    loadStudents();
});

// Store Student Data
let students = [];

// Function to Add Student
function addStudent() {
    let student = {
        serialNo: document.getElementById("serialNo").value,
        name: document.getElementById("name").value,
        class: document.getElementById("class").value,
        batch: document.getElementById("batch").value,
        paymentDate: document.getElementById("paymentDate").value,
        mobile: document.getElementById("mobile").value,
        payAmount: document.getElementById("payAmount").value
    };

    if (!student.name || !student.class) {
        alert("Name and Class are required!");
        return;
    }

    students.push(student);
    saveStudents();
    displayStudents();
    clearForm();
}

// Function to Display Students
function displayStudents() {
    let table = document.getElementById("studentTable");
    table.innerHTML = "";

    students.forEach((student, index) => {
        let row = table.insertRow();
        row.innerHTML = `
            <td>${student.serialNo}</td>
            <td>${student.name}</td>
            <td>${student.class}</td>
            <td>${student.batch}</td>
            <td>${student.paymentDate}</td>
            <td><button onclick="editStudent(${index})">✏️ Edit</button></td>
            <td><button onclick="deleteStudent(${index})">🗑 Delete</button></td>
        `;
    });
}

// Function to Edit Student
function editStudent(index) {
    let student = students[index];
    document.getElementById("serialNo").value = student.serialNo;
    document.getElementById("name").value = student.name;
    document.getElementById("class").value = student.class;
    document.getElementById("batch").value = student.batch;
    document.getElementById("paymentDate").value = student.paymentDate;
    document.getElementById("mobile").value = student.mobile;
    document.getElementById("payAmount").value = student.payAmount;
    students.splice(index, 1);
}

// Function to Delete Student
function deleteStudent(index) {
    students.splice(index, 1);
    saveStudents();
    displayStudents();
}

// Function to Search Students
function searchStudent() {
    let query = document.getElementById("search").value.toLowerCase();
    let filteredStudents = students.filter(student => student.name.toLowerCase().includes(query));
    let table = document.getElementById("studentTable");
    table.innerHTML = "";

    filteredStudents.forEach((student, index) => {
        let row = table.insertRow();
        row.innerHTML = `
            <td>${student.serialNo}</td>
            <td>${student.name}</td>
            <td>${student.class}</td>
            <td>${student.batch}</td>
            <td>${student.paymentDate}</td>
            <td><button onclick="editStudent(${index})">✏️ Edit</button></td>
            <td><button onclick="deleteStudent(${index})">🗑 Delete</button></td>
        `;
    });
}

// Function to Save Students to Local Storage
function saveStudents() {
    localStorage.setItem("students", JSON.stringify(students));
}

// Function to Load Students from Local Storage
function loadStudents() {
    let storedStudents = localStorage.getItem("students");
    if (storedStudents) {
        students = JSON.parse(storedStudents);
        displayStudents();
    }
}

// Function to Clear Form
function clearForm() {
    document.getElementById("serialNo").value = "";
    document.getElementById("name").value = "";
    document.getElementById("class").value = "";
    document.getElementById("batch").value = "";
    document.getElementById("paymentDate").value = "";
    document.getElementById("mobile").value = "";
    document.getElementById("payAmount").value = "";
}
