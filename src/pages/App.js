//https://www.youtube.com/watch?v=6wLBE3b_3jU&t=5304s

import { useState, useEffect } from 'react';
import Spacer from 'react-spacer';

import GHIcon from '../components/ghIcon';
import ThumbnailPreviewer from '../components/thumbnailPreviewer';

import matchYoutubeUrl from '../utils/isYoutubeLink'

import './App.css';
import '../components/styles/eltStyles.css';

const { ipcRenderer } = window.require('electron');
const youthumb = require('youtube-thumbnails');

function App() {

  const [link, setLink] = useState("");
  const [isText, setIsText] = useState(false);
  const [finalLink, setFinalLink] = useState("");
  const [videoExists, setVideoExists] = useState(false);
  const [videoRes, setVideoRes] = useState();

  const [DLPath, setDLPath] = useState("");

  const [MP3Selected, setMP3Selected] = useState(true);
  const [MP4Selected, setMP4Selected] = useState(false);

  const [highSelected, setHighSelected] = useState(true);
  const [lowSelected, setLowSelected] = useState(false);

  const getDLPath = () => ipcRenderer.send('getDLPath');
  ipcRenderer.on('returnDLPath', (_, arg) => {
    setDLPath(arg);
  });

  const changeFormatSelect = (format) => {
    if (format === 'mp3') {
      setMP3Selected(true);
      setMP4Selected(false);
    } else {
      setMP3Selected(false);
      setMP4Selected(true);
    }
  }

  const changeQualtySelect = (format) => {
    if (format === 'high') {
      setHighSelected(true);
      setLowSelected(false);
    } else {
      setHighSelected(false);
      setLowSelected(true);
    }
  }

  const onInputChange = (e) => {
    setLink(e.target.value);

    if (e.target.value.length > 0) {
      setIsText(true);

      var videoFound = matchYoutubeUrl(e.target.value);

      if (videoFound) {
        setVideoExists(true);
        setFinalLink(e.target.value);
        
      } else {
        setVideoExists(false);
      }
    } else {
      setIsText(false);
    }
  }

  const onConvertClicked = () => {
    var videoFound = matchYoutubeUrl(link);

    if (videoFound) {
      setVideoExists(true);
      setFinalLink(link);
      
    } else {
      setVideoExists(false);
    }
  }

  useEffect(() => {
    setFinalLink("");
    getDLPath();
  }, []);

  return (
    <>
      <Spacer height="5px" />
      <div className="ghLine">
        <GHIcon />
      </div>
      <Spacer height="55px" />
      <div className="main">
        <div className="top-section">
          <h1 className="header unselectable">Enter Video Link:</h1>
        </div>
        <Spacer height="10px" />
        <div className="main-section">
          <input
            className="linkbox"
            placeholder="e.g. youtube.com/watch?v=YddwkMJG1Jo"
            onChange={onInputChange}
          />
          <button className="btn-convert" onClick={onConvertClicked}>Convert</button>
        </div>
        <Spacer height="10px" />
      </div>
      <Spacer height="10px" />
      {/* {videoExists ? <ThumbnailPreviewer link={finalLink} /> : <div/>} */}
      {isText ? <p>sajdkasd</p> : <div/>}
      {videoExists && isText ? <h1>YESS</h1> : <div></div>}
      <Spacer height="20px" />
      <div className="options-section">
        <div className="options-grid">
          <div className="button-section">
            <h1 className="sub-header unselectable">Format:</h1>
            {MP3Selected ? 
              <button className="btn-selected" onClick={() => changeFormatSelect('mp3')}>MP3</button> : 
              <button className="btn" onClick={() => changeFormatSelect('mp3')}>MP3</button>
            }
            {MP4Selected ? 
              <button className="btn-selected" onClick={() => changeFormatSelect('mp4')}>MP4</button> : 
              <button className="btn" onClick={() => changeFormatSelect('mp4')}>MP4</button>
            }
          </div>
          <div className="button-section">
            <h1 className="sub-header unselectable">Quality:</h1>
            {highSelected ? 
              <button className="btn-selected" onClick={() => changeQualtySelect('high')}>High</button> : 
              <button className="btn" onClick={() => changeQualtySelect('high')}>High</button>
            }
            {lowSelected ? 
              <button className="btn-selected" onClick={() => changeQualtySelect('low')}>Low</button> : 
              <button className="btn" onClick={() => changeQualtySelect('low')}>Low</button>
            }
          </div>
        </div>
      </div>
      <Spacer height="20px" />
      <div className="bottom-buttons">
        <button className="btn">Open In Folder</button>
        <Spacer height="30px" />
      </div>
    </>
  );
}

export default App;