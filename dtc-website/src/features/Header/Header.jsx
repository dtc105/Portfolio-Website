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
            <Navbar/>
        </div>
    );
}

export default Header;