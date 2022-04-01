import React from "react";
import { LoginBg } from "../../../assets";
import "./upload.scss";

const Upload = () => {
  return (
    <div className="upload">
      <p className="label">Upload Image</p>
      <input type="file" />
      <img className="preview" src={LoginBg} alt="img" />
    </div>
  );
};

export default Upload;
