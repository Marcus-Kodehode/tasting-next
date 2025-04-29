"use client";

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import InfoCard from './InfoCard';
import { CARDS_DATA } from './data/cardsdata';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Carousel() {
  const swiperRef = useRef(null);

  return (
    <div className="w-full max-w-6xl mx-auto py-8 relative">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute left-[-48px] top-1/2 -translate-y-1/2 z-10 bg-white shadow-md hover:shadow-lg rounded-full w-10 h-10 flex items-center justify-center text-blue-500 hover:text-blue-700 transition duration-300"
        >
          ←
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute right-[-48px] top-1/2 -translate-y-1/2 z-10 bg-white shadow-md hover:shadow-lg rounded-full w-10 h-10 flex items-center justify-center text-blue-500 hover:text-blue-700 transition duration-300"
        >
          →
        </button>

      <Swiper
        modules={[Pagination, Autoplay]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        loop={true}
        speed={800}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        slidesPerView={3}
        spaceBetween={30}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {CARDS_DATA.map((card, index) => (
          <SwiperSlide key={index}>
            <InfoCard {...card} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
