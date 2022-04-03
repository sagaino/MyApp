import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { Button, DataItem, Gap } from "../../components";
import "./home.scss";
import { setDataItem } from "../../config/redux/action";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { setDeleteProduct } from "../../services/product";

const Home = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const { dataItem } = useSelector((state) => state.homeReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDataItem());
  }, [dispatch]);
  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      setIsLogin(true);
    }
  }, []);

  const confirmDelete = (id) => {
    confirmAlert({
      title: "Confirm to delete",
      message: "Apa anda yakin ingin menghapus item ini?",
      buttons: [
        {
          label: "Yes",
          onClick: async () => {
            const result = await setDeleteProduct(id);
            console.log(result);
            navigate(0);
          },
        },
        {
          label: "No",
          onClick: () => navigate("/"),
        },
      ],
    });
  };

  const API_IMG = "https://server-ino.herokuapp.com";

  if (isLogin) {
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
                id={item.id}
                onDelete={confirmDelete}
              />
            );
          })}
        </div>
      </div>
    );
  }
  return (
    <div className="home-page-wrapper">
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
              id={item.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
