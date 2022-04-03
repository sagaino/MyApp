import { Rout, store } from "../config";
import "./App.css";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Rout />
    </Provider>
  );
}

export default App;
