import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import styles from "./page.module.css";
import Footer from "@/components/Footer/Footer";
import Hero3 from "@/components/Hero3/hero3";

// meta DAtA
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Home page",
  description: "Generated by create next app",
};

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
