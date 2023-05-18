import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import productImg from './../../assets/img/gotou_hitori.jpg';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

function CartList(){
    return (
        <>
            <div class="row mb-5">
                <div class="col-lg-8 col-md-12 col-sm-12">
                    <div class="item-card mb-3">
                        <div class="row">
                            <div class="col-lg-2 col-md-4 col-sm-5">
                                <img src={productImg} alt=""/>
                            </div>
                            <div class="col-lg-9 col-md-7 col-sm-6 text-start">
                                <span class="item-name">Bocchi The Rock</span><br/>
                                <span class="item-price">Rp 59.900</span><br/>
                                <span>Jumlah: 6</span>
                            </div>
                            <div class="col-lg-1 col-md-1 col-sm-1 edit-delete">
                                <a href="" class="edit">
                                    <FontAwesomeIcon icon={faPenToSquare} />
                                </a> <br />
                                <a href="" class="delete">
                                    <FontAwesomeIcon icon={faTrash} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="item-card mb-3">
                        <div class="row">
                            <div class="col-lg-2 col-md-4 col-sm-5">
                                <img src={productImg} alt=""/>
                            </div>
                            <div class="col-lg-9 col-md-7 col-sm-6 text-start">
                                <span class="item-name">Bocchi The Rock</span><br/>
                                <span class="item-price">Rp 59.900</span><br/>
                                <span>Jumlah: 6</span>
                            </div>
                            <div class="col-lg-1 col-md-1 col-sm-1 edit-delete">
                                <a href="" class="edit">
                                    <FontAwesomeIcon icon={faPenToSquare} />
                                </a> <br />
                                <a href="" class="delete">
                                    <FontAwesomeIcon icon={faTrash} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="item-card mb-3">
                        <div class="row">
                            <div class="col-lg-2 col-md-4 col-sm-5">
                                <img src={productImg} alt=""/>
                            </div>
                            <div class="col-lg-9 col-md-7 col-sm-6 text-start">
                                <span class="item-name">Bocchi The Rock</span><br/>
                                <span class="item-price">Rp 59.900</span><br/>
                                <span>Jumlah: 6</span>
                            </div>
                            <div class="col-lg-1 col-md-1 col-sm-1 edit-delete">
                                <a href="" class="edit">
                                    <FontAwesomeIcon icon={faPenToSquare} />
                                </a> <br />
                                <a href="" class="delete">
                                    <FontAwesomeIcon icon={faTrash} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="item-card mb-3">
                        <div class="row">
                            <div class="col-lg-2 col-md-4 col-sm-5">
                                <img src={productImg} alt=""/>
                            </div>
                            <div class="col-lg-9 col-md-7 col-sm-6 text-start">
                                <span class="item-name">Bocchi The Rock</span><br/>
                                <span class="item-price">Rp 59.900</span><br/>
                                <span>Jumlah: 6</span>
                            </div>
                            <div class="col-lg-1 col-md-1 col-sm-1 edit-delete">
                                <a href="" class="edit">
                                    <FontAwesomeIcon icon={faPenToSquare} />
                                </a> <br />
                                <a href="" class="delete">
                                    <FontAwesomeIcon icon={faTrash} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-12 col-sm-12">
                    <div class="total-card text-start">
                        <h6 class="total mb-3">Ringkasan Belanja</h6>
                        <div class="row mb-2">
                            <div class="col-6 item-name-total">
                                <span>Bocchi the rock</span>
                            </div>
                            <div class="col-6 item-price-total">
                                <span>Rp59.900</span>
                            </div>
                        </div>
                        <div class="row mb-2">
                            <div class="col-6 item-name-total">
                                <span>Bocchi the rock</span>
                            </div>
                            <div class="col-6 item-price-total">
                                <span>Rp59.900</span>
                            </div>
                        </div>
                        <div class="row mb-2">
                            <div class="col-6 item-name-total">
                                <span>Bocchi the rock</span>
                            </div>
                            <div class="col-6 item-price-total">
                                <span>Rp59.900</span>
                            </div>
                        </div>
                        <div class="row mb-2">
                            <div class="col-6 item-name-total">
                                <span>Bocchi the rock</span>
                            </div>
                            <div class="col-6 item-price-total">
                                <span>Rp59.900</span>
                            </div>
                        </div>
                        <hr/>
                        <div class="row total-amount-all mb-3">
                            <div class="col-6">
                                <h6>Total Harga</h6>
                            </div>
                            <div class="col-6 total-amount">
                                <h6>Rp290.900</h6>
                            </div>
                        </div>
                        <button class="buy">Beli (4)</button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default CartList;
