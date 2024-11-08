import Hero2 from "../Components/Hero2/hero2";
import styles from "./courses.module.css";
import Link from "next/link";
import Footer from "../Components/Footer/Footer";

const Courses = () => {
  return (
    <>
      <section>
        <Hero2
          heading="World's Best Courses"
          para_text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates tempore.<br />
      amet consequatur voluptatem ullam expedita."
        />
      </section>

      {/* section 2 */}

      <section>
        <div className={styles.text_box}>
          <h1>Courses We Offer</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit,
            dolorem. At fugit provident rerum recusandae perferendis quaerat,
            eligendi esse nostrum repellat.
          </p>
        </div>

        {/* course */}
        <div className={styles.courses}>
          {/* box1 */}
          <div className={`${styles.box} ${styles.box1}`}>
            <div className={styles.box_content}>
              <h2>Intermediate</h2>
              <p className={styles.ptag}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit,
                dolorem.
              </p>
              <span>
                <Link href="">View more</Link>
              </span>
            </div>
          </div>

          {/* box2 */}
          <div className={styles.box}>
            <div className={styles.box_content}>
              <h2>Graduate</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit,
                dolorem. At fugit provident rerum recusandae perferendis
                quaerat, eligendi esse nostrum repellat.
              </p>
              <span>
                <Link href="">View more</Link>
              </span>
            </div>
          </div>
          {/* box3 */}
          <div className={`${styles.box} ${styles.box3}`}>
            <div className={styles.box_content}>
              <h2> + Post Graduate</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit,
                dolorem. At fugit provident rerum recusandae perferendis
                quaerat, eligendi esse nostrum repellat.
              </p>
              <span>
                <Link href="">View more</Link>
              </span>
            </div>
          </div>
          {/* box4 */}
          <div className={`${styles.box} ${styles.box4}`}>
            <div className={styles.box_content}>
              <h2>Master's</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit,
                dolorem. At fugit provident rerum recusandae perferendis
                quaerat, eligendi esse nostrum repellat.
              </p>
              <span>
                <Link href="">View more</Link>
              </span>
            </div>
          </div>

          {/* box5 */}
          <div className={`${styles.box} ${styles.box5}`}>
            <div className={styles.box_content}>
              <h2>MPhil</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit,
                dolorem. At fugit provident rerum recusandae perferendis
                quaerat, eligendi esse nostrum repellat.
              </p>
              <span>
                <Link href="">View more</Link>
              </span>
            </div>
          </div>

          {/* box6 */}
          <div className={styles.box}>
            <div className={styles.box_content}>
              <h2>PHD</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit,
                dolorem. At fugit provident rerum recusandae perferendis
                quaerat, eligendi esse nostrum repellat.
              </p>
              <span>
                <Link href="">View more</Link>
              </span>
            </div>
          </div>
        </div>

        <Footer/>
      </section>
    </>
  );
};

export default Courses;