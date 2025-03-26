

import React, { useState, useEffect } from "react";
import { addStudent, updateStudent } from "../api/api";

function AddStudent({ onStudentSaved, selectedStudent, clearSelectedStudent }) {
  const [student, setStudent] = useState({ name: "", departmentId: "" });

  // When a student is set for editing, populate the form fields.
  useEffect(() => {
    if (selectedStudent) {
      setStudent(selectedStudent);
    }
  }, [selectedStudent]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (student.id) {
        // Update mode
        const updated = await updateStudent(student);
        alert("Student updated successfully!");
        onStudentSaved(updated);
      } else {
        // Create mode
        const newStudent = await addStudent(student);
        alert("Student added successfully!");
        onStudentSaved(newStudent);
      }
      setStudent({ name: "", departmentId: "" });
      if (clearSelectedStudent) clearSelectedStudent();
    } catch (error) {
      console.error("Error saving student:", error);
      alert("Error occurred while saving student.");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={student.name}
          onChange={handleChange}
          placeholder="Student Name"
          required
        />
        <input
          type="number"
          name="departmentId"
          value={student.departmentId}
          onChange={handleChange}
          placeholder="Department ID"
          required
        />
        <button type="submit">
          {student.id ? "Update Student" : "Add Student"}
        </button>
      </form>
    </div>
  );
}

export default AddStudent;
