import { LoginBg } from "../../assets";
import { useNavigate } from "react-router-dom";
import { Button, Gap, Input, Link } from "../../components";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { useState } from "react";
import Cookies from "js-cookie";
import { setSignIn } from "../../services/auth";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async () => {
    const data = {
      email,
      password,
    };
    const result = await setSignIn(data);
    if (result.error) {
      toast.configure();
      toast.error(result.message);
      navigate("/login");
    } else {
      toast.configure();
      toast.success("Register Berhasil");
      const { token } = result.data;
      const tokenBase64 = btoa(token);
      Cookies.set("token", tokenBase64, { expires: 1 });
      console.log(tokenBase64);
      navigate("/");
    }
  };
  return (
    <div className="main-page">
      <div className="left">
        <img src={LoginBg} alt="alt" className="bg-image" />
      </div>
      <div className="right">
        <p className="title">Login</p>
        <Input
          label="Email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Gap height={16} />
        <Input
          label="Password"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Gap height={20} />
        <Button type="button" title="Login" onClick={onSubmit} />
        <Gap height={20} />
        <Link title="Register" onClick={() => navigate("/register")} />
      </div>
    </div>
  );
};

export default Login;
