import React, { useState } from "react";
import { RegisterBg } from "../../assets";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { Button, Gap, Input, Link } from "../../components";
import "./register.scss";
import { setSignUp } from "../../services/auth";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmit = async () => {
    const data = {
      email,
      password,
      name,
    };

    const result = await setSignUp(data);
    if (result.error) {
      toast.configure();
      toast.error(result.message);
      navigate("/register");
    } else {
      toast.configure();
      toast.success("Register Berhasil");

      navigate("/login");
    }
  };

  return (
    <div className="main-page">
      <div className="left">
        <img src={RegisterBg} alt="alt" className="bg-image" />
      </div>
      <div className="right">
        <p className="title">Register</p>
        <Input
          label="Full Name"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Gap height={16} />
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
        <Button title="Register" onClick={onSubmit} />
        <Gap height={20} />
        <Link title="Kembali ke login" onClick={() => navigate("/login")} />
      </div>
    </div>
  );
};

export default Register;
