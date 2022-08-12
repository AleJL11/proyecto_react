import React from "react";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import User from "/icons/user.svg";
import Mail from "/icons/mail.svg";
import Edit from "/icons/edit.svg";
import lock from "/icons/lock.svg";
import eyes from "/icons/eyes.svg";


const Sendemail = () => {
    return (
      <>
        <div className="container-info">          
          <div className="sendemail">
            <h4 className="send_question">Register and Work with Us!</h4>
  
            <div className="formulario">
              <label for="nombre" className="colocar_nombre">
                Name             
                <span className="obligatorio"></span>
                <img className="icon1" src={User} alt="icono de usuario" />
              </label>
              
              <input className="campo"
              
                type="text"
                name="introducir_nombre"
                id="nombre"
                required="obligatorio"
                placeholder="e.g. Jhon"
              />
              <small className="form-control-error"></small>
            
            </div>

            
            <div className="formulario1-2">
              <label for="nombre" className="colocar_nombre">
                Last Name             
                <span className="obligatorio"></span>
                <img className="icon2" src={User} alt="icono de usuario" />
              </label>
              
              <input className="campo"
              
                type="text"
                name="introducir_nombre"
                id="nombre"
                required="obligatorio"
                placeholder="e.g. Jhon"
              />
              <small className="form-control-error"></small>
            
            </div>

  
            <div className="formulario2-1">
              <label for="email" className="colocar_email">
                Mail
                <img className="icon3" src={Mail} alt="icono de usuario" />
                <span class="obligatorio"></span>
              </label>
              <input className="campo"
                type="email"
                name="introducir_email"
                id="email"
                required="obligatorio"
                placeholder="e.g. Jhon Smith"
              />
            </div>

            <div className="formulario3-1">
              <label for="nombre" className="colocar_texto">
                Password
                <img className="icon4" src={lock} alt="icono de password" />
                <span class="obligatorio"></span>
              </label>
              <input className="campo"
                type="password"
                name="introducir_nombre"
                id="nombre"
                required="obligatorio"
                placeholder="Password"
              />
            </div>
  
           

            <div className="formulario3-2">
              <label for="nombre" className="colocar_texto1">
                Repeat Password
                <img className="icon5" src={lock} alt="icono de password" />
                <span class="obligatorio"></span>
              </label>
              <input className="campo"
                type="password"
                name="introducir_nombre"
                id="nombre"
                required="obligatorio"
                placeholder="Password"
              />
            </div>
  
            <div className="formulario4">
                    <label for="mensaje" className="colocar_texto1">
                      Register As
                      
                      <span class="obligatorio"></span>
                    </label>
                    
                      <form action="#">
                        
                          <select name="lenguajes" id="lang" className="select">
                          <option disabled selected>--Select Option--</option>
                          <option value="javascript">Register As Student</option>
                          <option value="php">Register As Homestay</option>                      
                          </select>
                      
                    </form>   
                                        
            </div>
  
            <Link className="button__info2" to="/">
              Send Message
            </Link>
          </div>
  
          <div className="container_info3">
          
  
          </div>
        </div>
  
        
      </>
    );
  };
  
  export default Sendemail;