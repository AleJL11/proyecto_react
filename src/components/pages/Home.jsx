import Banner from "../home_components/Banner";
import Clicks_img from "/student_click.png";
import Homestay_img from "/homestay.png";
import Save_img from "/save.png";
import Accommodation_img from "/accommodation_home.png";
import Homestayhome_img from "/homestay_home.png";
import Student_img from "/student_home.png";
import Download_img from "/download.png";
import Accommodation_home_img from "/accommodation_home1.png";
import Image from 'react-bootstrap/Image'

export const Home = () => {
  return (
    <>
      <Banner />
      <br/>

      <section class="info0">
      <section class="info1">
          <div className='container'>
            <div className="row">
              <div className="col">
                  <div class="px-4 py-5 my-5 imgcaja" >
                <img src={Clicks_img} alt="" class="col-sm-3 img1"/>
                      <div class="col-xs-6 Fright textocaja">
                      <h1 class="display-6 fw-bold texto1">Perfect Matchmaking with just a few clicks</h1>
                        <p class="lead mb-3 text-center texto2">Our platform manages the selection process in a simple and intuitive way, integrating everyone.</p>
                      </div>
                  </div>
              </div>
            </div>
          </div>
      </section>
      </section>

      <section class="info0">
      <section class="info2">
          <div className='container'>
            <div className="row">
              <div className="col">
                  <div class="px-4 py-5 my-5 imgcaja" >
                <img src={Homestay_img} alt="" class="col-sm-3 img2"/>
                      <div class="col-xs-6 Fleft textocaja">
                      <h1 class="display-6 fw-bold texto1">Happy Families, Happy Students</h1>
                        <p class="lead mb-3 text-center texto2">Homestay families easily set up their availability and confirm their bookings in our intuitive app.</p>
                      </div>
                  </div>
              </div>
            </div>
          </div>
      </section>
      </section>

      <section class="info0">
      <section class="info1">
          <div className='container'>
            <div className="row">
              <div className="col">
                  <div class="px-4 py-5 my-5 imgcaja" >
                <img src={Save_img} alt="" class="col-sm-3 img1"/>
                      <div class="col-xs-6 Fright textocaja">
                      <h1 class="display-6 fw-bold texto1">Save time and money</h1>
                        <p class="lead mb-3 text-center texto2">Get a real time availability of your homestay families without making a single phone call. Once the booking is confirmed everyone gets notified automatically.</p>
                      </div>
                  </div>
              </div>
            </div>
          </div>
      </section>
      </section>

<br/>

<section class="info0">
 <section class="info1">
    <div className='container'>
      <div className="row">
        <div className="col">
            <div class="px-4 py-5 my-5 imgcaja" >
          <img src={Clicks_img} alt="" class="col-sm-3 img1"/>
                <div class="col-xs-6 Fright textocaja">
                <h1 class="display-6 fw-bold texto1">Perfect Matchmaking with just a few clicks</h1>
                  <p class="lead mb-3 text-center texto2">Our platform manages the selection process in a simple and intuitive way, integrating everyone.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
 </section>
</section>

<section class="info0">
 <section class="info2">
    <div className='container'>
      <div className="row">
        <div className="col">
            <div class="px-4 py-5 my-5 imgcaja" >
          <img src={Homestay_img} alt="" class="col-sm-3 img2"/>
                <div class="col-xs-6 Fleft textocaja">
                <h1 class="display-6 fw-bold texto1">Happy Families, Happy Students</h1>
                  <p class="lead mb-3 text-center texto2">Homestay families easily set up their availability and confirm their bookings in our intuitive app.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
 </section>
</section>

<section class="info0">
 <section class="info1">
    <div className='container'>
      <div className="row">
        <div className="col">
            <div class="px-4 py-5 my-5 imgcaja" >
          <img src={Save_img} alt="" class="col-sm-3 img1"/>
                <div class="col-xs-6 Fright textocaja">
                <h1 class="display-6 fw-bold texto1">Save time and money</h1>
                  <p class="lead mb-3 text-center texto2">Get a real time availability of your homestay families without making a single phone call. Once the booking is confirmed everyone gets notified automatically.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
 </section>
</section>   
    </>
  );
};