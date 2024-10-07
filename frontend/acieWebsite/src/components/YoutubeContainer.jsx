import React from 'react';

const YouTubeContainer = () => {
  return (
    <div className="youtube-container" style={{ padding: '20px', backgroundColor: '#f5f8fa', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ textAlign: 'center' }}>Watch My YouTube Videos</h2>

      <div className="youtube-videos" style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <iframe
          width="356"
          height="634"
          src="https://www.youtube.com/embed/q_P0OnB4mIY"
          title="Shampoo reveal gone wrong #shorts"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

        <iframe
          width="356"
          height="634"
          src="https://www.youtube.com/embed/j_KYQz2r1cU"
          title="Normal to Black People 🧐 Happy #blackhistorymonth #comedy #tiktok #aciebabyy"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

        <iframe
          width="356"
          height="634"
          src="https://www.youtube.com/embed/8uc-2OG4KIg"
          title="Who are your Mt Rushmore HipHop Goats 🐐#blackhistorymonth #nickiminaj #hiphop #aciebabyy"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default YouTubeContainer;
