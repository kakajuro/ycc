import { useState } from 'react';

import Spacer from 'react-spacer';

import GHIcon from '../components/ghIcon';

import './App.css';
import '../components/eltStyles.css';

function App() {

  const [link, setLink] = useState("");

  const onInputChange = (e) => {
    setLink(e.target.value);
    console.log(link);
  }

  return (
    <>
      <Spacer height="10px" />
      <div classname="ghLine">
        <GHIcon />
      </div>
      <Spacer height="100px" />
      <div className="main">
        <div classname="top-section">
          <h3 className="txt">Enter Link or ID:</h3>
        </div>
        <Spacer height="10px" />
        <div className="main-section">
          <input
            className="linkbox"
            placeholder="e.g. youtube.com/watch?v=YddwkMJG1Jo"
            onChange={onInputChange}
          />
        </div>
        <Spacer height="10px" />
      </div>
      <Spacer height="20px" />
      <div className="button-section">
        <button className="btn">MP3</button>
        <button className="btn">MP4</button>
      </div>
    </>
  );
}

export default App;
