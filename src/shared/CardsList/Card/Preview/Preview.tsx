import React from 'react';
import styles from './preview.css';

interface IPreviewProps {
  imgPost?: string;
}

export function Preview({ imgPost }: IPreviewProps) {
  const srcImg = imgPost
    ?
      /\.(png|jpg|jpeg|gif)$/i.test(imgPost)
      ?
        imgPost
      :
        "https://b.thumbs.redditmedia.com/RdyIGEa9Ghu94wr5v3oQQ_zvE1C1cntehzZJChVFkcw.png"

    : "https://b.thumbs.redditmedia.com/RdyIGEa9Ghu94wr5v3oQQ_zvE1C1cntehzZJChVFkcw.png"

  return (
    <div className={styles.preview}>
      <img className={styles.previewImg} src={srcImg} />
    </div>
  );
}
