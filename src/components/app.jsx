import React, { useEffect, useState } from 'react';
import './reset.css';
import styles from './app.module.css';
import VideoList from './video_list/video_list';
import response from './response.json';
import searchResult from './search.json';
import SearchHeader from './search_header/search_header';
import VideoDetail from './video_detail/video_detail';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

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

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <section className={styles.content}>
        <div className={styles.detail}>
          {selectedVideo && <VideoDetail video={selectedVideo} />}
        </div>
        <div className={styles.list}>
          <VideoList videos={videos} onVideoClick={selectVideo} />
        </div>
      </section>
    </div>
  );
};

export default App;
