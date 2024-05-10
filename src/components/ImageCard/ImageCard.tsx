import { MouseEventHandler } from "react";
import { Images } from "../../types";

type ImageCardProps = {
  image: Images;
  onClick:(MouseEventHandler<HTMLImageElement>);
  
}

const ImageCard = ({ image, onClick }:ImageCardProps) => {
  // console.log(image.id);
  return (
    <div>
      <img
        onClick={onClick}
        id={image.id}
        src={image.urls.small}
        alt="image"
        width={280}
        height={200}
      />
    </div>
  );
};

export default ImageCard;