import React from "react";
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';
import Help from './components/pages/Help';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Footer from "./components/Footer";
import Sendemail from "./components/Sendemail";

import "./App.css";

function App() {

  return (
    <>
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="help" element={<Help />} /> 
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="sendemail" element={<Sendemail/>}/>
        
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
