import React from 'react';
import styles from './video_item.module.css';

const VideoItem = ({
  video,
  video: {
    snippet: {
      title,
      channelTitle: channel,
      thumbnails: {
        medium: { url },
      },
    },
  },
  onVideoClick,
}) => (
  <li className={styles.container} onClick={() => onVideoClick(video)}>
    <div className={styles.video}>
      <img className={styles.thumbnail} src={url} alt='video thumbnail' />
      <div className={styles.metadata}>
        <p className={styles.title}>{title}</p>
        <p className={styles.channel}>{channel}</p>
      </div>
    </div>
  </li>
);

export default VideoItem;
