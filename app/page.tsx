import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import styles from "./page.module.css";
import Footer from "./Components/Footer/Footer";
import Hero3 from "./Components/Hero3/hero3";
export default function Home() {
  return (
    <>
      <div className={`${styles.background}`}>
        <Header />
        <Hero />
      </div>

      {/* section2 */}
      <section>
        <Hero3 />
      </section>

      <Footer />
    </>
  );
}
