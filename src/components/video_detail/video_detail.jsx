import styles from './video_detail.module.css';
import React from 'react';

const VideoDetail = ({
  video: {
    snippet: { title },
  },
}) => <h1>{title}</h1>;

export default VideoDetail;
