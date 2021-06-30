const API_URL = 'http://localhost:2137';

//Return all tasks from db
export async function fetchTasks(filter) {
  const jwtToken = localStorage.getItem('jwtToken');
  const response = await fetch(`${API_URL}/tasks/${filter.toLowerCase()}`, {
    headers: {
      'Authorization': jwtToken,
    }
  });
  const json = await response.json();
  return json;
}

//Add new task to db
export async function postTask(data) {
  const jwtToken = localStorage.getItem('jwtToken');
  const response = await fetch(`${API_URL}/tasks`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'Authorization': jwtToken,
    },
    body: JSON.stringify(data),
  });
  const json = await response.json();
  return json;
}

//Change a task in db
export async function putTask(id, data) {
  const response = await fetch(`${API_URL}/tasks/${id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const json = await response.json();
  return json;
}

//Delete a task in db
export async function deleteTask(id) {
  const response = await fetch(`${API_URL}/tasks/${id}`, {
    method: 'DELETE',
  });
  const json = await response.json();
  return json;
}
