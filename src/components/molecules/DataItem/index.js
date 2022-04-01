import { RegisterBg } from "../../../assets";
import { useNavigate } from "react-router-dom";
import { Button } from "../../atoms";
import "./dataitem.scss";

function DataItem() {
  const navigate = useNavigate();
  return (
    <div className="data-item">
      <img className="image-thumb" src={RegisterBg} alt="img" />
      <div className="content-detail">
        <p className="title">title</p>
        <p className="price">price and stock</p>
        <p className="body">
          deskripsi aaasdasdasas dasdasasasasdasdas asdasdqwdqdwqdas asdasd
          asdasdas asdsadasdaswqrqwtasdfsdfsdffewf
        </p>
        <Button title="Detail" onClick={() => navigate("/detail-item")} />
      </div>
    </div>
  );
}

export default DataItem;
