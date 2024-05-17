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

      <div className={styles.banner}>

        <h2 className={styles.pregunta}>¿CÓMO TE PODEMOS<br/> AYUDAR HOY?</h2>

        <div className={styles.contenidoLista}>
          <div className={styles.column}>
            <div className={styles.contenidoOpcion}>
              <div className={styles.iconList}>
                <FaCalendarAlt size="2em"/>
              </div>  
              <div className={styles.datos}>
                Quiero agendar una cita
                <div>
                  <CustomLink href={"/agendarCita"} text={"Ver más"}/>
                  <IoIosArrowDropright className={styles.verMas} size="2em" />
                </div>  
              </div>
            </div>
            <div className={styles.contenidoOpcion}>
              <div className={styles.iconList}>
                <FaCalendarAlt size="2em"/>
              </div>  
              <div className={styles.datos}>
                Quiero ver mis laboratorios
                <div>
                  <CustomLink href={"/agendarCita"} text={"Ver más"}/>
                  <IoIosArrowDropright className={styles.verMas} size="2em" />
                </div>  
              </div>
            </div>
          </div>

          <div className={styles.column}>
            <div className={styles.contenidoOpcion}>
              <div className={styles.iconList}>
                <FaCalendarAlt size="2em"/>
              </div>  
              <div className={styles.datos}>
                Quiero ver una especialidad
                <div>
                  <CustomLink href={"/agendarCita"} text={"Ver más"}/>
                  <IoIosArrowDropright className={styles.verMas} size="2em" />
                </div>  
              </div>
            </div>
            <div className={styles.contenidoOpcion}>
              <div className={styles.iconList}>
                <FaCalendarAlt size="2em"/>
              </div>  
              <div className={styles.datos}>
                Quiero ver mis imágenes médicas
                <div>
                  <CustomLink href={"/agendarCita"} text={"Ver más"}/>
                  <IoIosArrowDropright className={styles.verMas} size="2em" />
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
