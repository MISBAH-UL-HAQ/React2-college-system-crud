// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



// src/App.js

// import React, { useState } from "react";
// import Header from "./components/Header";
// import DepartmentList from "./components/DepartmentList";
// import AddDepartment from "./components/AddDepartment";
// import "./style.css";

// function App() {
//   // Optionally, manage state to refresh the department list when a new one is added.
//   const [refresh, setRefresh] = useState(false);

//   const handleDepartmentAdded = () => {
//     // Toggle refresh or implement a more targeted update
//     setRefresh(!refresh);
//   };

//   return (
//     <div className="main-container">
//       <Header />
//       <AddDepartment onDepartmentAdded={handleDepartmentAdded} />
//       <DepartmentList key={refresh} />
//     </div>
//   );
// }

// export default App;



// src/App.js

import React, { useState } from "react";
import Header from "./components/Header";
import DepartmentList from "./components/DepartmentList";
import AddDepartment from "./components/AddDepartment";
import StudentList from "./components/StudentList";
import AddStudent from "./components/AddStudent";
import "./style.css";

function App() {
  // For students, manage a “refresh” toggle and an editable student selection
  const [studentRefresh, setStudentRefresh] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleStudentSaved = (student) => {
    // Optionally use the student data to update local list or toggle refresh.
    setStudentRefresh(!studentRefresh);
  };

  const handleEditStudent = (student) => {
    setSelectedStudent(student);
  };

  const clearSelectedStudent = () => {
    setSelectedStudent(null);
  };

  return (
    <div className="main-container">
      <Header />
      <h2>Departments</h2>
      <AddDepartment onDepartmentAdded={() => {}} />
      <DepartmentList />

      <h2>Students</h2>
      <AddStudent
        onStudentSaved={handleStudentSaved}
        selectedStudent={selectedStudent}
        clearSelectedStudent={clearSelectedStudent}
      />
      <StudentList onEditStudent={handleEditStudent} key={studentRefresh} />
    </div>
  );
}

export default App;
