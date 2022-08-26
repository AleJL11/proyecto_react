import imagenes from "../../assets/img/imagenes";

const Questions = () =>{
return (
    <>
    <div className="Color">
    <div className="card">
        <div className="cajaprima">
            <h4 className="prima">
                Recent questions
                <a href="#" onclick="second()" id="submit_question" className="subirprima">Submit a Question</a>
                <br />
            </h4>
        </div>
        
        <img src={imagenes.img1} alt="img-help" className="img_h"/>
        <div className="caja">
            <div className="contenido">
                <h1>HOla mundo <p className="fecha">12-01-2022</p> </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae repellendus veniam voluptates iure
                    in magnam aut distinctio mollitia doloremque vitae repellat saepe rem obcaecati sit temporibus nihil,
                    nobis omnis accusantium!</p>
            </div>
        </div>
        
        <img className="img_h2" src={imagenes.img1} alt="img-help" />
        <div className="caja2">
            <div className="contenido2">
                <h2>HOla mundo <p className="fecha">09-01-2022</p> </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae repellendus veniam voluptates iure
                    in magnam aut distinctio mollitia doloremque vitae repellat saepe rem obcaecati sit temporibus nihil,
                    nobis omnis accusantium!</p>
            </div>
        </div>
        
        <img className="img_h3" src={imagenes.img1} alt="img-help" />
        <div className="caja3">
            <div className="contenido3">
                <h3>Hola mundo3 <p className="fecha">05-01-2022</p> </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae repellendus veniam voluptates iure
                    in magnam aut distinctio mollitia doloremque vitae repellat saepe rem obcaecati sit temporibus nihil,
                    nobis omnis accusantium!</p>
            </div>
        </div>
</div>
</div>
    </>
     );
};

export default Questions;
