import styles from './video_detail.module.css';
import React from 'react';

const VideoDetail = ({
  video: {
    id,
    snippet: { title, channelTitle, description },
  },
}) => (
  <section className={styles.detail}>
    <iframe
      className={styles.video}
      type='text/html'
      width='100%'
      height='500px'
      src={`https://www.youtube.com/embed/${id}`}
      frameBorder='0'
      allowFullScreen
    ></iframe>
    <h2>{title}</h2>
    <h3>{channelTitle}</h3>
    <pre className={styles.description}>{description}</pre>
  </section>
);

export default VideoDetail;
