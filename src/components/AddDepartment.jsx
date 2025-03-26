

import React, { useState } from "react";
import { addDepartment } from "../api/api";

function AddDepartment({ onDepartmentAdded }) {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newDept = await addDepartment({ name });
      alert("Department added successfully!");
      setName("");
     
      if (onDepartmentAdded) onDepartmentAdded(newDept);
    } catch (error) {
      console.error("Add failed:", error);
      alert("Error adding department.");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Department Name"
          required
        />
        <button type="submit">Add Department</button>
      </form>
    </div>
  );
}

export default AddDepartment;
