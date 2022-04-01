import "./footer.scss";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

const Icon = ({ href, title, ...rest }) => {
  return (
    <div className="icon-wrapper">
      <a href={href} className="icon" {...rest}>
        {title}
      </a>
    </div>
  );
};
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="social-wrapper">
          <Icon
            href="https://www.instagram.com/sagaino00/"
            target="_blank"
            title={<AiFillInstagram size="2rem" />}
          />
          <Icon
            href="https://github.com/sagaino"
            target="_blank"
            title={<AiFillGithub size="2rem" />}
          />
          <Icon
            href="https://www.linkedin.com/in/saga-ino-935616118"
            target="_blank"
            title={<AiFillLinkedin size="2rem" />}
          />
        </div>
      </div>
      <div className="copyright">
        <p>Copy right 2022</p>
      </div>
    </div>
  );
};

export default Footer;
