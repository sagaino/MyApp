import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "../../components";
import { setDetailProduct } from "../../services/product";
import("./detailitem.scss");

const DetailItem = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const id = params.id;
      const result = await setDetailProduct(id);
      const res = result.data;
      setData(res);
    }
    fetchData();
    // axios
    //   .get(`https://server-ino.herokuapp.com/api/v1/product/${id}`)
    //   .then((res) => {
    //     console.log("success: ", res);
    //   })
    //   .catch((err) => {
    //     console.log("error : ", err);
    //   });
  }, [params]);
  const API_IMG = "https://server-ino.herokuapp.com";
  return (
    <div className="detail-item-wrapper">
      <img src={`${API_IMG}${data.image}`} alt="img" className="img-cover" />
      <p className="item-title">{data.name}</p>
      <p className="item-stock">Stock: {data.stock}</p>
      <p className="item-stock">Harga: {data.price}</p>
      <p className="item-body1">Deskripsi: </p>
      <p className="item-body">{data.description}</p>
      <div className="link">
        <Link title="Kembali" onClick={() => navigate(-1)} />
      </div>
    </div>
  );
};

export default DetailItem;
