import { useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import './header.css'

function Header() {

    const location = useLocation();

    useEffect(() => {
        const navbarCollapsable = document.getElementById("navbar-links");
        const navbarButton = document.querySelector(".btn-dropdown");
        navbarCollapsable.classList.remove("show");
        navbarButton.ariaExpanded = false;
    }, [location]);

    return (
        <div className="header">
            <div className="header-links-container">
                <div className="header-link" id="linkedin">
                    <a href="https://www.linkedin.com/in/dtcooper105" target="_blank">
                        <i className="bi bi-linkedin"></i>
                    </a>
                </div>
                <div className="header-link" id="github">
                    <a href="https://github.com/dtc105" target="_blank">
                        <i className="bi bi-github"></i>
                    </a>
                </div>
            </div>
            <Link to="/">
                <h1 className="header-title">Derek Cooper</h1>
            </Link>
            <div className="navbar-container">
                <button className="btn-dropdown"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbar-links"
                        aria-expanded="false"
                        aria-controls="navbar-links">
                    <i className="bi bi-list"></i>
                </button>
                
                <div className="collapse" id="navbar-links">
                    <ul className="list-group">
                        <Link to="/">
                            <li className="list-group-item">
                                <span>Home</span>
                            </li>     
                        </Link>
                        <Link to="/about">
                            <li className="list-group-item">
                                <span>About Me</span>
                            </li> 
                        </Link>  
                        <Link to="/projects">
                            <li className="list-group-item">
                                <span>Projects</span>
                            </li>     
                        </Link>
                        <Link to="/contact">
                            <li className="list-group-item">
                                <span>Contact Me</span>
                            </li>     
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;