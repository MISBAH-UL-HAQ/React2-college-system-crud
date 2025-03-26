

import React, { useState, useEffect } from "react";
import { getStudents, deleteStudent } from "../api/api";

function StudentList({ onEditStudent }) {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    try {
      const data = await getStudents();
      setStudents(data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      try {
        await deleteStudent(id);
        setStudents(students.filter((s) => s.id !== id));
      } catch (error) {
        console.error("Delete failed:", error);
      }
    }
  };

  return (
    <div className="table-container">
      <h2>Students</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.departmentId}</td>
              <td>
                <button onClick={() => onEditStudent(student)}>Edit</button>
                <button onClick={() => handleDelete(student.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
