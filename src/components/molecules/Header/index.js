import "./header.scss";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const Header = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      setIsLogin(true);
    }
  }, []);

  const onLogout = () => {
    Cookies.remove("token");
    navigate(0);
    setIsLogin(false);
  };
  if (isLogin) {
    return (
      <div className="header">
        <p className="logo-app">My App</p>
        <p className="menu-item" onClick={onLogout}>
          Logout
        </p>
      </div>
    );
  }
  return (
    <div className="header">
      <p className="logo-app">My App</p>
      <p className="menu-item" onClick={() => navigate("/login")}>
        Login
      </p>
    </div>
  );
};

export default Header;
