import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const ImageSlider = ({ images, swiperRef, enlargeImage }) => {
    return (
        <Swiper
            className="portfolio-slider"
            ref={swiperRef}
            spaceBetween={30}
            slidesPerView={4}
            grabCursor={true}
            breakpoints={{
                1: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
            }}
        >
            {images.map((img, index) => (
                <SwiperSlide key={index}>
                    <img
                        src={img}
                        alt="project-pic"
                        onClick={() => enlargeImage(img)} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default ImageSlider;
