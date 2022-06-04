import React, { useEffect, useState } from 'react';
import './reset.css';
import styles from './app.module.css';
import VideoList from './video_list/video_list';
import response from './response.json';
import searchResult from './search.json';
import SearchHeader from './search_header/search_header';

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

  const search = (query) => {
    // setVideos(searchResult.items);
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log('error', error));
  };

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <VideoList videos={videos} />
    </div>
  );
};

export default App;
