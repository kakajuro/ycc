import React, { useState, useEffect } from 'react';

import matchYoutubeUrl from '../utils/isYoutubeLink'

function ThumbnailPreviewer({ link }) {

  const [thumbnailLink, setThumbnailLink] = useState("");
  const [videoName, setVideoName] = useState("");
  const [parsedJson, setParsedJson] = useState();
  const [isRes, setIsRes] = useState(false);

  async function fetchThumbnail() {
    await fetch(`https://noembed.com/embed?url=${link}`)
    .then((res) => res.json())
    .then((res) => console.log(res))
    .then((jsonRes) => setParsedJson(jsonRes))
    .then(() => console.log(parsedJson))
  }

  useEffect(() => {
    fetchThumbnail();
  }, []);

  useEffect(() => {
    console.log(parsedJson.url);
    //setThumbnailLink(parsedJson.thumbnail_url);
    //setVideoName(parsedJson.title);
  }, [parsedJson]);

  return (
    "hi"
    // <div>
    //   <img 
    //     src={thumbnailLink}
    //     alt={videoName + " Thumbnail"}
    //   />
    // </div>
  )
}

export default ThumbnailPreviewer;