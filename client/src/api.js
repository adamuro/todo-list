const API_URL = 'http://localhost:2137';

export async function getTasks(filter) {
  const response = await fetch(`${API_URL}/tasks/${filter.toLowerCase()}`);
  return response.json();
}

export async function addTask(data) {
  const response = await fetch(`${API_URL}/tasks`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

export async function updateTask(id, data) {
  const response = await fetch(`${API_URL}/tasks/${id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

export async function deleteTask(id) {
  const response = await fetch(`${API_URL}/tasks/${id}`, {
    method: 'DELETE',
  });
  return response.json();
}