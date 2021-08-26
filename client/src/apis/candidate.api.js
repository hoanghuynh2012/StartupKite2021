export const loginApi = async (us, pw) => {
  const response = await fetch("http://localhost:8080/candidate/login/", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: us, password: pw }),
  });
  let res = await response.json();
  if (res) {
    return res;
  } else {
    return { success: false, message: "Not Data" };
  }
};
