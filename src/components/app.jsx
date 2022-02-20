import React, { useState } from 'react';
import Header from './header';
import Videos from './videos';
import './reset.css';
import './app.css';

const App = () => {
  const [videos, setVideos] = useState();

  const fetchData = async () => {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
    );
    const json = await response.json();
    setVideos(json);
  };
  fetchData();

  return (
    <>
      <Header />
      <Videos videos={videos} />
    </>
  );
};

export default App;
