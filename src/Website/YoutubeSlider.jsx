import React, { useState } from 'react';
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./customSwiper.css";

const videoIds = [
    "dQw4w9WgXcQ",
    "3tmd-ClpJxA",
    "kJQP7kiw5Fk",
    "hY7m5jjJ9mM",
    "eVTXPUF4Oz4"
];

const YoutubeSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <div className="w-full md:max-w-7xl mx-auto px-10 md:px-20">
            <h1 className="text-center text-lg md:text-6xl font-semibold py-4">
                KOLs Talking <span className="text-bg_color1">About TROVIX</span>
            </h1>
            <h1 className="text-center text-sm md:text-xl font-semibold">Over 500,000 views on YouTube</h1>

            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={30}
                slidesPerView={3}
                centeredSlides
                loop
                pagination={{
                    clickable: true,
                    dynamicBullets: false, // SHOW ALL DOTS
                }}
                navigation
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                className="h-auto "
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
            >
                {videoIds.map((id, idx) => (
                    <SwiperSlide key={idx}>
                        <div
                            className={`rounded-3xl my-10 overflow-hidden transition-transform duration-300 ${idx === activeIndex ? "scale-110 z-10" : "scale-90 opacity-80 blur-sm"
                                }`}
                        >
                            <iframe
                                width="100%"
                                height="200"
                                src={`https://www.youtube.com/embed/${id}`}
                                title={`YouTube video ${idx + 1}`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default YoutubeSlider;
