import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

function ProductNavDesktop(){
    const [ scroll, setScroll ] = useState(false);

    useEffect(function(){
        window.addEventListener("scroll", function(){
            setScroll(window.scrollY > 10);
        })
    })

    return (
        <nav className={scroll ? 'nav-desktop-product-scrolled' : 'nav-desktop-product'}>
            <div class="logo-product">
                <a class="home-link">
                    <h3 className={scroll ? 'nav-title-product nav-title-product-scrolled' : 'nav-title-product'}>Sahabat <span>Sport</span>.</h3>
                </a>
            </div>
            <div class="navbar">
                <ul class="nav-list-product">
                    <li className={scroll ? 'nav-item-product nav-item-product-scrolled' : 'nav-item-product'}><a className={scroll ? 'nav-link-product nav-link-product-scrolled' : 'nav-link-product'} href="#products-page">Products</a></li>
                    <li className={scroll ? 'nav-item-product nav-item-product-scrolled' : 'nav-item-product'}><a className={scroll ? 'nav-link-product nav-link-product-scrolled' : 'nav-link-product'} href="#ask-page">Questions</a></li>
                    <li className={scroll ? 'nav-item-product nav-item-product-scrolled' : 'nav-item-product'}><a className={scroll ? 'nav-link-product nav-link-product-scrolled' : 'nav-link-product'} href="#location-page">Location</a></li>
                    <li className={scroll ? 'nav-item-product nav-item-product-scrolled' : 'nav-item-product'}><a className={scroll ? 'nav-link-product nav-link-product-scrolled' : 'nav-link-product'} href="#contact-page">Contact Us</a></li>
                    <li className={scroll ? 'nav-item-product nav-item-product-scrolled' : 'nav-item-product'}><a className={scroll ? 'nav-link-product nav-link-product-scrolled' : 'nav-link-product'} href="/articles/checkout_basket.html">
                        <FontAwesomeIcon icon={faCartShopping} />
                    </a></li>
                </ul>
            </div>
        </nav>
    )
}

export default ProductNavDesktop;
