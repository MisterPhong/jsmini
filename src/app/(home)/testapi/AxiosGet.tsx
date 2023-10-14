import React from "react";

export default function YouTubeEmbed() {
  return (
    <div>
      <iframe
        width="800"
        height="500"
        src="https://www.youtube.com/embed/xDTfL8zJ1nI"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
