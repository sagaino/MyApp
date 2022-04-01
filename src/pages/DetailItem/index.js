import { Button, Gap, Input, Link, Upload } from "../../components";
import TextArea from "../../components/atoms/TextArea";
import { useNavigate } from "react-router-dom";

const DetailItem = () => {
  const navigate = useNavigate();
  return (
    <div className="item-post">
      <div className="link">
        <Link title="Kembali" onClick={() => navigate(-1)} />
      </div>
      <p className="title">Edit item</p>
      <Input label="Title" />
      <Input label="Price" />
      <Input label="Stock" />
      <Upload />
      <TextArea />
      <div className="button-action">
        <Button title="save" />
      </div>
      <Gap height={20} />
    </div>
  );
};

export default DetailItem;
