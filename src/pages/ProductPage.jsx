import { useEffect } from "react";
import ProductDetails from "../components/product/ProductDetails";
import ProductNavDesktop from "../components/product/ProductNavDesktop";
import ProductNavMobile from "../components/product/ProductNavMobile";
import "./../assets/css/product/productMain.css";
import OtherProduct from "../components/product/OtherProduct";
import Footer from "../components/home/Footer";

function ProductPage(){
    useEffect(function(){
        window.scroll(0,0);
    })

    return (
        <div className="page">
            <ProductNavDesktop/>
            <ProductNavMobile/>
            <div className="main-product container">
                <ProductDetails/>
                <OtherProduct/>
            </div>
            <Footer/>
        </div>
    )
}

export default ProductPage;
