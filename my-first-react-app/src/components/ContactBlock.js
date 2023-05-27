import { Counter } from "./Counter";

export function ContactBlock() {
    return (
      <div id="contacts">
        <div class="container">
          <div class="profile-name fw600">
            Yuliia <span class="surname fw600">Malykhina</span>  
          </div>
          <div>
            <h3 class="">Contacts</h3>
          </div>
          <div class="allContacts">
            <div class="contactInfo">
              <h4>Address</h4> 
              Kyiv, Ukraine 
            </div>
            <div class="contactInfo">
              <h4>Phone</h4>
              +38 067 545 35 47 
            </div>
            <div class="contactInfo">
              <h4>E-mail</h4> 
              <div class="blueText">yulyamashka@gmail.com</div> 
            </div>
            <div class="contactInfo">
              <h4>LinkedIn</h4> 
              <a href="https://www.linkedin.com/in/yulia-malykhina-80b202166/">https://www.linkedin.com/in/Malykhina</a>
            </div>
          </div>
        </div>
        <div class="counter fw600">
          <div>
            Кількість надісланих резюме
          </div>
          <div>
            <Counter />
          </div>
        </div>
    </div>
  
    );
  }