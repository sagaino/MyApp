import { useNavigate } from "react-router-dom";
import { Button } from "../../atoms";
import Cookies from "js-cookie";
import "./dataitem.scss";
import { useEffect, useState } from "react";

function DataItem(props) {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const { image, title, price, stock, desc, id, onDelete } = props;

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      setIsLogin(true);
    }
  }, []);
  if (isLogin) {
    return (
      <div className="data-item">
        <img className="image-thumb" src={image} alt="img" />
        <div className="content-detail">
          <div className="title-wrapper">
            <p className="title">{title}</p>
            <div className="edit-wrapper">
              <p className="edit" onClick={() => navigate(`edit-item/${id}`)}>
                Edit
              </p>{" "}
              |{" "}
              <p className="delete" onClick={() => onDelete(id)}>
                Delete
              </p>
            </div>
          </div>
          <p className="price">{price}</p>
          <p className="price">{stock}</p>
          <p className="body">{desc}</p>
          <Button
            title="Detail"
            onClick={() => navigate(`detail-item/${id}`)}
          />
        </div>
      </div>
    );
  }
  return (
    <div className="data-item">
      <img className="image-thumb" src={image} alt="img" />
      <div className="content-detail">
        <div className="title-wrapper">
          <p className="title">{title}</p>
        </div>
        <p className="price">{price}</p>
        <p className="price">{stock}</p>
        <p className="body">{desc}</p>
        <Button title="Detail" onClick={() => navigate(`detail-item/${id}`)} />
      </div>
    </div>
  );
}

export default DataItem;
