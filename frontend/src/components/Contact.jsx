import { React } from 'react';
import './Contact.css';
import map from '../images/lisbon_map.png';
function Contact() {
    return (
        <main className="contact-main-container">
            <section className='contact-left-side blue'>
                <div className="contact-left-side__text">
                    Have any doubts or questions? Reach out!
                    <br />
                    I'll be glad to answer them.
                </div>
                <br />
                <div className="contact-left-side__title">
                    <h4>Email:</h4>
                </div>
                <div className="contact-left-side__text">
                    <p>sr.fix@gmail.com</p>
                </div>
                <br />
                <div className="contact-left-side__title">
                    <h4>Tel:</h4>
                </div>
                <div className="contact-left-side__text">
                    <p>985943975</p>
                </div>
                <br />
                <div className="contact-left-side__title">
                    <h4>Address:</h4>
                </div>
                <div className="contact-left-side__text">
                    <p>Rua de Oviedo, 88</p>
                    <p>Lisboa </p>
                    <p>1920-123 Portugal</p>
                </div>

            </section>
            <section className='contact-right-side'>
                <img
                    src={map}
                    alt={`Sr.Fix`}
                />
            </section>
        </main>
    );
}

export default Contact;