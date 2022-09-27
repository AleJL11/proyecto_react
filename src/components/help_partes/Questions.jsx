import imagenes from "../../assets/img/imagenes";
import { Router, Link, Route, Routes } from "react-router-dom";

export const Questions = () =>{
return (
    <>
<div className="Color">
<div className="card">
    <div className="cajaprima">
            <h4 className="prima">
                Recent Questions
                <Link to="/src/components/pages/Help.jsx" onclick="second()" id="submit_question" className="subirprima">Submit a Question</Link>
                <br />
            </h4>
        </div>
        <img src={imagenes.img1} alt="img-help" className="img_h"/>
        <div className="caja">
            <div className="contenido">
                <h1>How Register on Plataform?<p className="fecha">12-01-2022</p> </h1>
                <p>Duis ac dolor et enim volutpat semper. Morbi placerat tempor ornare. Quisque bibendum ultrices diam, ac fermentum massa egestas quis. 
                Nullam eu nunc in sem efficitur dapibus. Aliquam ultricies elit nisi, rhoncus euismod purus iaculis et. Nulla facilisi. 
                Sed aliquet ante quis dui congue, sed ornare diam feugiat. </p>
            </div>
        </div>
        
        <img className="img_h2" src={imagenes.img1} alt="img-help" />
        <div className="caja2">
            <div className="contenido2">
                <h2>Why have i been blocked?<p className="fecha">09-01-2022</p> </h2>
                <p>Proin odio dolor, tincidunt eget dictum volutpat, consequat cursus libero. Suspendisse potenti. 
                Curabitur nec venenatis sapien, vel malesuada mi. Nunc malesuada nisl eu consectetur venenatis.</p>
            </div>
        </div>
        
        <img className="img_h3" src={imagenes.img1} alt="img-help" />
        <div className="caja3">
            <div className="contenido3">
                <h3>How can i find my Homestay?<p className="fecha">05-01-2022</p> </h3>
                <p> Nullam sed pulvinar lectus, quis molestie dolor. Morbi vitae porta eros. Duis ut nulla pellentesque justo ornare condimentum quis ut magna. Aenean nec egestas ligula, at euismod ipsum.
                     Praesent sed gravida libero. Pellentesque eleifend non diam eget molestie. Quisque est elit, tincidunt quis nisi a, placerat mollis eros. Mauris aliquam mollis volutpat. 
                     Mauris accumsan sed est in pulvinar.
                    <br/>
                    <br/>
                    Phasellus dictum id lorem sed dictum. Vivamus urna velit, condimentum sit amet pulvinar et, lobortis nec tellus. 
                    Fusce vel pellentesque massa, vel dapibus nunc. Proin odio dolor, tincidunt eget dictum volutpat, consequat cursus libero. Suspendisse potenti. 
                    Curabitur nec venenatis sapien, vel malesuada mi. Nunc malesuada nisl eu consectetur venenatis. </p>
            </div>
        </div>
</div>
</div>
    </>
     );
};
