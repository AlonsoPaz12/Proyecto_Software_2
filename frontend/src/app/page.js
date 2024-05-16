'use client';
import styles from "./page.module.css";
import TopBar from "@/components/TopBar/TopBar.jsx";
import Footer from "@/components/Footer/Footer.jsx";
import Carrusel from "@/components/Carrusel/Carrusel";

export default function Home() {
  return (
    <main className={styles.main}>
      <TopBar/>
      <Carrusel imagen1={"/img/doctores2.png"} imagen2={"/img/doctores2.png"} imagen3={"/img/doctores2.png"}/>
      <Footer/>
    </main>
  );
}
