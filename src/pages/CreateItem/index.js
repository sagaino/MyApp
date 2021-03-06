import { Button, Gap, Input, Link, Upload } from "../../components";
import TextArea from "../../components/atoms/TextArea";
import { useNavigate } from "react-router-dom";
import "./createItem.scss";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { setProduct } from "../../services/product";

const CreateItem = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);

  const onSubmit = async () => {
    const data = new FormData();
    data.append("name", name);
    data.append("price", price);
    data.append("stock", stock);
    data.append("description", description);
    data.append("image", image);
    console.log(data.name);
    const result = await setProduct(data);
    if (result.error) {
      toast.configure();
      toast.error(result.message);
      navigate("/create-item");
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
      <p className="title">Add new item</p>
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
        <Button title="save" onClick={onSubmit} />
      </div>
      <Gap height={20} />
    </div>
  );
};

export default CreateItem;
