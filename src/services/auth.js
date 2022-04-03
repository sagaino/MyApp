import axios from "axios";

export async function setSignUp(data) {
  const url = "https://server-ino.herokuapp.com/api/v1/auth/signup";

  const response = await axios.post(url, data).catch((err) => err.response);

  if (response.status > 300) {
    const res = {
      error: true,
      message: response.data.message,
      data: null,
    };
    return res;
  }
  const res = {
    error: false,
    message: "success",
    data: response.data.data,
  };
  return res;
}
export async function setSignIn(data) {
  const url = "https://server-ino.herokuapp.com/api/v1/auth/signin";

  const response = await axios.post(url, data).catch((err) => err.response);

  if (response.status > 300) {
    const res = {
      error: true,
      message: response.data.message,
      data: null,
    };
    return res;
  }
  const res = {
    error: false,
    message: "success",
    data: response.data.data,
  };
  return res;
}
