import React from "react";
import { Router, Link, Route, Routes } from "react-router-dom";

export const Mmenu = () =>{
    return(
        <>

<div className="tabla">
    <div className="tabla2">
    <Link className="nav-linkLink__help"  to='./components/pages/Help' id="primera">
        FAQ
    </Link>
    <Link className="nav-linkLink__help2" to="../src/components/ContactUsHelp.jsx" id="segunda">
        Contact Us
    </Link>
    <Link className="nav-linkLink__help3" to="/src/components/contactUsHelp.jsx" id="tercera">
        Recover Password
    </Link>
    </div>
</div>

        </>
    );

};