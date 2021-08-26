export const loginApi = async (us, pw) => {
  const response = await fetch("http://localhost:8080/employer/login/", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: us, password: pw }),
  });
  let res = await response.json();
  if (res) {
    return res;
  } else {
    return { success: false, message: "No Data" };
  }
};
