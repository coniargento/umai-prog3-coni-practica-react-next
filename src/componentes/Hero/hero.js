import styles from './Hero.estilos.css'
import Image from 'next/image';

const hero = ({ imagen, alt, title }) => {
    return (
      <div className={styles.container}>
      <image width={200} height={200} src={imagen} alt={alt} />
      <div>
          <h3>{Meriendas}</h3>
          <p>Meriendas</p>
      </div>
  </div>  
    );
  };

export default hero;