"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const rooms = [
  "/images/Amanaia 2.jpg",
  "/images/Foto Kawasan Tenant.jpg",
  "/images/Kawasan (Ohsome Funifuni).jpg",
  "/images/Mcdonalds.jpeg",
  "/images/Starbucks.jpeg",
  "/images/tenant1.jpeg",
];

export default function TenantSlider() {
  return (
    <section className="relative w-full min-h-screen bg-black">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="w-full h-screen "
      >
        {rooms.map((room, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-screen">
              <Image src={room} alt="tenant" layout="fill" objectFit="cover" priority />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
