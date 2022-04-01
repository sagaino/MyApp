import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  CreateItem,
  DetailItem,
  Home,
  Login,
  MainApp,
  Register,
} from "../../pages";

const Rout = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<MainApp />}>
          <Route path="detail-item" element={<DetailItem />} />
          <Route path="create-item" element={<CreateItem />} />
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Rout;
