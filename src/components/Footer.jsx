import '../App.css';
import White from '../assets/img/white.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className='container__footer'>
            <div className="img_footer">
                <img src={White} alt="White"></img>
            </div>
            <div className="ts-copyright">(C) Copyright 2021, All rights reserved
                <div className="ts-footer-nav">
                    <nav class="nav">
                        <a href="https://www.facebook.com/homebor.platform" target="_blank" class="nav-link">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="https://www.twitter.com/@Homebor_Platfrm" target="_blank" class="nav-link">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="https://instagram.com/homebor.platform?utm_medium=copy_link" target="_blank" class="nav-link">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    )
}
export default Footer;