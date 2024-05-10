import { Images } from "../../types";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
type ImageGalleryProps = {
  images: Images[];
  onClick: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ImageGallery = ({ images, onClick }:ImageGalleryProps) => {
  return (
    <ul className={css.container}>
      {Array.isArray(images) &&
        images.map((image) => {
          return (
            <li key={image.id}>
              <ImageCard onClick={onClick} image={image} />
            </li>
          );
        })}
    </ul>
  );
};

export default ImageGallery;