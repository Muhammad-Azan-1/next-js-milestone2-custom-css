import styles from "./footer.module.css";

import {faFacebook,faInstagram,faLinkedin, faTwitter,} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons/faHeart";

import Link from "next/link";
const Footer = () => {
  return (
    <>
      <div className={`${styles.main}`}>
        <div className={styles.footer}>
          <Link href="">
            <FontAwesomeIcon icon={faFacebook} />
          </Link>
          <Link href="https://www.instagram.com/azan.jundullah/" target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
          <Link href="https://www.linkedin.com/in/muhammad-azan-/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
          <Link href="">
            <FontAwesomeIcon icon={faTwitter} />
          </Link>
        </div>

        <div className={styles.copyright}>
          Made with{" "}
          <FontAwesomeIcon icon={faHeart} style={{ color: "#ff004f" }} /> by
          Muhammad Azan
        </div>
      </div>
    </>
  );
};

export default Footer;
