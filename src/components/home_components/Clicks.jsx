import Clicks_img from "/student_click.png";

const Clicks = () => {
    return (
        <>
            <div className="clicks">
            <div className="img_clicks">
                <img src={Clicks_img} alt="Imagen Click" />
            </div>
            <div className="container__texto--clicks">
                <h1>Perfect Matchmaking with just a few clicks</h1>
                <p>Our platform manages the selection process in a simple and intuitive way, integrating everyone.</p>
            </div>
        </div>
        </>
    )
}

export default Clicks;