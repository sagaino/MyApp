import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  CreateItem,
  DetailItem,
  Home,
  Login,
  MainApp,
  Register,
} from "../../pages";
import EditItem from "../../pages/EditItem";

const Rout = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<MainApp />}>
          <Route path="detail-item/:id" element={<DetailItem />} />
          <Route path="create-item" element={<CreateItem />} />
          <Route path="edit-item/:id" element={<EditItem />} />
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Rout;
