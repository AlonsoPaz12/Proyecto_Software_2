'use client';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './TopBar.module.css';
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

const TopBar = () => {
 return (
  <div className={styles.topBar}>
    <Container className={`d-none d-md-flex justify-content-between align-items-center ${styles.topBarContactInfo}`}>
      <div>
        <span className={styles.contactInfoItem}><FaPhoneAlt /> Teléfono: (123) 456-7890</span>
        <span className={styles.contactInfoItem}><FaMapMarkerAlt /> Dirección: 123 Calle Principal</span>
      </div> 
      <div><FaUser /> MI CLINICA ONLINE</div>
    </Container>

    <Navbar expand="md" data-bs-theme="dark" className={styles.topBarPrincipal}>
      <Container fluid>
        <Navbar.Brand href="#home">
        <img
          alt=""
          src="/img/logo.png"
          width="70"
          height="60"
          className={`d-inline-block align-top ${styles.logo} d-none d-md-inline`}
        />{' '}
        <img
          alt=""
          src="/img/logo.png"
          width="50"
          height="43"
          className={`d-inline-block align-top ${styles.logo} d-md-none`}
        />{' '}
          <span className={`d-none d-md-inline ${styles.logoNombreGrande}`}>MedControl+</span>
          <span className={`d-md-none ${styles.logoNombrePequeño}`}>MedControl+</span> 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
        <Navbar.Offcanvas
        id={`offcanvasNavbar-expand-md`}
        aria-labelledby={`offcanvasNavbarLabel-expand-md`}
        placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
              MedControl+
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#action1">Nosotros</Nav.Link>
              <Nav.Link href="#action2">Especialidades</Nav.Link>
              <Nav.Link href="#action3">Médicos</Nav.Link>
            </Nav>
            <Button variant="light" className="rounded-5">Agendar cita</Button> 
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  </div>
 );
};

export default TopBar;