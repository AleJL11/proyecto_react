import '../App.css';
import White from "/white.png";

const Footer = () => {
    return (
        
        <div className='container__footer'>
            <div className="footer">
                <img id="white-logo" class="logo_f" src="assets/logos/white.png"></img>
            </div>
            <div className="ts-copyright">(C) Copyright 2021, All rights reserved
                <div className="ts-footer-nav">
                    <nav class="nav">
                        <a href="https://www.facebook.com/homebor.platform" target="_blank" class="nav-link">
                            <i class="fab fa-facebook-f" id="footer"></i>
                        </a>
                        <a href="https://www.twitter.com/@Homebor_Platfrm" target="_blank" class="nav-link">
                            <i class="fab fa-twitter" id="footer"></i>
                        </a>
                        <a href="https://instagram.com/homebor.platform?utm_medium=copy_link" target="_blank" class="nav-link">
                            <i class="fab fa-instagram" id="footer"></i>
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    )
}
export default Footer;