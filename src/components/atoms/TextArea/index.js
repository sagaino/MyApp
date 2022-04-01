import React from "react";
import "./textArea.scss";

function TextArea({ ...rest }) {
  return (
    <div>
      <p className="desc">Deskripsi</p>
      <textarea className="text-area" {...rest}></textarea>
    </div>
  );
}

export default TextArea;
