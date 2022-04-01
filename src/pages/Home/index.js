import React from "react";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button, DataItem, Gap } from "../../components";
import "./home.scss";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-page-wrapper">
      <div className="create-wrapper">
        <Button title="Add Item" onClick={() => navigate("/create-item")} />
      </div>
      <Gap height={20} />
      <div className="content-wrapper">
        <DataItem />
        <DataItem />
        <DataItem />
        <DataItem />
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
