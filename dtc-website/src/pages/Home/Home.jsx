import '../pages.css'
import './home.css'
import React from 'react'
// import ImageCarousel from '../../components/Carousel/ImageCarousel.jsx';
import ImageCard from '../../components/ImageCard/ImageCard.jsx'
import Image from "./me.jpg"


function Home() {



    return (
        <>
            <div className="offset-grid">
                <div className="img-card">
                    <ImageCard img={Image} 
                        alt="alt text" 
                        title="ME1" 
                        description="description"
                        date="April 8th, 2024"/>
                </div> 
                <div className="img-card">
                    <ImageCard img={Image} 
                        alt="alt text" 
                        title="ME2" 
                        description="description"
                        date="April 8th, 2024"/>
                </div><div className="img-card">
                    <ImageCard img={Image} 
                        alt="alt text" 
                        title="ME3" 
                        description="description"
                        date="April 8th, 2024"/>
                </div><div className="img-card">
                    <ImageCard img={Image} 
                        alt="alt text" 
                        title="ME4" 
                        description="description"
                        date="April 8th, 2024"/>
                </div>
                <div className="img-card">
                    <ImageCard img={Image} 
                        alt="alt text" 
                        title="ME5" 
                        description="description"
                        date="April 8th, 2024"/>
                </div>
                <div className="img-card">
                    <ImageCard img={Image} 
                        alt="alt text" 
                        title="ME6" 
                        description="description"
                        date="April 8th, 2024"/>
                </div>
            </div> 
            
        </>
    );
}

export default Home;