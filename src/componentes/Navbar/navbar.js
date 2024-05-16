import navmenu from "/Navmenu.js";
import styles from "./Navbar-estilos.css"

const navbar = (props) => {
const {title} = props
    return (
        <header className={styles.container}>
            <h1>{title}</h1>
            <nav className={styles.menu}>
            <navmenu/>
            </nav>
        </header>
    );
};

export default navbar