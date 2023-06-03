import './App.css';
import {Image} from './components/Image'
import {ContactBlock} from './components/ContactBlock'
import WorkExpInfo from './components/WorkExpInfo';
import userPhoto from './assets/photo1.jpg'
import ReposBlock from './components/ReposBlock';

function App() {
  return (
    <div id='general'>
      <div className = "wrapper">
        <Image userImage = {userPhoto} imageAlt = "User selfie" />
        <ContactBlock />
      </div>
      <div>
        <WorkExpInfo />
      </div>
      <div>
        <ReposBlock />
      </div>
        
    </div>
  );
}

export default App;