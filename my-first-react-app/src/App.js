import './App.css';
import {Image} from './components/Image'
import {ContactBlock} from './components/ContactBlock'
import WorkExpInfo from './components/WorkExpInfo';
import userPhoto from './photo1.jpg'

function App() {
  return (
    <div id='general'>
      <div className = "wrapper">
        <Image userImage = {userPhoto} imageAlt = "User selfie" />
        <ContactBlock />
      </div>
        <WorkExpInfo />
    </div>
  );
}

export default App;