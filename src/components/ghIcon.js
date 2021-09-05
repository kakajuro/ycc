import React from 'react';

import { AiOutlineGithub } from 'react-icons/ai';
import './styles/ghIcon.css';

export default function GHIcon() {

  const openRepo = () => {
    console.log("open repo here");
  }

  return (
    <AiOutlineGithub className="icon" size="45" onClick={openRepo}/>
  );
};