import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar.jsx";
import './header.css'

function Header() {
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
                        <li className="list-group-item">
                            <Link to="/">
                                <button className="btn-dropdown-item">Home</button>
                            </Link>
                        </li>
                        <li className="list-group-item">
                            <Link to="/about">
                                <button className="btn-dropdown-item">About Me</button>
                            </Link> 
                        </li>
                        <li className="list-group-item">
                            <Link to="/projects">
                                <button className="btn-dropdown-item">Projects</button>
                            </Link>
                        </li>
                        <li className="list-group-item">
                            <Link to="/contact">
                                <button className="btn-dropdown-item">Contact Me</button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;