import VideoYoutube from "@/components/VideoYoutube";
import { Suspense } from "react";
import styles from "../../styles/ListOfVideos.module.css";

const ListOfVideos = (props) => {
  console.log(props.videoData);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className={styles.title_container}>
        <h4>Here you will find my favorite playlist from this channel!!!</h4>
      </div>
      <section className={styles.container}>
        {props.videoData.map((video) => (
          <div className={styles.video_card} key={video.snippet.title}>
            <h4 className={styles.video_title}>{video.snippet.title}</h4>
            <VideoYoutube
              url={video.snippet.thumbnails.medium.url}
              width={video.snippet.thumbnails.medium.width}
              height={video.snippet.thumbnails.medium.height}
              videoId={video.snippet.resourceId.videoId}
            />
          </div>
        ))}
      </section>
    </Suspense>
  );
};

export default ListOfVideos;
