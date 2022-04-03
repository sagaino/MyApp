import { Rout, store } from "../config";
import "./App.css";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Provider store={store}>
      <Rout />
      <ToastContainer />
    </Provider>
  );
}

export default App;
