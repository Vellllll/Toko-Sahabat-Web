import { useEffect, useState } from "react";

function DesktopNav(){
    const [ scroll, setScroll ] = useState(false);

    useEffect(function(){
        window.addEventListener("scroll", function(){
            setScroll(window.scrollY > 10);
        })
    })

    return (
        <nav className={scroll ? 'nav-desktop-home nav-scrolled-home' : 'nav-desktop-home'}>
            <div class="logo-home">
                <h3 className={scroll ? 'nav-title-home nav-title-home-scrolled' : 'nav-title-home'}>Sahabat <span>Sport</span>.</h3>
            </div>
            <div class="navbar-home">
                <ul class="nav-list-home">
                    <li className={scroll ? 'nav-item-home nav-item-home-scrolled' : 'nav-item-home'}><a className={scroll ? 'nav-link-home nav-link-home-scrolled active' : 'nav-link-home active'} href="#home">Home</a></li>
                    <li className={scroll ? 'nav-item-home nav-item-home-scrolled' : 'nav-item-home'}><a className={scroll ? 'nav-link-home nav-link-home-scrolled' : 'nav-link-home'} href="#products-page">Products</a></li>
                    <li className={scroll ? 'nav-item-home nav-item-home-scrolled' : 'nav-item-home'}><a className={scroll ? 'nav-link-home nav-link-home-scrolled' : 'nav-link-home'} href="#ask-page">Questions</a></li>
                    <li className={scroll ? 'nav-item-home nav-item-home-scrolled' : 'nav-item-home'}><a className={scroll ? 'nav-link-home nav-link-home-scrolled' : 'nav-link-home'} href="#location-page">Location</a></li>
                    <li className={scroll ? 'nav-item-home nav-item-home-scrolled' : 'nav-item-home'}><a className={scroll ? 'nav-link-home nav-link-home-scrolled' : 'nav-link-home'} href="#contact-page">Contact Us</a></li>
                </ul>
            </div>
            <div class="">
                <a class="login" href="/articles/login.html">LOG IN</a>
            </div>
        </nav>
    )
}

export default DesktopNav;
