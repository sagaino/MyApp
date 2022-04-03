import { useNavigate } from "react-router-dom";
import { Button } from "../../atoms";
import "./dataitem.scss";

function DataItem(props) {
  const navigate = useNavigate();
  const { image, title, price, stock, desc } = props;
  return (
    <div className="data-item">
      <img className="image-thumb" src={image} alt="img" />
      <div className="content-detail">
        <p className="title">{title}</p>
        <p className="price">{price}</p>
        <p className="price">{stock}</p>
        <p className="body">{desc}</p>
        <Button title="Detail" onClick={() => navigate("/detail-item")} />
      </div>
    </div>
  );
}

export default DataItem;
