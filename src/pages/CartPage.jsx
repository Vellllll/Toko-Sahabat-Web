import ProductNavDesktop from "../components/product/ProductNavDesktop";
import ProductNavMobile from "../components/product/ProductNavMobile";
import CartList from "../components/cart/CartList";
import OtherProduct from "../components/product/OtherProduct";
import Footer from "../components/home/Footer";
import "../assets/css/cart/cartMain.css";

function CartPage(){
    return (
        <>
            <ProductNavDesktop/>
            <ProductNavMobile/>
            <div className="main-basket container">
                <CartList/>
                <OtherProduct/>
            </div>
            <Footer/>
        </>
    )
}

export default CartPage;
