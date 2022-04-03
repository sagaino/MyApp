import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, DataItem, Gap } from "../../components";
import "./home.scss";

const Home = () => {
  const navigate = useNavigate();
  const [dataItem, setDataItem] = useState([]);
  useEffect(() => {
    Axios.get("https://server-ino.herokuapp.com/api/v1/product")
      .then((result) => {
        console.log("data : ", result.data);
        const responAPI = result.data;
        setDataItem(responAPI.data);
      })
      .catch((err) => {
        console.log("error : ", err);
      });
  }, []);
  return (
    <div className="home-page-wrapper">
      <div className="create-wrapper">
        <Button title="Add Item" onClick={() => navigate("/create-item")} />
      </div>
      <Gap height={20} />
      <div className="content-wrapper">
        {dataItem.map((item) => {
          return (
            <DataItem
              key={item.id}
              image={`https://server-ino.herokuapp.com${item.image}`}
              title={item.name}
              price={item.price}
              stock={item.stock}
            />
          );
        })}
      </div>
      {/* <Link to="/detail-item">detail</Link> */}
      <div className="pagination">
        <Button title="Previous" />
        <Gap width={25} />
        <Button title="Next" />
      </div>
      <Gap height={25} />
    </div>
  );
};

export default Home;
