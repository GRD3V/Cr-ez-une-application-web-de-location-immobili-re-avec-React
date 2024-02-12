import { useState } from "react";
import "../styles/components/carousel.scss";
import arrowLeftIcon from "../assets/img/icons/arrow-left.svg";
import arrowRightIcon from "../assets/img/icons/arrow-right.svg";
export default function Carousel(props: { readonly imageList: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function nextImage() {
    setCurrentIndex((currentIndex + 1) % props.imageList.length);
  }

  function prevImage() {
    setCurrentIndex(
      (currentIndex - 1 + props.imageList.length) % props.imageList.length
    );
  }

  return (
    <div className="carousel">
      <div className="carousel-content">
        {props.imageList.length > 1 && (
          <button onClick={prevImage}>
            <img src={arrowLeftIcon} alt="" />
          </button>
        )}
        <img src={props.imageList[currentIndex]} alt="" />
        {props.imageList.length > 1 && (
          <p>
            {currentIndex + 1}/{props.imageList.length}
          </p>
        )}
        {props.imageList.length > 1 && (
          <button onClick={nextImage}>
            <img src={arrowRightIcon} alt="" />
          </button>
        )}
      </div>
    </div>
  );
}
