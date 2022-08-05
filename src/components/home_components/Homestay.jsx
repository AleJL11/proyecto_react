import Homestay_img from "/homestay.png";

const Homestay = () => {
    return (
        <>
            <div className="container__homestay">
            <div className="container__texto--homestay">
                <h1>Happy Families, Happy Students</h1>
                <p>Homestay families easily set up their availability and confirm their bookings in our intuitive app.</p>
            </div>
                <div className="img_homestay">
                <img src={Homestay_img} alt="Imagen Homestay" />
            </div>
        </div>
        </>
    )
}

export default Homestay;