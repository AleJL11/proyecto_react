import "../styles/usHelp.css";

export const usHelp = () => {
 return (
     <> 
       <div className="ColorH">
       <div className="cardContactUsHelp">
       <h1 className="cajaRecover">Recover your password</h1>
       <form action="#" id="form__recover" method="POST" className="recover">
<div className="input__mail_r">
<div className="formularioHelp">
<label className="email1" for="email_r"> Enter Your Mail</label>
<img className="iconH" src="/icons/mail.svg" alt="icono de usuario"/>
<div className="emailEscrito">
<input type="text" name="email" className="email2" id="email_r" placeholder="Write your Email"/>
</div>

</div>
</div>
<div className="div__send" id="div__send__recovery">
<button type="submit" name="submit" className="btn__send" id="btn__send_recover"> Send Email </button>
</div>
<p className="text__warning" id="message__sent"></p>
<p className="text__warning" id="message__error"></p>
        </form>
        </div>
        </div>
     </>
 );
};

