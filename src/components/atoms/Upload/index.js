import React from "react";
import "./upload.scss";

const Upload = ({ img, ...rest }) => {
  return (
    <div className="upload">
      <p className="label">Upload Image</p>
      <input type="file" {...rest} />
      {img && <img className="preview" src={img} alt="img" />}
    </div>
  );
};

export default Upload;
