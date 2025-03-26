// src/api/api.js

const API_BASE_URL = "https://localhost:7220/api"; 

// Department API functions
export async function getDepartments() {
  const response = await fetch(`${API_BASE_URL}/Departments`);
  if (!response.ok) {
    throw new Error("Failed to fetch departments.");
  }
  return await response.json();
}

export async function addDepartment(department) {
  const response = await fetch(`${API_BASE_URL}/Departments`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(department),
  });
  if (!response.ok) {
    throw new Error("Failed to add department.");
  }
  return await response.json();
}

export async function updateDepartment(department) {
  const response = await fetch(
    `${API_BASE_URL}/Departments/${department.id}`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(department),
    }
  );
  if (!response.ok) {
    throw new Error("Failed to update department.");
  }
  return await response.json();
}

export async function deleteDepartment(id) {
  const response = await fetch(`${API_BASE_URL}/Departments/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete department.");
  }
  return true;
}

// Student API functions
export async function getStudents() {
  const response = await fetch(`${API_BASE_URL}/Students`);
  if (!response.ok) {
    throw new Error("Failed to fetch students.");
  }
  return await response.json();
}

export async function addStudent(student) {
  const response = await fetch(`${API_BASE_URL}/Students`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(student),
  });
  if (!response.ok) {
    throw new Error("Failed to add student.");
  }
  return await response.json();
}

export async function updateStudent(student) {
  const response = await fetch(
    `${API_BASE_URL}/Students/${student.id}`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
    }
  );
  if (!response.ok) {
    throw new Error("Failed to update student.");
  }
  return await response.json();
}

export async function deleteStudent(id) {
  const response = await fetch(`${API_BASE_URL}/Students/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete student.");
  }
  return true;
}
