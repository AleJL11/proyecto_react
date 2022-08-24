
import Homestay from "/iHomestay_logo.png";
import download from "/download.png";

const Fpage = () => {

    return (
<>
       <div className="ihomestay">
          <img className="img_info4" src={Homestay} alt="imagen4" />
          <p className="text_info4">
            Being with iHomestay gives the opportunity to Inspires new language
            possibilities, learn more about their world and learn different
            culture as well as share your own cultures with international
            students.
          </p>
        </div>

        <hr className="hr" />

        <div className="ihomestay1">
          <img className="img_info5" src={download} alt="imagen5" />

          <p className="text_info5">
            Homebor app for hosts is now available. Download it now!!
          </p>
        </div>
</>
    );
};

export default Fpage;