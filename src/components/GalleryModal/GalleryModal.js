import "./GalleryModal.scss";

const GalleryModal = ({ isOpen, onClose, imageSrc }) => {
  if (!isOpen || !imageSrc) {
    return null;
  }

  return (
    <div className="gallery-modal-overlay" onClick={onClose}>
      <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
        <img
          src={imageSrc}
          alt="Full size view"
          style={{ objectFit: "contain" }}
        />
        <button className="gallery-modal-close" onClick={onClose}>
          <span>&times;</span>
        </button>
      </div>
    </div>
  );
};

export default GalleryModal;
