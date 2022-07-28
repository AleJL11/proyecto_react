import { Link } from 'react-router-dom';

import HomeborLogo from '../assets/img/homebor_logo.png';

const Navbar = () => {
    return (
        <div>
            <img src={HomeborLogo} alt="Homebor Logo" />
            <hr />
            <Link to="/">Home</Link>{" "}
            <Link to="about">About Us</Link>{" "}
            <Link to="services">Services</Link>{" "}
            <Link to="contact">Contact Us</Link>{" "}
            <Link to="help">Help</Link>{" "}
            <Link to="login">Login</Link>{" "}
            <Link to="register">Register</Link>{" "}
            <hr />
        </div>
    )
}

export default Navbar;
