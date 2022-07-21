import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import './About.css';
import img1 from '../images/Detalle1.jpg';
import img2 from '../images/Detallle2.jpg';
import img3 from '../images/Frente.jpg';
import img4 from '../images/Perfil.jpg';
import img5 from '../images/Superficie.jpg';

function Swiper() {

    const img = [img1, img2, img3, img4, img5];


    return (
        <Carousel
            controls={false} interval={3000} indicators={false} >
            {img.map((item, index) => (
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={item}
                        alt="First slide"
                    />
                </Carousel.Item>

            ))}
            {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
            {/* </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img3}
                    alt="Third slide"
                />
            </Carousel.Item> */}
        </Carousel>
    );
}

function About() {
    return (
        <main className="about">
            <div className="carousel-container">
                <Swiper />
            </div>
        </main>
    );
}

export default About;