import React, { useState, useEffect } from "react";
import { getDepartments, deleteDepartment, updateDepartment } from "../api/api";

function DepartmentList() {
  const [departments, setDepartments] = useState([]);
  const [editDepartment, setEditDepartment] = useState(null);
  const [newName, setNewName] = useState("");

  const fetchDepartments = async () => {
    try {
      const data = await getDepartments();
      setDepartments(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDepartments();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this department?")) {
      try {
        await deleteDepartment(id);
        setDepartments(departments.filter((d) => d.id !== id));
      } catch (error) {
        console.error("Delete failed:", error);
      }
    }
  };

  const handleEdit = (dept) => {
    setEditDepartment(dept);
    setNewName(dept.name); // Pre-fill the form with the department's current name
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!newName.trim()) {
      alert("Department name is required.");
      return;
    }

    const updatedDept = { ...editDepartment, name: newName };
    try {
      await updateDepartment(updatedDept);
      setDepartments(
        departments.map((dept) =>
          dept.id === updatedDept.id ? updatedDept : dept
        )
      );
      setEditDepartment(null); // Close the edit form
      setNewName(""); // Reset the form field
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  return (
    <div className="table-container">
      <h2>Departments</h2>

      {/* Edit Form */}
      {editDepartment && (
        <div className="edit-form">
          <h3>Edit Department</h3>
          <form onSubmit={handleUpdate}>
            <div>
              <label>Department Name</label>
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                required
              />
            </div>
            <button type="submit">Save</button>
            <button type="button" onClick={() => setEditDepartment(null)}>
              Cancel
            </button>
          </form>
        </div>
      )}

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Department Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((dept) => (
            <tr key={dept.id}>
              <td>{dept.id}</td>
              <td>{dept.name}</td>
              <td>
                <button onClick={() => handleEdit(dept)}>Edit</button>
                <button onClick={() => handleDelete(dept.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DepartmentList;
