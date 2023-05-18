import { useEffect } from "react";
import About from "../components/home/About";
import Hero from "../components/home/Hero";
import DesktopNav from "../components/navigation/DesktopNav";
import MobileNav from "../components/navigation/MobileNav";
import Products from "../components/home/Products";
import Ask from "../components/home/Ask";
import Location from "../components/home/Location";
import ContactUs from "../components/home/ContactUs";
import Footer from "../components/home/Footer";
import "./../assets/css/main.css";

function HomePage(){
    useEffect(function(){
        window.scroll(0,0);
    })

    return (
        <div className="hero mb-5">
            <DesktopNav/>
            <MobileNav/>
            <Hero/>
            <About/>
            <Products/>
            <Ask/>
            <Location/>
            <ContactUs/>
            <Footer/>
        </div>
    )
}

export default HomePage;
