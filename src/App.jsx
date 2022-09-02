import React from "react";
import { Routes, Route } from 'react-router-dom';

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
        </Route>
        <Route path="sendmail" element={<Sendemail />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
