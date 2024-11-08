"use client";
// import Header from '../Components/Header/Header';
import Link from "next/link";
import Image from "next/image";
import Hero2 from "../Components/Hero2/hero2";
import styles from "./about.module.css";
import Footer from "../Components/Footer/Footer";

const About = () => {
  return (
    <>
      <section>
        <Hero2
          heading="World's Best University"
          para_text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates tempore.<br />
    amet consequatur voluptatem ullam expedita."
        />
      </section>

      {/* secion2 */}

      <section>
        <div className={styles.main2}>
          <div className={styles.leftside}>
            <h1 className={styles.leftHeading}>
              We are the world's largest university
            </h1>
            <p className={styles.leftp}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
              iusto fuga, harum vero nostrum voluptatem voluptatibus, aperiam,
              laudantium magni veritatis quam omnis molestias minus quas. Iste
              ducimus distinctio natus beatae omnis fugiat perferendis, tempore
              tempora molestiae iusto ratione consequatur nostrum assumenda
              maiores numquam voluptates eius repellendus voluptate sequi.
            </p>
            <Link className={styles.linktag} href="">
              Explorer More
            </Link>
          </div>

          <div className={styles.rightside}>
            <Image
              className={styles.image}
              src="/images/about.jpg"
              alt="About us Image"
              width={500}
              height={300}
            ></Image>
          </div>
        </div>
      </section>

      {/* section 3 */}
      <section>
        <div className={styles.text_box}>
          <h1>Our Global Campus</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
            dolorem.
          </p>
        </div>

        <div className={styles.Campus}>
          <div className={styles.imgBox}>
            <div className={styles.img}>
              <div className={styles.layer}>
                <h3>LONDON</h3>
              </div>
              <Image
                className={`${styles.img} ${styles.imgs}`}
                src="/images/london.png"
                alt="London Campus"
                width={350}
                height={600}
              ></Image>
            </div>

            <div className={styles.img}>
              <div className={styles.layer}>
                <h3>WASHINGTON</h3>
              </div>
              <Image
                className={`${styles.img} ${styles.imgs}`}
                src="/images/washington.png"
                alt="London Campus"
                width={350}
                height={600}
              ></Image>
            </div>

            <div className={styles.img}>
              <div className={styles.layer}>
                <h3>NEW YORK</h3>
              </div>
              <Image
                className={`${styles.img} ${styles.imgs}`}
                src="/images/newyork.png"
                alt="London Campus"
                width={350}
                height={600}
              ></Image>
            </div>
          </div>
        </div>
        <Footer/>
      </section>
    </>
  );
};

export default About;

{
  /* <div className={styles.background}>
<Header/>
<div className={styles.main}>
<h1>World's Best University</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates tempore. <br /> 
         amet consequatur voluptatem ullam expedita.
</p>
</div>
</div> */
}
