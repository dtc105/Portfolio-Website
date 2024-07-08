import '../pages.css'
import './home.css'
import React, { useEffect, useState } from 'react'
// import ImageCarousel from '../../components/Carousel/ImageCarousel.jsx';
import ImageCard from '../../components/ImageCard/ImageCard.jsx'
import Image from "./me.jpg"


function Home() {

    // Typing effect for title //
    const [titleContent, setTitleContent] = useState("");
    const fullTitle = "Hi, I'm Derek!  Welcome to my site!";
    let string = ""
    let i = 0;
    let timeBetweenChar = 0;

    useEffect(typeTitle, []);

    function typeTitle() {
        if (i < fullTitle.length) {
            string += fullTitle.charAt(i);
            setTitleContent(string);
            i++;
            timeBetweenChar = Math.floor(Math.random() * 101) + 50;
            setTimeout(typeTitle, timeBetweenChar);
        }
    }
    // ----------------------- //

    return (
        <>
            <div className="container">
                <h2 className="title">
                    {titleContent}
                </h2>
            </div>
        </>
    );
}

export default Home;