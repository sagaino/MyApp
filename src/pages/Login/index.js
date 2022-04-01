import { LoginBg } from "../../assets";
import { useNavigate } from "react-router-dom";
import { Button, Gap, Input, Link } from "../../components";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="main-page">
      <div className="left">
        <img src={LoginBg} alt="alt" className="bg-image" />
      </div>
      <div className="right">
        <p className="title">Login</p>
        <Input label="Email" placeholder="Email" required />
        <Gap height={16} />
        <Input
          label="Password"
          placeholder="Password"
          type="password"
          required
        />
        <Gap height={20} />
        <Button title="Login" onClick={() => navigate("/")} />
        <Gap height={20} />
        <Link title="Register" onClick={() => navigate("/register")} />
      </div>
    </div>
  );
};

export default Login;
