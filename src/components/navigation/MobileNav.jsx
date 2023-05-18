import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

function MobileNav(){
    const [ side, setSide ] = useState(false);
    const [ scroll, setScroll ] = useState(false);

    useEffect(function(){
        window.addEventListener("scroll", function(){
            setScroll(window.scrollY > 10);
        });
    })

    function handleBars(){
        setSide(!side)
    }

    return (
        <>
            <nav className={scroll ? 'nav-mobile-home nav-mobile-home-scrolled' : 'nav-mobile-home'}>
                <div class="logo-home">
                    <h3 className={scroll ? 'nav-title-home nav-title-home-scrolled' : 'nav-title-home'}>Sahabat <span>Sport</span>.</h3>
                </div>
                <div class="navbar-mobile">
                    <a class="hamburger" id="hamburger-btn" onClick={handleBars} style={{
                        color: !scroll && !side ? 'white' : 'black'
                    }} >
                        <FontAwesomeIcon icon={faBars}/>
                    </a>
                </div>
            </nav>

            <div className="side-nav" style={{
                display: side ? 'block' : 'none',
                backgroundColor: scroll ? 'black' : 'white'
            }}>
                <div class="menu">
                    <ul class="menu-list">
                        <li class="menu-item"><a class="nav-link" href="#home">Home</a></li>
                        <li class="menu-item"><a class="nav-link" href="#products-page">Products</a></li>
                        <li class="menu-item"><a class="nav-link" href="#ask-page">Questions</a></li>
                        <li class="menu-item"><a class="nav-link" href="#location-page">Location</a></li>
                        <li class="menu-item"><a class="nav-link" href="#contact-page">Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default MobileNav;
