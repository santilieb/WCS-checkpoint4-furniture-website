import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import './About.css';

import fico from '../images/fico.png';
import fico_2 from '../images/fico-2.png';

function About() {
    return (
        <main className="about">
            <div className="carousel-container">
                <img
                    className="d-block w-100"
                    src={fico_2}
                    alt={`Sr.Fix`}
                />
            </div>
            <hr className="" />
            <div className="about-text-container">
                <div>
                    <span className="orange">Sr.Fix</span> is the personal brand of Federico Luis, furniture designer and
                    cabinet maker from Oaxaca (Mexico) living between Spain and Portugal since 2005.
                    <br />
                    <br />
                    As a wood lover he has always created pieces aimed at restoring the value
                    this material is deprived of when removed from its natural environment.
                </div>
                <img
                    className="d-block w-100"
                    src={fico}
                    alt={`Sr.Fix`}
                />
                <div>
                    His identity keeps references to the sustainability values
                    that shaped his work at the very beginning and becomes a signature for
                    the noble-wood pieces now <span className="orange">Sr.Fix</span> is creating.
                    <br />
                    <br />
                    <p className="orange">JUST A FEW CHIPS OF THE WHOLE THING.</p>
                </div>
            </div>
        </main>
    );
}

export default About;