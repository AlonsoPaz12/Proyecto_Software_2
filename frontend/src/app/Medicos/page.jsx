'use client';
import React, { useState } from 'react';
import DoctorCard from '../../components/DoctorCard/DoctorCard.jsx';
import SearchBar from '../../components/BuscadorFiltro/BuscadorFiltro.jsx';
import styles from './page.module.css';

const VerMedicos = () => {
  
  const doctores = [
    { id: 1, nombre: 'Dr. Juan Pérez', especialidad: 'Pediatría', imagen:'https://i.ibb.co/b6SDFTN/01.jpg'},
    { id: 2, nombre: 'Dra. María González', especialidad: 'Dermatología', imagen:'https://i.ibb.co/b6SDFTN/01.jpg' },
    { id: 3, nombre: 'Dra. Andre Carrion', especialidad: 'Dermatología', imagen:'https://i.ibb.co/b6SDFTN/01.jpg' },
    // Agrega más doctores según sea necesario
  ];

  const [filteredDoctors, setFilteredDoctors] = useState(doctores);

  const handleSearch = (searchTerm) => {
    const filtered = doctores.filter(
      (doctor) =>
        doctor.nombre.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(searchTerm.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")) ||
        doctor.especialidad.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(searchTerm.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))
    );
    setFilteredDoctors(filtered);
  };

  return (
    <div>
      <h1 className={styles.Titulo}>Todos los Doctores</h1>
      <SearchBar placeholder="Buscar por nombre o especialidad" onSearch={handleSearch} />
      <div className={styles.VistaMedicos}>  
        {filteredDoctors.map(doctor => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default VerMedicos;
