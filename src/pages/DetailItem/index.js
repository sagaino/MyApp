import { useNavigate } from "react-router-dom";
import { RegisterBg } from "../../assets";
import { Link } from "../../components";
import("./detailitem.scss");

const DetailItem = () => {
  const navigate = useNavigate();
  return (
    <div className="detail-item-wrapper">
      <img src={RegisterBg} alt="img" className="img-cover" />
      <p className="item-title">Title Item</p>
      <p className="item-stock">Stock</p>
      <p className="item-stock">Price</p>
      <p className="item-body">desc</p>
      <div className="link">
        <Link title="Kembali" onClick={() => navigate(-1)} />
      </div>
    </div>
  );
};

export default DetailItem;
