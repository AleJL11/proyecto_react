import Download_img from "/download.png";

const Download = () => {
  return (
    <>
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
    </>
  )
}

export default Download;
