import React, { useState } from 'react';

const DoctorSearch = ({ doctors }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredDoctors = doctors.filter((doctor) => {
    const { name, specialty } = doctor;
    const searchLowerCase = searchTerm.toLowerCase();
    return (
      name.toLowerCase().includes(searchLowerCase) ||
      specialty.toLowerCase().includes(searchLowerCase)
    );
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar por nombre o especialidad"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <ul>
        {filteredDoctors.map((doctor) => (
          <li key={doctor.id}>
            <div>Nombre: {doctor.name}</div>
            <div>Especialidad: {doctor.specialty}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorSearch;
