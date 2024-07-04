import Navbar from "../../components/Navbar/Navbar.jsx";
import './header.css'

function Header() {
    return (
        <div className="header">
            <div className="header-links-container">
                <div className="header-link" id="linkedin">
                    <i className="bi bi-linkedin"></i>
                </div>
                <div className="header-link" id="github">
                    <i className="bi bi-github"></i>
                </div>
            </div>
            <h1 className="header-title">Derek Cooper</h1>
            <Navbar />
        </div>
    );
}

export default Header;