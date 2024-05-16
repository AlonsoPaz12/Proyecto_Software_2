import Carousel from 'react-bootstrap/Carousel';
import styles from './Carrusel.module.css'

const Carrusel = ({imagen1, imagen2, imagen3}) => {
  return (
    <Carousel className={styles.contenido}>

      <Carousel.Item interval={3000}>
        <img src={imagen1} className={`d-block ${styles.carouselImagen}`} alt="First slide" />
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <img src={imagen2} className={`d-block ${styles.carouselImagen}`} alt="Second slide" />
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <img src={imagen3} className={`d-block ${styles.carouselImagen}`} alt="Third slide" />
      </Carousel.Item>

    </Carousel>
  );
}

export default Carrusel;