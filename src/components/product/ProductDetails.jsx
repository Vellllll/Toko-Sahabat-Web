import productImg from './../../assets/img/gotou_hitori.jpg';
import { faPlus, faMinus, faShare, faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ProductDetails(){
    return (
        <div class="row mb-5">
            <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="product-card">
                    <img src={productImg} alt=""/>
                    <div class="slider">
                        <div class="col-4">
                            <img src={productImg} alt=""/>

                        </div>
                        <div class="col-4">

                            <img src={productImg} alt=""/>
                        </div>
                        <div class="col-4">
                            <img src={productImg} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-5 col-md-6 col-sm-6">
                <div class="product-description">
                    <h4 class="product-name">Bocchi The Rock</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, ut.</p>
                    <h2 class="price">Rp 59.900</h2><br/>
                    <p>Pilih ukuran: <span class="size-txt">S</span></p>
                    <div class="sizes">
                        <button class="size col-2">S</button>
                        <button class="size col-2 active">M</button>
                        <button class="size col-2">L</button>
                        <button class="size col-2">XL</button>
                        <button class="size col-2">XXL</button>
                    </div><br/>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla assumenda ullam aliquam?</p><br/>
                    <div class="row">
                        <div class="details col-2">
                            <h6 class="details-title">Detail</h6>
                        </div>
                        <div class="">Kondisi: baru</div>
                        <div class="">Stok: 4999</div>
                        <div class="">Kategori: anime</div>
                        <br/><br/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, fugiat voluptas? Ratione mollitia beatae exercitationem aliquid maiores quis accusantium reprehenderit ut laborum, omnis doloremque sequi id asperiores ea cumque voluptate quasi nostrum iusto numquam veritatis quia! Nihil tempore doloremque nemo nesciunt dignissimos. Voluptatum, asperiores! Harum obcaecati autem praesentium molestias quae!</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-12 col-sm-12">
                <div class="total-card">
                    <h6>Atur jumlah dan catatan</h6>
                    <p>M</p>
                    <div class="counter mb-3">
                        <span class="minus">
                            <FontAwesomeIcon icon={faMinus} />
                        </span>
                        <input class="counter-input" type="number" min="1" value="0"/>
                        <span class="plus">
                            <FontAwesomeIcon icon={faPlus} />
                        </span>
                    </div>
                    <div class="row mb-3">
                        <div class="subtotal col-6">
                            Subtotal
                        </div>
                        <div class="subtotal-price col-6">
                            Rp 59.900
                        </div>
                    </div>
                    <button class="checkout mb-3">Tambah ke keranjang</button>
                    <div class="row info">
                        <div class="col-6 chat"><FontAwesomeIcon icon={faComment} /> Chat</div>
                        <div class="col-6 share"><FontAwesomeIcon icon={faShare} /> Share</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;
