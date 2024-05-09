'use client';

import styles from './TopBar.module.css';
import {FaRegBell} from 'react-icons/fa';
import { IoReorderThreeOutline } from "react-icons/io5";

const TopBar = () => {
  

  return (
    <>
      <div className={styles.topbar}>
        <IoReorderThreeOutline size={35} color='white'/>
        <FaRegBell size={25} color='white'/>
      </div>
      
    </>
  );
};

export default TopBar;