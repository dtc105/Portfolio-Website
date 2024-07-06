import Carousel from 'react-bootstrap/Carousel'

function ImageCarousel() {
    return (
        <Carousel data-bs-theme="dark" controls={false} indicators = {false} interval={5000}>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="holder.js/800x400?text=First slide&bg=f5f5f5"
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="holder.js/800x400?text=Second slide&bg=eee"
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="holder.js/800x400?text=Third slide&bg=e5e5e5"
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default ImageCarousel;