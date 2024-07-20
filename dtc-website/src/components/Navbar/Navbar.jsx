import { Link } from 'react-router-dom'
import '../../../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import styles from './Navbar.module.css'

function Navbar() {   
    
    function onButtonClick () {

    }
    
    return (
        <nav className={styles.navbarContainer}>
            <button
                className={styles.button}
                onClick={onButtonClick}>
                <i className="bi bi-list"></i>
            </button>

            <ul className={styles.list}>
                <Link className={styles.listItem} to="/">Home</Link>
                <Link className={styles.listItem} to="/projects">Projects</Link>
                <Link className={styles.listItem} to="/contact">Contact</Link>
            </ul>
        </nav>
    );
}

export default Navbar;