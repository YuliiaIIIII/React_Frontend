import { Counter } from "./Counter";

export function ContactBlock() {

    return (
      <div id="contacts">
        <div className="container">
          <div className="profile-name fw600">
            Yuliia <span className="surname fw600">Malykhina</span>  
          </div>
          <div>
            <h3 className="">Contacts</h3>
          </div>
          <div className="allContacts">
            <div className="contactInfo">
              <h4>Address</h4> 
              Kyiv, Ukraine 
            </div>
            <div className="contactInfo">
              <h4>Phone</h4>
              +38 067 545 35 47 
            </div>
            <div className="contactInfo">
              <h4>E-mail</h4> 
              <div className="blueText">yulyamashka@gmail.com</div> 
            </div>
            <div className="contactInfo">
              <h4>LinkedIn</h4> 
              <a href="https://www.linkedin.com/in/yulia-malykhina-80b202166/">https://www.linkedin.com/in/Malykhina</a>
            </div>
          </div>
        </div>
        <div className="counter fw600">
          <div>
            Send CV
          </div>
          <div>
            <Counter />
          </div>
        </div>
    </div>
  );
}