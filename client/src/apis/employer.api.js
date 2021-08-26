export const loginApi = async (username, password) => {
  const response = await fetch("http://localhost:8080/employer/login/", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: username, password: password }),
  });
  let res = await response.json();
  if (res) {
    return res;
  }
};
