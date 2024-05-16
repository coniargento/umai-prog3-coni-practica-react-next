import styles from "./Navbar-estilos.css"
const navmenu = () => {
    return (
    <ul className={styles.container}>
        <li className={styles.container}><a>Inicio</a></li>
        <li className={styles.container}><a>Nuestra historia</a></li>
        <li className={styles.container}><a>Sedes</a></li>
        <li className={styles.container}><a>Contacto</a></li>
    </ul>
    )
}

export default navmenu