import React, { FC } from "react";
import { ImageCardProps } from "../../types";
import css from "./ImageCard.module.css";

const ImageCard: FC<ImageCardProps> = ({
  image,
  setImgData,
  setCurrentImage,
  handleOpenModal,
}) => {
  const handle = (e: React.MouseEvent<HTMLImageElement>) => {
    const imgData = {
      src: image.urls.full,
      alt: image.alternative_slugs.en,
      likes: image.likes,
      location: image.user.location || "unknow",
      desc: image.alt_description,
    };

    setImgData(imgData);
    setCurrentImage(e.target as HTMLImageElement);
    handleOpenModal(true);
  };

  return (
    <div className={css.container}>
      <img
        src={image.urls.small}
        alt={image.alternative_slugs.en}
        className={css.img}
        onClick={handle}
      />
    </div>
  );
};

export default ImageCard;
