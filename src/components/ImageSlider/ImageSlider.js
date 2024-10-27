import { useRef, useState } from "react";
import { useModal } from "../../customHooks/useModal";
import GalleryModal from "../../components/GalleryModal/GalleryModal";
import "./ImageSlider.scss";

const ImageSlider = ({ images }) => {
  const boxRef = useRef(null);
  const degrees = useRef(0);
  const [startX, setStartX] = useState(null);
  const { isOpen, imageSrc, openModal, closeModal } = useModal();

  const rotationStep = 360 / images.length;

  const rotateBox = (direction) => {
    if (boxRef.current) {
      degrees.current += direction === "prev" ? rotationStep : -rotationStep;
      boxRef.current.style.transform = `perspective(1000px) rotateY(${degrees.current}deg)`;
    }
  };

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    setStartX(touch.clientX);
  };

  const handleTouchMove = (e) => {
    if (!startX) return;

    const touch = e.touches[0];
    const diffX = touch.clientX - startX;
    const sensitivity = 50;

    if (diffX > sensitivity) {
      rotateBox("prev");
      setStartX(null);
    } else if (diffX < -sensitivity) {
      rotateBox("next");
      setStartX(null);
    }
  };

  const handleTouchEnd = () => {
    setStartX(null);
  };

  return (
    <div className="client-card-section">
      <div
        className="carousel-container"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="clients-container"
          style={{ "--total": images.length }}
          ref={boxRef}
        >
          {images.map((userData, index) => (
            <span key={index} style={{ "--i": index + 1 }}>
              <img
                className="carousel-image"
                src={userData}
                alt={`${index + 1}`}
                onClick={() => openModal(userData)}
              />
              <div className="image-name">{userData.name}</div>
            </span>
          ))}
        </div>
        <div className="buttons">
          <div className="btn prev" onClick={() => rotateBox("prev")}></div>
          <div className="btn next" onClick={() => rotateBox("next")}></div>
        </div>
      </div>
      <GalleryModal isOpen={isOpen} onClose={closeModal} imageSrc={imageSrc} />
    </div>
  );
};

export default ImageSlider;
