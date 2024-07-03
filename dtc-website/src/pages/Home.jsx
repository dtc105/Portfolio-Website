import React from 'react'
import { Link } from 'react-router-dom';


function Home() {
    
    
    
    return (
        <>
            <p>Home</p>
            <Link to="/">Home</Link>
            <Link to="/about">About Me</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact Me</Link>
        </>
    );
}

export default Home;