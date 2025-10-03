"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const rooms = [
  "/images/exterior1.jpeg",
  "/images/exterior2.jpeg",
  "/images/exterior3.jpeg",
  "/images/exterior4.jpeg",
  "/images/exterior5.jpeg",
  "/images/exterior6.jpeg",
];

export default function RomaSlider() {
  return (
    <section className="relative w-full min-h-screen bg-black">
      {/* Minimal Top Bar */}
      <div className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-12 py-8">
        <div className="text-white text-sm tracking-[0.3em] font-light">
          ROMA RESIDENCE
        </div>
        <div className="text-white/40 text-xs font-light tracking-wider">
          JAKARTA
        </div>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        speed={1200}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="w-full h-screen swiper-minimal"
      >
        {rooms.map((room, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-screen">
              <Image
                src={room}
                alt={`Roma exterior ${index + 1}`}
                layout="fill"
                objectFit="cover"
                priority={index < 2}
                className="scale-105"
              />

              {/* Subtle Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>

              {/* Minimal Slide Counter */}
              <div className="absolute bottom-12 left-12 text-white/50 text-xs tracking-widest font-light z-20">
                {String(index + 1).padStart(2, "0")} —{" "}
                {String(rooms.length).padStart(2, "0")}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Minimal Bottom Right Text */}
      <div className="absolute bottom-12 right-12 z-30 text-right">
        <div className="text-white/60 text-xs tracking-widest font-light mb-2">
          DISCOVER
        </div>
        <div className="w-12 h-[1px] bg-white/30 ml-auto"></div>
      </div>

      <style jsx global>{`
        .swiper-minimal .swiper-button-next,
        .swiper-minimal .swiper-button-prev {
          color: white;
          opacity: 0.4;
          transition: opacity 0.3s ease;
        }

        .swiper-minimal .swiper-button-next:hover,
        .swiper-minimal .swiper-button-prev:hover {
          opacity: 1;
        }

        .swiper-minimal .swiper-button-next::after,
        .swiper-minimal .swiper-button-prev::after {
          font-size: 20px;
          font-weight: 100;
        }

        .swiper-minimal .swiper-pagination {
          bottom: 50px;
        }

        .swiper-minimal .swiper-pagination-bullet {
          background: white;
          opacity: 0.3;
          width: 8px;
          height: 8px;
          margin: 0 6px;
          transition: all 0.4s ease;
        }

        .swiper-minimal .swiper-pagination-bullet-active {
          opacity: 1;
          width: 32px;
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
}
