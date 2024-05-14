import React from 'react';
import styles from "./LeftBarButton.module.css";
import { AiOutlineDeliveredProcedure } from "react-icons/ai";

const LeftBarButton = () => {
  return (
    <div className={styles.container}>
        <AiOutlineDeliveredProcedure />
        <div style={{height: '100%', width: '5px'}}></div>
        <span>Proximas Citas</span>
    </div>
  );
};

export default LeftBarButton;