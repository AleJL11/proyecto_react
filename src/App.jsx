import React from "react";
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import { Footer, Layout, Sendemail } from './components/';
import { Home, AboutUs, ContactUs, Help, Login, Register } from './components/pages';

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
          <Route path="Sendemail" element={<Sendemail />} />
        </Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
