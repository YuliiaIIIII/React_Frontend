import './App.css';
import {Image} from './components/Image'
import {ContactBlock} from './components/ContactBlock'
import {WorkExp} from './components/WorkExp'

const userPhoto = './photo_YM.jpg'

function App() {
  return (
    <div id='app'>
      <div className = "wrapper-left">
        <div><Image  /></div>
        <div><ContactBlock /></div>
      </div>

      <div className = "wrapper-right"><WorkExp userImage = {userPhoto} imageAlt = "User selfie" /></div>
    </div>
  );
}

export default App;