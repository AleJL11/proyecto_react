import React from "react";
import { Routes, Route } from 'react-router-dom';

import * as components from './components';
import * as pages from './components/pages';

import "./App.css";

function App() {

  return (
    <>
      <Routes>
          <Route path="/" element={<components.Layout />}>
            <Route index element={<pages.Home />} />
            <Route path="about" element={<pages.AboutUs />} />
            <Route path="contact" element={<pages.ContactUs />} />
            <Route path="help" element={<pages.Help />} />
            <Route path="login" element={<pages.Login />} />
            <Route path="register" element={<pages.Register />} />
          </Route>
      </Routes>
      <components.Footer/>
    </>
  );
}

export default App;
