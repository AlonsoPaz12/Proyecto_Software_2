'use client';

import { React, useState } from "react";
import ResponsiveAppBar from '@/components/ResponsiveAppBar/ResponsiveAppBar.jsx';
import DoctorCard from '../../components/DoctorCard/DoctorCard.jsx';
import styles from './page.module.css';
import Banner from '@/components/Banner/Banner.jsx';
import Footer from '@/components/Footer/Footer.jsx';

const VerMedicos = () => {
  
  const doctors = [
    { id: 1, nombre: 'Dr. Juan Pérez', especialidad: 'Pediatría', imagen:'https://i.ibb.co/b6SDFTN/01.jpg'},
    { id: 2, nombre: 'Dra. María González', especialidad: 'Dermatología', imagen:'https://i.ibb.co/b6SDFTN/01.jpg' },
    { id: 3, nombre: 'Dra. Gianella Carrion', especialidad: 'Dermatología', imagen:'https://i.ibb.co/b6SDFTN/01.jpg' },

  ];

  const [filteredDoctors, setFilteredDoctors] = useState(doctors);

  return (
    <div className={styles.container}>
      
      <ResponsiveAppBar/>
      
      <Banner pageTitle="NUESTROS MÉDICOS" parrafo="Contamos con los mejores profesionales para
      cuidar de ti y tu familia. ¡Agenda una cita hoy
      mismo!" imagen="/img/doctores2.png"/>


      <div className={styles.vistaMedicos}>  
        {filteredDoctors.map(doctor => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>

      <Footer/>

    </div>
  );
};

export default VerMedicos;
