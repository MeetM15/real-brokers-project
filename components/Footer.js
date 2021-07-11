import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import classes from "../styles/footer.module.scss";
const Footer = () => {
  return (
    <footer className={classes.footerContainer}>
      <div className={classes.footerWrapper}>
        <section className={classes.social_media}>
          <div className={classes.social_wrap}>
            <Link href="/" passHref>
              <a className={classes.social_logo}>Real Brokers</a>
            </Link>
            <div className={classes.social_icons}>
              <a
                className={classes.social_icon_link}
                href="#"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                className={classes.social_icon_link}
                href="#"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                className={classes.social_icon_link}
                href="#"
                target="_blank"
                aria-label="Youtube"
              >
                <FaYoutube />
              </a>
              <a
                className={classes.social_icon_link}
                href="#"
                target="_blank"
                aria-label="Twitter"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                className={classes.social_icon_link}
                href="#"
                target="_blank"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
