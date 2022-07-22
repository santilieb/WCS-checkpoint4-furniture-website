import { Link } from "react-router-dom";
import logo from '../images/logo.svg';
import instagram from '../images/instagram.svg';
import "./Footer.css";

const handleClick = () => {
    window.scrollTo(0, 0);
}

function Footer(props) {
    return (
        <footer className="footer-container">
            <hr />
            <div className="footer-flex">
                <div className="footer-1-flex">
                    <p onClick={handleClick}>
                        BACK TO TOP
                    </p>

                    <span className="copyright">
                        © 2022 Santiago Liebrecht
                    </span>
                </div>

                <div className="footer-2-flex">
                    <div className="social-grid">
                        <p>FIND ME ON INSTAGRAM</p>
                        <a href="https://www.instagram.com/sr.fix">
                            <img
                                className="instagram"
                                src={instagram}
                                alt='instagram-logo' />
                        </a>
                    </div>
                </div>
                <div className="footer_contacts">
                    <h6>
                        <u>Contacts</u>
                    </h6>
                    <div className="footer_email_tel">
                        <p>Email: sr.fix@gmail.com</p>
                        <p>Tel: 985943975</p>
                    </div>
                </div>

                {/* <div className="footer-3-flex">
                    <div className="social-grid">
                        <p>Find us</p>
                        <div className="social-icons-grid"></div>
                    </div>
                </div> */}

                <span className="copyright-mobile">
                    © 2022 Santiago Liebrecht
                </span>
            </div>
        </footer>
    );
}

export default Footer;