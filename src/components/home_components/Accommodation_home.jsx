import Accommodation_home_img from "/accommodation_home1.png";

const Accommodation_home = () => {
  return (
    <>
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
        <a
          className="button__accommodationhome"
          Link="https://calendly.com/homebor/demo?month=2021-08"
        >
            Book a Free Demo
        </a>
      </div>
    </>
  );
};

export default Accommodation_home;
