import axios from "axios";

export async function setProduct(data) {
  const url = "https://server-ino.herokuapp.com/api/v1/product/create";

  const response = await axios
    .post(url, data, {
      headers: {
        "content-type": "multipart/form-data",
      },
    })
    .catch((err) => err.response);

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

export async function setDetailProduct(id) {
  const url = `https://server-ino.herokuapp.com/api/v1/product/${id}`;

  const response = await axios.get(url).catch((err) => err.response);

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
export async function setEditProduct(data, id) {
  const url = `https://server-ino.herokuapp.com/api/v1/product/edit/${id}`;

  const response = await axios
    .put(url, data, {
      headers: {
        "content-type": "multipart/form-data",
      },
    })
    .catch((err) => err.response);

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
export async function setDeleteProduct(id) {
  const url = `https://server-ino.herokuapp.com/api/v1/product/delete/${id}`;

  const response = await axios.delete(url).catch((err) => err.response);

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
