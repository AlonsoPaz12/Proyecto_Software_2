'use client';

import React from "react";
import styles from './page.module.css';
import ResponsiveAppBar from '@/components/ResponsiveAppBar/ResponsiveAppBar.jsx';
import Banner from '@/components/Banner/Banner.jsx';
import Footer from '@/components/Footer/Footer.jsx';
import Especialidad from "@/components/Especialidad/Especialidad.jsx";
import { BsFillHeartPulseFill } from "react-icons/bs";
import { GiHandBandage } from "react-icons/gi";
import { LuBaby } from "react-icons/lu";

const Especialidades = () => {
  const especialidadesMedicas = [
    { nombre: "Cardiología", icono: <BsFillHeartPulseFill/>, color: "red" },
    { nombre: "Dermatología", icono: <GiHandBandage />, color: "blue" },
    { nombre: "Pediatría", icono: <LuBaby />, color: "green"},
    { nombre: "Cardiología", icono: <BsFillHeartPulseFill/>, color: "red" },
    { nombre: "Dermatología", icono: <GiHandBandage />, color: "blue" },
    { nombre: "Pediatría", icono: <LuBaby />, color: "green"},
  ];

  return (
    <div className={styles.container}>
      <ResponsiveAppBar/>
      
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
            color={especialidad.color}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Especialidades;
