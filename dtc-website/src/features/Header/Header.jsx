import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import Logo from '../../components/Logo/Logo.jsx'
import Navbar from '../../components/Navbar/Navbar.jsx'

function Header() {
    
    return (
        <header className={styles.headerContainer}>
            {
                
            }
            <div className={styles.brand}>
                <Logo />
                <Link to="/">
                    <h1 className={styles.header}>Derek Cooper</h1>
                </Link>
            </div>
            <Navbar />
        </header>
    );
}

export default Header;
