import React from 'react';

import { AiOutlineGithub } from 'react-icons/ai';
import './styles/ghIcon.css';

const shell = window.require('electron').shell

export default function GHIcon() {

  const openRepo = () => {
    shell.openExternal("https://github.com/swishyy/ycc")
  }

  return (
    <AiOutlineGithub className="icon" size="45" onClick={openRepo}/>
  );
};
