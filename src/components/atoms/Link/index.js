import "./link.scss";

const Link = ({ title, ...rest }) => {
  return (
    <a className="link" {...rest}>
      {title}
    </a>
  );
};

export default Link;
