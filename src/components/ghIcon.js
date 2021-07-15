import React from 'react';
import { AiOutlineGithub } from 'react-icons/ai';

import './ghIcon.css';

export default function GHIcon() {

  const openRepo = () => {
    // window.open(URL, '_blank');
    console.log("Open Repo Here");
  }

  return (
    <AiOutlineGithub className="icon" size="45" onClick={openRepo}/>
  );
};