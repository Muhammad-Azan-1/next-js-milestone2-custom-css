import Hero2 from "../Components/Hero2/hero2";
import styles from "./contact.module.css";
import Link from "next/link";
import Footer from "../Components/Footer/Footer";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import {
  faEnvelope,
  faHouse,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <>
      <Hero2
        heading="Contact us"
        para_text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates tempore.<br />
    amet consequatur voluptatem ullam expedita."
      />

      <div className={styles.main}>
        <iframe
          className={styles.map}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2569.374927093972!2d-1.2593888095284789!3d51.75704611991604!
    2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876c6a9ef8c485b%3A0xd2ff1883a001afed!2sUniversity%20of%20Oxford!5e1!3m2!
    1sen!2s!4v1731063691147!5m2!1sen!2s"
          key="google-map"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className={styles.main2}>
        <div className={styles.address}>
          <ul className={styles.ul1}>
            <Link className={styles.linktag} href="/">
              {" "}
              <FontAwesomeIcon
                className={styles.homeIcon}
                icon={faHouse}
              />{" "}
            </Link>
            <li>
              <h4>Xyz Road, ABC building</h4>
            </li>
            <li>
              <p>London, United Kingdom</p>
            </li>
          </ul>

          <ul className={styles.ul2}>
            <Link className={styles.linktag} href="/">
              {" "}
              <FontAwesomeIcon className={styles.phone} icon={faPhone} />{" "}
            </Link>
            <li>
              <h4>
                <Link href="tel:+923101285239" className={styles.phoneLink}>
                  +92 310-128523-9
                </Link>
              </h4>
            </li>
            <li>
              <p>London, United Kingdom</p>
            </li>
          </ul>

          <ul className={styles.ul3}>
            <Link className={styles.linktag} href="/">
              {" "}
              <FontAwesomeIcon className={styles.mail} icon={faEnvelope} />{" "}
            </Link>
            <li>
              <h4>
                <Link
                  href="mailto:azan96593@gmail.com"
                  className={styles.emailLink}
                >
                  muhammad.azan18@icloud.com
                </Link>
              </h4>
            </li>
            <li>
              <p>London, United Kingdom</p>
            </li>
          </ul>
        </div>
        <div className={styles.form}>
          <input
            type="text"
            placeholder="Enter your name"
            className={styles.inputfield}
          />

          <input
            type="email"
            placeholder="Enter your email"
            className={styles.inputfield}
          />

          <input
            type="text"
            placeholder="Enter your subject"
            className={styles.inputfield}
          />

          <textarea
            placeholder="Comment"
            cols={80}
            rows={7}
            style={{ padding: "10px", border: "1px solid #777" }}
          />

          <button type="submit" className={styles.submitBtn}>
            Submit
          </button>
        </div>
      </div>

      <Footer/>
    </>
  );
};

export default Contact;
