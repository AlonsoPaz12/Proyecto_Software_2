import React from "react";
import styles from './Especialidad.module.css';

const Especialidad = ({ nombre, icono }) => {
  return (
    <div className={styles.especialidadItem}>
      <img src={icono} alt={nombre} className={styles.especialidadIcono} />
      <span className={styles.especialidadNombre}>{nombre}</span>
    </div>
  );
};

export default Especialidad;