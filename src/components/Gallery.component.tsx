import axios from 'axios';
import React, { ReactElement, useRef, useState } from 'react';
import styles from './Gallery.module.css';

interface IResponce {
  collections: number;
  comments: number;
  downloads: number;
  id: number;
  imageHeight: number;
  imageSize: number;
  imageWidth: number;
  largeImageURL: string;
  likes: number;
  pageURL: string;
  previewHeight: number;
  previewURL: string;
  previewWidth: number;
  tags: string;
  type: string;
  user: string;
  userImageURL: string;
  user_id: number;
  views: number;
  webformatHeight: number;
  webformatURL: string;
  webformatWidth: number;
}

const Gallery = (): ReactElement => {
  const [image, setImages] = useState<Array<IResponce>>([]);
  const [largeImage, setLargeImage] = useState<string>('');

  const ref = useRef<HTMLInputElement>(null);

  const getImages = ({
    value,
    page = 1,
  }: {
    value: string | undefined;
    page?: number;
  }): void => {
    axios
      .get(
        `https://pixabay.com/api/?key=10728786-22fcb3fafa93e4468a41cb577&q=${value.toLowerCase()}&image_type=photo?page=${page}&per_page=6`
      )
      .then((response) => {
        setImages(response.data?.hits);
      });
  };

  const openLargeImg = (imgUrl: string): void => {
    setLargeImage(imgUrl);
  };

  const close = (): void => {
    setLargeImage('');
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles['search-part']}>
        <input ref={ref}></input>
        <button
          onClick={(): void => {
            getImages({ value: ref?.current?.value });
          }}
        >
          Search
        </button>
      </div>
      <div className={styles['image-part']}>
        {image?.map((ingleImage) => {
          return (
            <img
              onClick={(): void => openLargeImg(ingleImage.largeImageURL)}
              src={ingleImage.previewURL}
              key={ingleImage.id}
            ></img>
          );
        })}
      </div>
      <div className={styles.pagination}></div>
      {largeImage && (
        <div onClick={close} className={styles.large}>
          <img src={largeImage} alt='' />
        </div>
      )}
    </div>
  );
};

export default Gallery;
