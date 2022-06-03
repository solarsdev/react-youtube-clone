import React, { useEffect, useState } from 'react';
import './app.css';
import './reset.css';
import VideoList from './video_list/video_list';
import response from './response.json';

const App = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setVideos(response.items);
    // console.log('useEffect');
    // const requestOptions = {
    //   method: 'GET',
    //   redirect: 'follow',
    // };

    // fetch(
    //   `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&regionCode=JP&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
    //   requestOptions
    // )
    //   .then((response) => response.json())
    //   .then((result) => setVideos(result.items))
    //   .catch((error) => console.log('error', error));
  }, []);

  return <VideoList videos={videos} />;
};

export default App;
