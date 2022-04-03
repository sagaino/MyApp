const initialState = {
  name: "oni",
};

const globalReducer = (state = initialState, action) => {
  if (action.type === "UPDATE_NAME") {
    return {
      ...state,
      name: "ino",
    };
  }
  return state;
};

export default globalReducer;
