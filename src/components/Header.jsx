import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import '../App.css';
import HomeborLogo from '../assets/img/homebor_logo.png';

const Header = () => {
    return (
        <div className='container__header'>
            <div className="logo">
                <img src={HomeborLogo} alt="Homebor Logo" />
            </div>
            <div className="container__menu">
                <ul className="menu">
                    <li className="item__menu">
                        <Link className='link' to="/">Home</Link>
                    </li>
                    <li className="item__menu">
                        <Link className='link' to="about">About Us</Link>
                    </li>
                    <li className="item__menu">
                        <HashLink className='link' to="#services">Services</HashLink>
                    </li>
                    <li className="item__menu">
                        <HashLink className='link' to="#contact">Contact Us</HashLink>
                    </li>
                    <li className="item__menu">
                        <Link className='link' to="help">Help</Link>
                    </li>
                    <li className="item__menu blue">
                        <Link className='link white' to="login">Login</Link>
                    </li>
                    <li className="item__menu purple">
                        <Link className='link white' to="register">Register</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;
