import React from "react";
import Image from "next/image";
import Link from "next/link";

const VideoYoutube = ({ url, width, height, videoId }) => {
  return (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      href={`https://www.youtube.com/watch?v=${videoId}  target="_blank" rel="noopener noreferrer"`}
    >
      <Image
        src={url}
        width={300}
        height={160}
        alt="youtube_miniatures"
        priority
      />
    </Link>
  );
};

export default VideoYoutube;
