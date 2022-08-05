import Save_img from "/save.png";

const Save = () => {
    return (
        <>
            <div className="container__save">
                <div className="img_save">
                    <img src={Save_img} alt="Imagen Save" />
                </div>
                <div className="container__texto--save">
                    <h1>Save time and money</h1>
                    <p>Get a real time availability of your homestay families without making a single phone call. Once the booking is confirmed everyone gets notified automatically.</p>
                </div>
            </div>
        </>
    )
}

export default Save;