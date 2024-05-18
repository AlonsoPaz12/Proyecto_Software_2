import React from 'react';
import styles from "./ImagenesCard.module.css";
import Button from 'react-bootstrap/Button';
import { FaHeartPulse } from "react-icons/fa6";

const ImagenesCard = () => {
  return (
    <div className={styles.containerImg}>
      <div className={styles.topcard}>
        <div><li className={styles.MedicIcon}><FaHeartPulse size="2em"/></li></div>
        <div>
          <div style={{display: 'flex'}}>
            <div style={{marginLeft: '12px'}}>
              <h6 style={{margin: '0'}}><b>Ecocardiograma</b></h6>
              <p className={styles.labellineCard}><b>Motivo de la prueba:</b> Evaluación de dolor torácico y dificultad respiratoria</p>
            </div> 
            <Button className={styles.botonImagenesCard} variant="success">23 Mar  16:00</Button>  
          </div>
        </div>
      </div>
      <div className={styles.bottomcardImg}>
        <Button className={styles.botonImagenes} variant="success">Descargar</Button>
        <Button className={styles.botonImagenes} variant="success">Ver</Button>
        <Button className={styles.botonImagenes} variant="success">Información</Button>
      </div>
    </div>
  );
};

export default ImagenesCard;