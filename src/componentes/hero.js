import styles from './hero-estilos.css'

const hero = ({ imagen, alt, title }) => {
    return (
      <div className={styles.container}>
      <image src={imagen} alt={alt} />
      <div>
          <h3>{title}</h3>
          <p>Meriendas</p>
      </div>
  </div>  
    );
  };
  

export default hero;