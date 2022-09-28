import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "../App.css";
import HomeborLogo from "../assets/img/homebor_logo.png";
import navmenu from "react-bootstrap/Navbar";

export const Header = () => {
  return (
    <div className="container">
      <div className="container">
        <img src={HomeborLogo} alt="Homebor Logo" class="col-sm-3 logo"/>
      </div>
      <div className="container__nav">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="about">
              AboutUs
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#services">
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="contact">
              ContactUs
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="help">
              Help
            </Link>
          </li>
          <button class="btn btn-primary" type="submit">Login</button>
          <button class="btn btn-primary" type="submit">Register</button>
        </ul>
      </div>
    </div>
  );
};
