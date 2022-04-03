import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button, DataItem, Gap } from "../../components";
import "./home.scss";
import { setDataItem } from "../../config/redux/action";

const Home = () => {
  const navigate = useNavigate();
  const { dataItem } = useSelector((state) => state.homeReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDataItem());
  }, [dispatch]);

  const API_IMG = "https://server-ino.herokuapp.com";
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
              image={`${API_IMG}${item.image}`}
              title={item.name}
              price={item.price}
              stock={item.stock}
              desc={item.description}
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
