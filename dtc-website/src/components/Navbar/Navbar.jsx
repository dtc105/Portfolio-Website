import { Link } from "react-router-dom";
import React from 'react'
import './navbar.css'

function Navbar() {
    return (
        <>
            <div className="navbar-container">
                <i  className="bi bi-list"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbar-links"
                    aria-expanded="false"
                    aria-controls="navbar-links"></i>
                <div className="collapse" id="navbar-links">
                    <ul className="list-group">
                        <li className="list-group-item">
                            <Link to="/">
                                <button>Home</button>
                            </Link>
                        </li>
                        <li className="list-group-item">
                            <Link to="/about">
                                <button>About Me</button>
                            </Link> 
                        </li>
                        <li className="list-group-item">
                            <Link to="/projects">
                                <button>Projects</button>
                            </Link>
                        </li>
                        <li className="list-group-item">
                            <Link to="/contact">
                                <button>Contact Me</button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Navbar;