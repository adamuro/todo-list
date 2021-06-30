const API_URL = 'http://localhost:2137';

//Post login request to db, return token if succesful, error if not
export async function postLogin(data) {
  const jwtToken = localStorage.getItem('jwtToken');
  const response = await fetch(`${API_URL}/users/login`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const json = await response.json();
  return json;
}
