import { React } from 'react';
import './Contact.css';
function Contact() {
    return (
        <main className="contact-main-container">
            <section className='contact-left-side'>
                <div className="contact-left-side__text">
                    Got questions? Anything to ask?
                    <br />
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus quam enim odio voluptatum voluptas aliquam exercitationem minima corrupti porro laboriosam tempora, veniam laborum deleniti ab quisquam iusto dignissimos quae quis.
                </div>
                <div className="contact-left-side__title">
                    <h2>Email</h2>
                </div>
                <div className="contact-left-side__text">
                    <p>email@address.com</p>
                </div>
                <div className="contact-left-side__title">
                    <h2>Tel</h2>
                </div>
                <div className="contact-left-side__text">
                    <p>1234567890</p>
                </div>
                <div className="contact-left-side__title">
                    <h2>Address</h2>
                </div>
                <div className="contact-left-side__text">
                    <p>Rua de algo</p>
                    <br />
                    <p>nr algo</p>
                    <br />
                    <p>Penha de França, Lisboa </p>
                    <br />
                    <p>1900-123 Portugal</p>
                </div>

            </section>
            <section className='contact-right-side'>
                <p>Insert Google map here</p>
            </section>
        </main>
    );
}

export default Contact;