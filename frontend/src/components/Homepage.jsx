import React from "react";
import cabinet_1 from '../images/cabinet-1.png';
import cabinet_2 from '../images/cabinet-2.png';
import cabinet_3 from '../images/cabinet-3.png';
import cabinet_4 from '../images/cabinet-4.png';
import cabinet_5 from '../images/cabinet-5.png';
import chair_1 from '../images/chair-1.png';
import chair_2 from '../images/chair-2.png';
import chair_3 from '../images/chair-3.png';
import chair_4 from '../images/chair-4.png';
import chair_5 from '../images/chair-5.png';
import chair_6 from '../images/chair-6.png';
import chestnut_table_1 from '../images/chestnut-table-1.jpg';
import chestnut_table_2 from '../images/chestnut-table-2.jpg';
import chestnut_table_3 from '../images/chestnut-table-3.jpg';
import chestnut_table_4 from '../images/chestnut-table-4.jpg';
import chestnut_table_5 from '../images/chestnut-table-5.jpg';
import desktop_1 from '../images/desktop-1.png';
import desktop_2 from '../images/desktop-2.png';
import desktop_3 from '../images/desktop-3.png';
import stool_1 from '../images/stool-1.png';
import stool_3 from '../images/stool-3.png';
import stool_4 from '../images/stool-4.png';
import table_1 from '../images/table-1.png';
import table_2 from '../images/table-2.png';
import table_3 from '../images/table-3.png';
import Carousel from 'react-bootstrap/Carousel';
import './Homepage.css';

const chestnut = [chestnut_table_1, chestnut_table_2, chestnut_table_3, chestnut_table_4, chestnut_table_5];

function Swiper({ img }) {
    return (
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
    );
}

function Homepage() {
    return (
        <main className="homepage">
            <div className="carousel-container">
                <Swiper img={chestnut} />
            </div>
            <div className="homepage-description">
                <u>HANDMADE IN LISBON</u>
            </div>
            <div className="homepage-text">
                <span>
                    Every woodwork piece is handmade to order, which means it can be customized to any of your specifications.
                    <br />
                    <br />
                    I can walk you through the process of creating your own piece of furniture, so you can be sure that you will
                    get the best possible results.
                    <br />
                    <br />
                    If you can't find the piece of furniture you are looking for, please get in touch and I can most likely make it for you.
                </span>
            </div>
            <hr />
            <div className="homepage-description">
                <u>TABLES AND DESKS</u>
            </div>

        </main>
    );
}

export default Homepage;