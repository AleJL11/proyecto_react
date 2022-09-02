import '../App.css';
import White from '../assets/img/white.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <div className='container__footer'>
            <div className="img_footer">
                <img src={White} alt="White"></img>
            </div>
            <div className="ts-copyright">(C) Copyright 2021, All rights reserved
                <div className="ts-footer-nav">
                    <nav className="nav">
                        <a Link="https://www.facebook.com/homebor.platform" target="_blank" class="nav-link">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a Link="https://www.twitter.com/@Homebor_Platfrm" target="_blank" class="nav-link">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a Link="https://instagram.com/homebor.platform?utm_medium=copy_link" target="_blank" class="nav-link">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    )
}