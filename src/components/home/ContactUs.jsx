import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ContactUs(){
    return (
        <div class="contact-page" id="contact-page">
            <div class="container">
                <h2 class="contact-title">Contact Us</h2>
                <FontAwesomeIcon icon={faPhone} className="phone-icon"/>
                <i class="phone-icon fa-solid fa-phone"></i>
                <p>+62 7612-2387-8999</p>
                <div class="form-card">
                    <form action="" class="contact-form">
                        <div class="row mb-4">
                            <div class="col-lg-4 col-sm-12">
                                <div class="mb-3">
                                    <label for="nama" class="form-label">Nama:</label>
                                    <input type="text" class="form-control" name="nama" id="nama" placeholder="Masukkan nama"/>
                                </div>
                                <div class="mb-3">
                                    <label for="no_wa" class="form-label">Nomor Whatsapp:</label>
                                    <input type="text" class="form-control" name="no_wa" id="no_wa" placeholder="Masukkan nomor whatsapp"/>
                                </div>
                            </div>
                            <div class="col-lg-8 col-sm-12">
                                <label for="pesan" class="form-label">Pesan:</label>
                                <textarea class="form-control" name="pesan" id="pesan" rows="10" placeholder="Masukkan pesan"></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <button class="form-button">Kirim</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;
