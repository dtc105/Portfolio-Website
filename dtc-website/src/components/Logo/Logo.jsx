import styles from './Logo.module.css'
import animations from '../../assets/stylesheets/Animations.module.css'
import '../../../node_modules/bootstrap-icons/font/bootstrap-icons.css'

function Logo() {

    function handleHover() {
        const logo = document.getElementById("logo");
        const icons = document.querySelectorAll(".icon");
        logo.classList.replace("shown", "hidden");
        icons.forEach(icon => icon.classList.replace("hidden", "shown"));
    }

    function handleUnhover() {
        const logo = document.getElementById("logo");
        const icons = document.querySelectorAll(".icon");
        logo.classList.replace("hidden", "shown");
        icons.forEach(icon => icon.classList.replace("shown", "hidden"));
    }

    return (
        <div 
            className={styles.logoContainer}
            onMouseEnter={handleHover}
            onMouseLeave={handleUnhover}
        >
            <a 
                href="https://www.linkedin.com/in/dtcooper105/" 
                target="_blank"
                className={`hidden icon ${styles.icon}`}
                id={styles.linkedin}
            >
                <i className="bi bi-linkedin"></i>
            </a>
            <a 
                href="https://github.com/dtc105" 
                target="_blank" 
                className={`hidden icon ${styles.icon}`} 
                id={styles.github}
            >
                <i className="bi bi-github"></i>
            </a>
            <img 
                src="/src/assets/images/logo.png"
                alt="logo" 
                id="logo"
                className={`shown ${styles.logo} ${animations.shake}`}
            />
        </div>
    );
}

export default Logo;
