"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const rooms = [
  {
    title: "LIVING ROOM",
    desc: "Create unforgettable moments in a living room designed with perfect lighting and unmatched comfort.",
    img: "/images/living-room.png",
  },
  {
    title: "DINING ROOM",
    desc: "Enjoy delightful family meals in a bright, spacious dining room crafted for togetherness.",
    img: "/images/dining-room.png",
  },
  {
    title: "KITCHEN",
    desc: "Experience beauty in simplicity with a stylish, compact kitchen filled with natural light and elegance.",
    img: "/images/kitchen.png",
  },
  {
    title: "MASTER BEDROOM",
    desc: "A serene retreat with soft lighting, private balcony, and luxurious details for limitless comfort.",
    img: "/images/master-bedroom.png",
  },
];

export default function RoomSlider() {
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
              <Image
                src={room.img}
                alt={room.title}
                layout="fill"
                objectFit="cover"
                priority
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Text Content */}
              <div className="absolute bottom-20 left-10 md:left-20 z-20 max-w-xl">
                <h2 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
                  {room.title}
                </h2>
                <p className="mt-4 text-lg md:text-xl text-gray-200">
                  {room.desc}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
