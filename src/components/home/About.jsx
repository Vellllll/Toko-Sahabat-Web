import React from "react";
import aboutImg from "./../../assets/img/fototokosahabat.png";
import { Container } from "react-bootstrap";

function About(){
    return (
        <Container className="about-page">
            <h2 class="about-title mb-5">Tentang Sahabat Sport.</h2>
            <div class="about-content row">
                <div class="about-image col-lg-6 col-sm-8 mb-4">
                    <img src={aboutImg} alt="aboutImg" width="100%" />
                </div>
                <div class="col-lg-1"></div>
                <div class="about-desc col-lg-5 col-sm-8">
                    <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, reprehenderit.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos ducimus cupidmque?</p>
                    <p>- Lorem ipsum dolor sit amet.</p>
                    <p>- Lorem ipsum dolor sit amet.</p>
                    <p>- Lorem ipsum dolor sit amet.</p>
                    <p>- Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    <button onclick="window.location.href='/articles/login.html'" class="about-btn mt-3">Get in touch!</button>
                </div>
            </div>
        </Container>
    )
}

export default About;
