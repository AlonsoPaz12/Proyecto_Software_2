'use client';
import React, { useState } from 'react';
import TopBar from '@/components/TopBar/TopBar.jsx';
import DoctorCard from '../../components/DoctorCard/DoctorCard.jsx';
import styles from './page.module.css';
import Banner from '@/components/Banner/Banner.jsx';

const VerMedicos = () => {
  
  const doctors = [
    { id: 1, nombre: 'Dr. Juan Pérez', especialidad: 'Pediatría', imagen:'https://i.ibb.co/b6SDFTN/01.jpg'},
    { id: 2, nombre: 'Dra. María González', especialidad: 'Dermatología', imagen:'https://i.ibb.co/b6SDFTN/01.jpg' },
    { id: 3, nombre: 'Dra. Gianella Carrion', especialidad: 'Dermatología', imagen:'https://i.ibb.co/b6SDFTN/01.jpg' },
    // Agrega más doctores según sea necesario
  ];

  const [filteredDoctors, setFilteredDoctors] = useState(doctors);

  return (
    <div className={styles.container}>
      
      <TopBar></TopBar>
      <Banner pageTitle="NUESTROS MÉDICOS" parrafo="Contamos con los mejores profesionales para
            cuidar de ti y tu familia. ¡Agenda una cita hoy
            mismo!"></Banner>

      <div className={styles.vistaMedicos}>  
        {filteredDoctors.map(doctor => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>

    </div>
  );
};

export default VerMedicos;
