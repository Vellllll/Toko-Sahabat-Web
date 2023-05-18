import productImg from './../../assets/img/gotou_hitori.jpg';
import { Link } from 'react-router-dom';

function Products(){
    return (
        <div class="container product-page" id="products-page">
            <h2 class="product-title mb-0">Our Products</h2>
            <a href="" className="more-products text-black">Semua Produk > </a>
            <p class="product-page-desc mb-3 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div class="row products">
                <div class="card col-lg-3 col-sm-8 border-0">
                    <img class="product-image" src={productImg} alt=""/>
                    <br/>
                    <h5>Lorem, ipsum.</h5>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, consequuntur?</p>
                    <Link to="/product">
                        <button class="product-details">Details</button>
                    </Link>
                </div>
                <div class="card col-lg-3 col-sm-8 border-0">
                    <img class="product-image" src={productImg} alt=""/>
                    <br/>
                    <h5>Lorem, ipsum.</h5>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, consequuntur?</p>
                    <Link to="/product">
                        <button class="product-details">Details</button>
                    </Link>
                </div>
                <div class="card col-lg-3 col-sm-8 border-0">
                    <img class="product-image" src={productImg} alt=""/>
                    <br/>
                    <h5>Lorem, ipsum.</h5>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, consequuntur?</p>
                    <Link to="/product">
                        <button class="product-details">Details</button>
                    </Link>
                </div>
            </div>
            <div class="row products">
                <div class="card col-lg-3 col-sm-8 border-0">
                    <img class="product-image" src={productImg} alt=""/>
                    <br/>
                    <h5>Lorem, ipsum.</h5>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, consequuntur?</p>
                    <Link to="/product">
                        <button class="product-details">Details</button>
                    </Link>
                </div>
                <div class="card col-lg-3 col-sm-8 border-0">
                    <img class="product-image" src={productImg} alt=""/>
                    <br/>
                    <h5>Lorem, ipsum.</h5>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, consequuntur?</p>
                    <Link to="/product">
                        <button class="product-details">Details</button>
                    </Link>
                </div>
                <div class="card col-lg-3 col-sm-8 border-0">
                    <img class="product-image" src={productImg} alt=""/>
                    <br/>
                    <h5>Lorem, ipsum.</h5>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, consequuntur?</p>
                    <Link to="/product">
                        <button class="product-details">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Products;
