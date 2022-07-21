import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import './About.css';
import img1 from '../images/Detalle1.jpg';
import img2 from '../images/Detallle2.jpg';
import img3 from '../images/Frente.jpg';
import img4 from '../images/Perfil.jpg';
import img5 from '../images/Superficie.jpg';
import fico from '../images/fico.png';

function Swiper() {

    const img = [img1, img2, img3, img4, img5];


    return (
        <main>
            <Carousel
                controls={false} interval={3000} indicators={false} >
                {img.map((item, index) => (
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={item}
                            alt={`slide ${index + 1}`}
                        />
                    </Carousel.Item>

                ))}
            </Carousel>
            <hr className="" />
            <div className="about-text-container">
                <div>
                    <span className="orange">Sr.Fix</span> is the personal brand of Federico Luis, furniture designer and
                    cabinet maker from Oaxaca (Mexico) living in Spain since 2005.
                    <br />
                    <br />
                    As wood lover he has always created pieces aimed to restore the value
                    this material is deprived when removed from its natural environment.
                </div>
                <img
                    className="d-block w-100"
                    src={fico}
                    alt={`Sr.Fix`}
                />
                <div>
                    His new identity should both keep references to the sustainability values
                    that shaped his work at the very beginning and become a signature for
                    the noble-wood pieces now <span className="orange">Sr.Fix</span> is creating.
                    <br />
                    <br />
                    The proposal is completed with a set of icons inspired in the tools and
                    items Federico uses in his daily routine at the workshop.
                    <br />
                    <p className="orange">JUST A FEW CHIPS OF THE WHOLE THING.</p>
                </div>
            </div>
        </main>
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