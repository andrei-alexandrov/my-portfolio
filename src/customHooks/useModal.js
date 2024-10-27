import { useState } from "react";

export const useModal = ()  => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState("");

  const openModal = (image) => {
    setImageSrc(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setImageSrc("");
  };

  return {
    isOpen,
    imageSrc,
    openModal,
    closeModal,
  };
};