import Accommodation_img from "/accommodation_home.png";
import Homestayhome_img from "/homestay_home.png";
import Student_img from "/student_home.png";

const Service = () => {
    return (
    <>
        <div className="container__service">
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
    </>
    );
};

export default Service;
