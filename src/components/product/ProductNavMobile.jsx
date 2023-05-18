import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";

function ProductNavMobile(){
    const [ scroll, setScroll ] = useState(false);
    const [ side, setSide ] = useState(false);

    useEffect(function(){
        window.addEventListener("scroll", function(){
            setScroll(window.scrollY > 10);
        })
    })

    function handleSide(){
        setSide(!side);
    }

    return (
        <>
            <nav className={scroll ? 'nav-mobile-product-scrolled' : 'nav-mobile-product'}>
                <div class="logo-product">
                    <h3 className={scroll ? 'nav-title-product nav-title-product-scrolled' : 'nav-title-product'}>Sahabat <span>Sport</span>.</h3>
                </div>
                <div class="navbar-mobile">
                    <ul class="nav-list-product">
                        <li className={scroll ? 'nav-item-product-scrolled' : 'nav-item-product'}>
                            <a href="/articles/checkout_basket.html" class="nav-link-product black-color">
                                <FontAwesomeIcon icon={faCartShopping} />
                            </a>
                        </li>
                        <li className={scroll ? 'nav-item-product-scrolled' : 'nav-item-product'}>
                            <a class="hamburger nav-link-product black-color" id="hamburger-btn" onClick={handleSide}>
                                <FaBars/>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div class="side-nav-product" style={{
                display: side ? 'block' : 'none'
            }}>
                <div class="menu-product">
                    <ul class="menu-list-product">
                        <li class="menu-item-product"><a class="nav-link-product" href="#home">Home</a></li>
                        <li class="menu-item-product"><a class="nav-link-product" href="#products-page">Products</a></li>
                        <li class="menu-item-product"><a class="nav-link-product" href="#ask-page">Questions</a></li>
                        <li class="menu-item-product"><a class="nav-link-product" href="#location-page">Location</a></li>
                        <li class="menu-item-product"><a class="nav-link-product" href="#contact-page">Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ProductNavMobile;
