import React from "react";
import { RegisterBg } from "../../assets";
import { useNavigate } from "react-router-dom";
import { Button, Gap, Input, Link } from "../../components";
import "./register.scss";

const Register = () => {
  const navigate = useNavigate();
  return (
    <div className="main-page">
      <div className="left">
        <img src={RegisterBg} alt="alt" className="bg-image" />
      </div>
      <div className="right">
        <p className="title">Register</p>
        <Input label="Full Name" placeholder="Full Name" />
        <Gap height={16} />
        <Input label="Email" placeholder="Email" />
        <Gap height={16} />
        <Input label="Password" placeholder="Password" type="password" />
        <Gap height={20} />
        <Button title="Register" />
        <Gap height={20} />
        <Link title="Kembali ke login" onClick={() => navigate("/login")} />
      </div>
    </div>
  );
};

export default Register;
