import { Button, Gap, Input, Link, Upload } from "../../components";
import TextArea from "../../components/atoms/TextArea";
import { useNavigate, useParams } from "react-router-dom";
import "../CreateItem/createItem.scss";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { setDetailProduct, setEditProduct } from "../../services/product";

const EditItem = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const API_IMG = "https://server-ino.herokuapp.com";
      const id = params.id;
      if (id) {
        const result = await setDetailProduct(id);
        const res = result.data;
        setName(res.name);
        setPrice(res.price);
        setStock(res.stock);
        setDescription(res.description);
        setImagePreview(`${API_IMG}${res.image}`);
      }
    }
    fetchData();
  }, [params]);

  const onSubmit = async () => {
    const id = params.id;

    const data = new FormData();
    data.append("name", name);
    data.append("price", price);
    data.append("stock", stock);
    data.append("description", description);
    data.append("image", image);
    const result = await setEditProduct(data, id);
    if (result.error) {
      toast.configure();
      toast.error(result.message);
      navigate("/");
    } else {
      toast.configure();
      toast.success(result.message);
      navigate("/");
    }
  };

  const onImageUpload = (e) => {
    const reciveFile = e.target.files[0];
    setImage(reciveFile);
    setImagePreview(URL.createObjectURL(reciveFile));
  };

  return (
    <div className="item-post">
      <div className="link">
        <Link title="Kembali" onClick={() => navigate(-1)} />
      </div>
      <p className="title">Edit item</p>
      <Input
        label="Title"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        label="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <Input
        label="Stock"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
      />
      <Upload onChange={(e) => onImageUpload(e)} img={imagePreview} />
      <TextArea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <div className="button-action">
        <Button title="update" onClick={onSubmit} />
      </div>
      <Gap height={20} />
    </div>
  );
};

export default EditItem;
