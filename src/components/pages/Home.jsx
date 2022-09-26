import Banner from "../home_components/Banner";
import Clicks_img from "/student_click.png";
import Homestay_img from "/homestay.png";
import Save_img from "/save.png";
import Accommodation_img from "/accommodation_home.png";
import Homestayhome_img from "/homestay_home.png";
import Student_img from "/student_home.png";
import Download_img from "/download.png";
import Accommodation_home_img from "/accommodation_home1.png";

export const Home = () => {
  return (
    <>
      <Banner />

      <div className="clicks">
        <div className="img_clicks">
          <img src={Clicks_img} alt="Imagen Click" />
        </div>
        <div className="container__texto--clicks">
          <h1>Perfect Matchmaking with just a few clicks</h1>
          <p>Our platform manages the selection process in a simple and intuitive way, integrating everyone.</p>
        </div>
        </div>

        <div className="container__homestay">
          <div className="container__texto--homestay">
            <h1>Happy Families, Happy Students</h1>
            <p>Homestay families easily set up their availability and confirm their bookings in our intuitive app.</p>
          </div>
            <div className="img_homestay">
            <img src={Homestay_img} alt="Imagen Homestay" />
          </div>
        </div>

        <div className="container__save">
          <div className="img_save">
            <img src={Save_img} alt="Imagen Save" />
          </div>
          <div className="container__texto--save">
            <h1>Save time and money</h1>
            <p>Get a real time availability of your homestay families without making a single phone call. Once the booking is confirmed everyone gets notified automatically.</p>
          </div>
        </div>
      
        <div className="container__service" id="services">
          <div className="card">
            <div className="img_accommodation">
              <img src={Accommodation_img} alt="Imagen Accommodation" />
            </div>
            <div className="card-body">
              <h1>Accommodation Provider</h1>
              <p>
              Find the perfect match, availability and book a room in just a few
              clicks.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="img_homestayhome">
              <img src={Homestayhome_img} alt="Imagen Homestayhome" />
            </div>
            <div className="card-body">
              <h1>Homestay</h1>
              <p>
              One simple and intuitive app to update availability, confirm
              bookings and communicate with the school.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="img_student">
              <img src={Student_img} alt="Imagen Student" />
            </div>
            <div className="card-body">
              <h1>Student</h1>
              <p>
              Students take active part of the matching process, significantly
              reducing changes and cancellations.
              </p>
            </div>
          </div>
        </div>

        <div className="container__download">
          <div className="container__texto--download">
            <h1>Now Available!</h1>
            <p>
              We are working to give you a better experience from your mobile
              device
            </p>
          </div>
          <div className="img_download">
            <img src={Download_img} alt="Imagen download" />
          </div>
        </div>

        <div className="container__accommodationhome" id="contact">
          <div className="img_accommodationhome">
            <img src={Accommodation_home_img} alt="Imagen Accommodationhome" />
          </div>
          <div className="container__texto--accommodationhome">
            <h1>Work With Us</h1>
            <p>
              We are reaching out to a small number of schools to offer our
              platform, at no cost, in exchange of only their feedback and ideas.
              It is extremely important for us to continue to build a product that
              add value to schools and family and creates the best matchmaking for
              students.
            </p>
          </div>
          <a Link="https://calendly.com/homebor/demo?month=2021-08"  target="_blank" className="button__accommodationhome"     >
              Book a Free Demo
          </a>

          
        </div>

        
    </>
  );
};
