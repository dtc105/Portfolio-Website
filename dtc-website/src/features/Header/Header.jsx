import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import Logo from '../../components/Logo/Logo.jsx'

function Header() {

    const activeClass = styles.active;

    function handleButtonClick() {
        const button = document.getElementById("menu-button");
        const dropdown = document.getElementById("dropdown");
        button.classList.toggle(activeClass);
        button.dataset.expanded = button.dataset.expanded === "true" ? "false" : "true";
        dropdown.classList.toggle("shown");
        dropdown.classList.toggle("hidden");
    }
    
    return (
        <header className={styles.headerContainer}>
            <div className={styles.left}>
                <Logo />
                <Link to="/">
                    <h1 className={styles.header}>Derek Cooper</h1>
                </Link>
            </div>
            <div className={styles.right}>
                <button 
                    className={styles.button}
                    id="menu-button"
                    onClick={handleButtonClick}
                    data-expanded="false"
                >
                    <i className="bi bi-list"></i>
                </button>
                <ul className={`${styles.list} hidden`} id="dropdown">
                    <Link to="/"><li className={styles.listItem}>Home</li></Link>
                    <Link to="/projects"><li className={styles.listItem}>Projects</li></Link>
                    <Link to="/contact"><li className={styles.listItem}>Contact</li></Link>
                </ul>
            </div>
        </header>
    );
}

export default Header;
