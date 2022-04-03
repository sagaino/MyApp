import Axios from "axios";

export const setDataItem = () => {
  return (dispatch) => {
    const API = "https://server-ino.herokuapp.com/api/v1/product";
    Axios.get(API)
      .then((result) => {
        const resAPI = result.data;
        const responAPI = resAPI.data;
        dispatch({
          type: "UPDATE_DATA_ITEM",
          payload: responAPI,
        });
      })
      .catch((err) => {
        console.log("error : ", err);
      });
  };
};
