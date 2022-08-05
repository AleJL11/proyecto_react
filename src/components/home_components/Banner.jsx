import Banner_img from "/banner_img.png";

const Banner = () => {
    return (
        <>
            <img src={Banner_img} alt="Imagen Banner" className="banner_img" />
            <div className="container__banner">
                <h1 className="titulo_banner">Simplify Your Homestay process</h1>
                <p className="texto_banner">Homebor is a student accommodation platform that efficiently handles your entire business process, maximizing the experience for your team, your homestay families and your students</p>
                <button className="button__banner">
                    <h3 className="texto_button">Book a Free Demo</h3>
                </button>
            </div>
        </>
    )
}

export default Banner;