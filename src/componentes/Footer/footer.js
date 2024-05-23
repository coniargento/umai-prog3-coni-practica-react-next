import styles from './Footer.estilos.css'

const footer = () => {
    return(
        <div className={styles.containerfooter}>
            <adress>
                <a>
                    www.puzzicafe.com
                </a>
            </adress>

            <nav className={styles.menufooter}>
                <ul>
                    <li><a>Veni a vernos</a></li>
                    <li><a>Sobre nosotros</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default footer