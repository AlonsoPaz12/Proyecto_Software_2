'use client';

import React from "react";
import TopBar from '@/components/TopBar/TopBar.jsx';
import styles from './page.module.css';
import Banner from '@/components/Banner/Banner.jsx';
import Footer from '@/components/Footer/Footer.jsx';
import Especialidad from "@/components/Especialidad/Especialidad.jsx";

const Especialidades = () => {
  const especialidadesMedicas = [
    { nombre: "Cardiología", icono: "/img/icono-cardiologia.png" },
    { nombre: "Dermatología", icono: "/img/icono-dermatologia.png" },
    { nombre: "Pediatría", icono: "/img/icono-pediatria.png" },
    { nombre: "Cardiología", icono: "/img/icono-cardiologia.png" },
    { nombre: "Dermatología", icono: "/img/icono-dermatologia.png" },
    { nombre: "Pediatría", icono: "/img/icono-pediatria.png" },
    // Agrega más especialidades según sea necesario
  ];

  return (
    <div className={styles.container}>
      <TopBar />
      <Banner
        pageTitle="NUESTRAS ESPECIALIDADES"
        parrafo="Descubre nuestra gama de especialidades médicas diseñadas para cuidar de ti de manera integral."
        imagen="/img/doctores1.png"
      />

      <div className={styles.especialidadesContainer}>
        {especialidadesMedicas.map((especialidad, index) => (
          <Especialidad
            className={styles.especialidadesItem}
            key={index}
            nombre={especialidad.nombre}
            icono={especialidad.icono}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Especialidades;
