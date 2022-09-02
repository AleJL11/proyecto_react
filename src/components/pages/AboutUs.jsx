import { Router, Link, Route, Routes } from "react-router-dom";
import React from "react";
import Homborinfo from "/homebor_info.png";
import Homestay_p from "/homestay_p.jpg";
import Homestay from "/iHomestay_logo.png";
import download from "/download.png";
import User from "/icons/user.svg";
import Mail from "/icons/mail.svg";
import Edit from "/icons/edit.svg";

export const AboutUs = () => {
  return (
    <>
      <div className="container-info">
        <h4>About Us Page</h4>
        <h1 className="titulo_hombor">About us</h1>
        <h4 className="Subtitle">About us</h4>

        <img src={Homborinfo} alt="Imagen info" className="img-info" />

        <div className="container_text">
          <p className="texto_info">
            Homebor is a new accommodation platform. We help schools that runs a
            homestay department to stay connected with their homestay families
            in order to bring efficiency and maximize a good experience for
            everyone involved.
          </p>
          <p className="texto_info">
            The management and organization of students and homestays in a
            single space has been systematized. We offer a cross-cutting
            workflow between the different stakeholders. Consequently,
            generating a detailed and constant follow-up between the homestay,
            student and educational organization.
          </p>
          <p className="texto_info">
            We offer a new and easy experience to find family homes in the
            locations closest to your academy with updated and intuitive tools
            for users. Register and become part of our community.
          </p>
        </div>

        <div className="container_info2">
          <h4 className="subtitle2">Homestay</h4>
          <img src={Homestay_p} alt="Imagen info" className="img-info2" />
          <p className="texto_info2">
            A Homestay is a host family that offers home accommodation services
            to foreign students, such as accommodation and comfortable meals.
            Most importantly, they facilitate a unique and meaningful cultural
            immersion, allowing students to better understand and experience the
            host country, which cannot be learned in a classroom.
          </p>
          <Link className="button__info" to="../Sendemail" element="Sendemail">
            Become a Homestay
          </Link>
        </div>
        <div className="sendemail">
          <h4 className="send_question">Send us your Question</h4>

          <div className="formulario">
            <label for="nombre" className="colocar_nombre">
              First Name
              <span className="obligatorio"></span>
              <img className="icon" src={User} alt="icono de usuario" />
            </label>

            <input
              className="campo"
              type="text"
              name="introducir_nombre"
              id="nombre"
              required="obligatorio"
              placeholder="e.g. Jhon"
            />
            <small className="form-control-error">
              Without special characters or numbers
            </small>
          </div>

          <div className="formulario2">
            <label for="email" className="colocar_email">
              Email
              <img className="icon" src={Mail} alt="icono de usuario" />
              <span className="obligatorio"></span>
            </label>
            <input
              className="campo"
              type="email"
              name="introducir_email"
              id="email"
              required="obligatorio"
              placeholder="e.g. Jhon Smith"
            />
          </div>

          <div className="formulario3">
            <label for="nombre" className="colocar_texto">
              Subject
              <img className="icon" src={Edit} alt="icono de usuario" />
              <span className="obligatorio"></span>
            </label>
            <input
              className="campo"
              type="text"
              name="introducir_nombre"
              id="nombre"
              required=""
              placeholder="e.g. How can i Register"
            />
          </div>

          <div className="formulario4">
            <label for="mensaje" className="colocar_mensaje">
              Message Content
              <span className="obligatorio"></span>
            </label>
            <textarea
              name="introducir_mensaje"
              className="campo1"
              id="mensaje"
              required="obligatorio"
              placeholder="e.g. How can i Register"
            ></textarea>
          </div>

          <Link className="button__info2" to="/src/components/Sendemail.jsx">
            Send Message
          </Link>
        </div>

      </div>

      <div className="ihomestay">
          <img className="img_info4" src={Homestay} alt="imagen4" />
          <p className="text_info4">
            Being with iHomestay gives the opportunity to Inspires new language
            possibilities, learn more about their world and learn different
            culture as well as share your own cultures with international
            students.
          </p>
        </div>

        <hr className="hr" />

        <div className="ihomestay1">
          <img className="img_info5" src={download} alt="imagen5" />

          <p className="text_info5">
            Homebor app for hosts is now available. Download it now!!
          </p>
        </div>

    </>
  );
};


