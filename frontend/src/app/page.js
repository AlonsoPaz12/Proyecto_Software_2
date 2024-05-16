{/*Componentes*/}
import TopBar from "@/components/TopBar/TopBar.jsx";
import Footer from "@/components/Footer/Footer.jsx";
import Carrusel from "@/components/Carrusel/Carrusel";
import CustomLink from "@/components/CustomLink/CustomLink";

{/*Iconos*/}
import { FaCalendarAlt } from "react-icons/fa";
import { IoIosArrowDropright } from "react-icons/io";

{/*Estilos*/}
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>

      <TopBar/>

      <Carrusel imagen1={"/img/doctores2.png"} imagen2={"/img/doctores2.png"} imagen3={"/img/doctores2.png"}/>

        <div className={styles.contenido}>
          <h2 className={styles.pregunta}>¿CÓMO TE PODEMOS<br/> AYUDAR HOY?</h2>

          <div className={styles.contenidoLista}>
            <div className={styles.fila}>
              <div className={styles.contenidoOpcion}>
                <div className={styles.icon}>
                  <FaCalendarAlt size="2em"/>
                </div>  
                <div className={styles.datos}>
                  Quiero agendar una cita
                  <div className={styles.verMas}>
                    <CustomLink href={"/agendarCita"} text={"Ver más"}/>
                    <IoIosArrowDropright />
                  </div>  
                </div>  
              </div>

              <div className={styles.contenidoOpcion}>
                <div className={styles.icon}>
                  <FaCalendarAlt/>
                </div>  
                <div className={styles.datos}>
                  2
                  <div className={styles.verMas}>
                    <CustomLink href={"/agendarCita"} text={"Ver más"}/>
                    <IoIosArrowDropright />
                  </div>  
                </div>  
              </div>
            </div>

            <div className={styles.fila}>
              <div className={styles.contenidoOpcion}>
                <div className={styles.icon}>
                  <FaCalendarAlt size="2em"/>
                </div>  
                <div className={styles.datos}>
                  Quiero agendar una cita
                  <div className={styles.verMas}>
                    <CustomLink href={"/agendarCita"} text={"Ver más"}/>
                    <IoIosArrowDropright />
                  </div>  
                </div>  
              </div>

              <div className={styles.contenidoOpcion}>
                <div className={styles.icon}>
                  <FaCalendarAlt/>
                </div>  
                <div className={styles.datos}>
                  2
                  <div className={styles.verMas}>
                    <CustomLink href={"/agendarCita"} text={"Ver más"}/>
                    <IoIosArrowDropright />
                  </div>  
                </div>  
              </div>
            </div>

          </div>

        </div>

      <Footer/>
    </main>
  );
}
