import Banner from "/banner_img.png";
import Clicks from '/student_click.png';
import Homestay from '/homestay.png';
import Save from '/save.png';
import Accommodation from '/accommodation_home.png';
import Homestayhome from '/homestay_home.png';
import Student from '/student_home.png';
import Download from '/download.png';

const Banner_titulo = 'Simplify Your Homestay process';
const Banner_contenido = 
    'Homebor is a student accommodation platform that efficiently handles your entire business process, maximizing the experience for your team, your homestay families and your students';
const Button = <h3 className="texto_button">Book a Free Demo</h3>

const Clicks_titulo = 'Perfect Matchmaking with just a few clicks';
const Clicks_texto = 'Our platform manages the selection process in a simple and intuitive way, integrating everyone.';

const Homestay_titulo = 'Happy Families, Happy Students';
const Homestay_texto = 'Homestay families easily set up their availability and confirm their bookings in our intuitive app.';

const Save_titulo = 'Save time and money';
const Save_texto = 'Get a real time availability of your homestay families without making a single phone call. Once the booking is confirmed everyone gets notified automatically.';

const Service_titulo = 'Accommodation Provider';
const Service_texto = 'Find the perfect match, availability and book a room in just a few clicks.';

const Service_titulo_2 = 'Homestay';
const Service_texto_2 = 'One simple and intuitive app to update availability, confirm bookings and communicate with the school.';

const Service_titulo_3 = 'Student';
const Service_texto_3 = 'Students take active part of the matching process, significantly reducing changes and cancellations.';

const Download_titulo = 'Now Available!';
const Download_texto = 'We are working to give you a better experience from your mobile device';

const Home = () => {
  return (
    <>
      <img src={Banner} alt="Imagen Banner" className="banner_img" />
      <div className="container__banner">
        <h1 className="titulo_banner">{Banner_titulo}</h1>
        <p className="texto_banner">{Banner_contenido}</p>
        <button className="button__banner">
            {Button}
        </button>
      </div>

      <div className="clicks">
        <div className="img_clicks">
            <img src={Clicks} alt="Imagen Click" />
        </div>
        <div className="container__texto--clicks">
            <h1>{Clicks_titulo}</h1>
            <p>{Clicks_texto}</p>
        </div>
      </div>

      <div className="container__homestay">
        <div className="container__texto--homestay">
          <h1>{Homestay_titulo}</h1>
          <p>{Homestay_texto}</p>
        </div>
        <div className="img_homestay">
          <img src={Homestay} alt="Imagen Homestay" />
        </div>
      </div>

      <div className="container__save">
        <div className="img_save">
          <img src={Save} alt="Imagen Save" />
        </div>
        <div className="container__texto--save">
          <h1>{Save_titulo}</h1>
          <p>{Save_texto}</p>
        </div>
      </div>

      <div className="container__service">
        <div className="card">  
          <div className="img_accommodation">
            <img src={Accommodation} alt="Imagen Accommodation"/>
          </div>
          <div className="card-body">
            <h1>{Service_titulo}</h1>
            <p>{Service_texto}</p>
          </div>
        </div>
      
        <div className="card">  
          <div className="img_homestayhome">
            <img src={Homestayhome} alt="Imagen Homestayhome"/>
          </div>
          <div className="card-body">
            <h1>{Service_titulo_2}</h1>
            <p>{Service_texto_2}</p>
          </div>
        </div>
      
        <div className="card">
          <div className="img_student">
            <img src={Student} alt="Imagen Student"/>
          </div>
          <div className="card-body">
            <h1>{Service_titulo_3}</h1>
            <p>{Service_texto_3}</p>
          </div>
        </div>
      </div>

      <div className="container__download">
        <div className="container__texto--download">
          <h1>{Download_titulo}</h1>
          <p>{Download_texto}</p>
        </div>
        <div className="img_download">
          <img src={Download} alt="Imagen download" />
        </div>
      </div>

    </>
  );
};

export default Home;
