import './App.css';
import {Image} from './components/Image'
import {ContactBlock} from './components/ContactBlock'
import {WorkExp} from './components/WorkExp'
import userPhoto from './photo1.jpg'

function App() {
  return (
    <div id='general'>
      <div className = "wrapper">
        <Image userImage = {userPhoto} imageAlt = "User selfie" />
        <ContactBlock />
      </div>
        <WorkExp />
    </div>
  );
}

export default App;