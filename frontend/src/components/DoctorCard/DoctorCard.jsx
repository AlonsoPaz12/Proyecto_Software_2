import React from 'react';
import styles from "./DoctorCard.module.css";

const DoctorCard = ({ doctor }) => {
  return (
    <div className={styles.Tarjeta}>
      <img src={doctor.imagen} alt={doctor.nombre} />
      <div>
        <h5>{doctor.nombre}</h5>
        <p>{doctor.especialidad}</p>
      </div>
    </div>
  );
};

export default DoctorCard;