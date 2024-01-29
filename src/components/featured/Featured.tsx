import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

interface FeaturedProps {
  title: string;
  imageSrc: string;
  postTitle: string;
  postDesc: string;
}
const Featured: React.FC<FeaturedProps> = ({ title, imageSrc, postTitle, postDesc }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>{title}</b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src={imageSrc} alt="" fill className={styles.image} sizes="50vw" />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>{postTitle}</h1>
          <p className={styles.postDesc}>
            {postDesc}
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
