import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

function Location(){
    return (
        <div class="container location-page mt-5" id="location-page">
            <h2 class="location-title">Location</h2>
            <FontAwesomeIcon className="location-icon" icon={faLocationDot}/>
            <div class="maps">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.2141883619092!2d110.45792231535768!3d-6.984030670335121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708cc46f974f3b%3A0x6add1e240825c375!2sTOKO%20SAHABAT!5e0!3m2!1sid!2sid!4v1676623876698!5m2!1sid!2sid" height="450" style={{border:0, width: '100%'}} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}

export default Location;
