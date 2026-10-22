const BASE_URL = 'http://localhost:5000';

// Programmatically log in to get a fresh, 100% accurate token if needed
const getValidToken = async () => {
  let token = localStorage.getItem('token');

  if (!token) {
    try {
      const res = await fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: 'test@visha1.com',
          password: 'mypassword123'
        })
      });
      const data = await res.json();
      if (data.token) {
        token = data.token;
        localStorage.setItem('token', token);
      }
    } catch (err) {
      console.error("Auto-login failed:", err);
    }
  }
  return token;
};

// Generate headers with the JWT token attached
const getAuthHeaders = async () => {
  const token = await getValidToken();
  return {
    'Content-Type': 'application/json',
    'Authorization': token ? `Bearer ${token}` : ''
  };
};

// GET all tasks (Protected)
export const getTasks = async () => {
  const headers = await getAuthHeaders();
  const res = await fetch(`${BASE_URL}/tasks`, { method: 'GET', headers });
  if (res.status === 401) {
    localStorage.removeItem('token'); // Clear token if expired so it re-authenticates
  }
  return res.json();
};

// POST new task (Protected)
export const createTask = async (taskData) => {
  const headers = await getAuthHeaders();
  const res = await fetch(`${BASE_URL}/tasks`, {
    method: 'POST',
    headers,
    body: JSON.stringify(taskData)
  });
  return res.json();
};

// DELETE task (Protected)
export const deleteTask = async (id) => {
  const headers = await getAuthHeaders();
  const res = await fetch(`${BASE_URL}/tasks/${id}`, { method: 'DELETE', headers });
  return res.json();
};