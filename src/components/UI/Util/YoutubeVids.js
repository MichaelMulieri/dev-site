import styles from "./YoutubeVids.module.css";

const YoutubeVids = () => {
  return (
    <div className={styles.videoWrapper}>
      <div className={styles.content}>
        <iframe
          width="800"
          height="450"
          src={`https://youtube.com/embed/jQAZmIbS71s`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        ></iframe>
        <iframe
          width="800"
          height="450"
          src={`https://youtube.com/embed/_YO4OZdwweE`}
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        ></iframe>
        <iframe
          width="800"
          height="450"
          src={`https://youtube.com/embed/S_dW5MxBA60`}
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        ></iframe>
      </div>
    </div>
  );
};

export default YoutubeVids;
