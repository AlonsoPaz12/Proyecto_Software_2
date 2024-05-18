import React from "react";
import styles from './Especialidad.module.css';

const Especialidad = ({ nombre, icono, color }) => {
  const iconoContainerStyle = {
    backgroundColor: color
  };

  return (
    <div className={styles.especialidadItem}>
      <div className={styles.especialidadIconoContainer} style={iconoContainerStyle}>
        {React.cloneElement(icono, { className: styles.especialidadIcono })}
      </div>
      <span className={styles.especialidadNombre}>{nombre}</span>
    </div>
  );
};

export default Especialidad;