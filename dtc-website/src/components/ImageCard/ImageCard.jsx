import PropType from 'prop-types'
import './imageCard.css'
import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card'

function ImageCard(props) { 

    const imgID = (props.title + props.alt).replace(/\s/, ""); 

    function onHover() {
        const imageText = document.getElementById(imgID);
        imageText.classList.remove("hide");
    }

    function onUnhover() {
        const imageText = document.getElementById(imgID)
        imageText.classList.add("hide");
    }

    return (
        <Card className="bg-dark text-white"
              onMouseEnter={onHover}
              onMouseLeave={onUnhover}>
            <Card.Img src={props.img} alt={props.alt} />
            <Card.ImgOverlay className="img-text hide" id={imgID}>
                <Card.Title className="img-title">
                    {props.title}
                </Card.Title>
                <Card.Text className="img-description">
                    {props.description}
                </Card.Text>
                <Card.Text className="img-date">Last updated {props.date}</Card.Text>
            </Card.ImgOverlay>
        </Card>
    );
}

Card.propType = {
    img: PropType.string,
    alt: PropType.string,
    title: PropType.string,
    description: PropType.string
}

Card.defaultProps = {
    img: "",
    alt: "",
    title: "",
    description: ""
}

export default ImageCard;