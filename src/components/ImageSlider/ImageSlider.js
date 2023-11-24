import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const SwiperComponent = ({ images, swiperRef, enlargeImage }) => {
    return (
        <Swiper
            ref={swiperRef}
            spaceBetween={30}
            slidesPerView={4}
            grabCursor={true}
            className="portfolio-slider"
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

export default SwiperComponent;
