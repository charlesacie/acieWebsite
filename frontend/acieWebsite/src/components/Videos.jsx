import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Videos.css';

const YOUTUBE_API_KEY = 'AIzaSyC-u9FslIzJaJ5_1adEPWwpg0vgTijGR10';

const YouTubeSearch = () => {
  const [videos, setVideos] = useState([]);
  const [query, setQuery] = useState('aciebabyy');

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search`,
          {
            params: {
              part: 'snippet',
              maxResults: 10,
              q: query,
              key: YOUTUBE_API_KEY,
            },
          }
        );
        setVideos(response.data.items);
      } catch (error) {
        console.error('Error fetching YouTube videos:', error);
      }
    };

    fetchVideos();
  }, [query]);

  return (
    <div className="videos-page">
      <h2>Search YouTube Videos</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for videos"
      />
      <div>
        {videos.map((video) => (
          <div key={video.id.videoId} className="video-container">
            <h3>{video.snippet.title}</h3>
            <p>{video.snippet.description}</p>
            <iframe
              width="100%"
              height="315"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              title={video.snippet.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouTubeSearch;