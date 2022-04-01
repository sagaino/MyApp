import "./header.scss";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <p className="logo-app">My App</p>
      <p className="menu-item" onClick={() => navigate("/login")}>
        Logout
      </p>
    </div>
  );
};

export default Header;
