import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "react-bootstrap";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

function Footer(){
    return (
        <footer>
            <Container>
                <div class="row">
                    <div class="about-footer col-lg-6 col-sm-12 footer-tab mb-3">
                        <h6 class="footer-title">About Us</h6>
                        <p class="about-footer-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero voluptatum error expedita quos laboriosam debitis natus maiores ab facere necessitatibus!</p>
                    </div>
                    <div class="konten-footer col-lg-2 col-sm-12 footer-tab mb-3">
                        <h6 class="footer-title">Konten kami</h6>
                        <li class="footer-item"><a class="footer-link" href="#home">Home</a></li>
                        <li class="footer-item"><a class="footer-link" href="#products-page">Products</a></li>
                        <li class="footer-item"><a class="footer-link" href="#ask-page">Questions</a></li>
                        <li class="footer-item"><a class="footer-link" href="#location-page">Location</a></li>
                        <li class="footer-item"><a class="footer-link" href="#contact-page">Contact</a></li>

                    </div>
                    <div class="follow-footer col-lg-4 col-sm-12 footer-tab mb-3">
                        <h6 class="footer-title">Follow Us</h6>
                        <div class="footer-icon-list">
                            <a class="footer-link footer-icon" href="">
                                <i class="fa-brands fa-instagram"></i>
                                <FaInstagram/>
                            </a>
                            <a class="footer-link footer-icon" href="">
                                <FaFacebook/>
                            </a>
                            <a class="footer-link footer-icon" href="">
                                <FaWhatsapp/>
                            </a>
                        </div>
                    </div>
                </div>
                <hr class="footer-line"/>
                <p class="copyright">Copyright ©<span id="year"></span> All rights reserved | This website is made with <FontAwesomeIcon icon={faHeart}/> by Arvel</p>
            </Container>
        </footer>
    )
}

export default Footer;
