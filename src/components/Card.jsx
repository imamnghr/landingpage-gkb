import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Home, Bed, Bath, Car } from "lucide-react";

export default function Cards({
  image,
  title,
  location,
  price,
  currency = "Juta/Bulan",
  landSize,
  buildingSize,
  bedrooms,
  bathrooms,
  parkingSpots,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-sm"
    >
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        />
        {/* Left Button */}
        <motion.button
          whileHover={{ scale: 1.2, rotate: -10 }}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 hover:bg-opacity-100 transition-all"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </motion.button>
        {/* Right Button */}
        <motion.button
          whileHover={{ scale: 1.2, rotate: 10 }}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 hover:bg-opacity-100 transition-all"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </motion.button>
      </div>

      {/* Orange Header Section */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="bg-[#edad5a] px-4 py-3"
      >
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-white font-cormorant font-bold text-lg font-semibold">
              {title}
            </h3>
            <div className="flex items-center font-raleway text-white text-sm mt-1">
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              {location}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Price Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="flex items-center justify-between px-4 py-4"
      >
        <span className="text-[#eeae5b] text-3xl font-cormorant font-bold mr-2">
          Start From
        </span>
        <div className="text-[#eeae5b] flex flex-col text-center text-sm mt-1">
          <span className="text-4xl font-bold text-[#eeae5b] font-raleway">
            {price}
          </span>
          {currency}
        </div>
      </motion.div>

      {/* Property Details */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="bg-[#c6995e] px-4 py-3"
      >
        <div className="flex items-center justify-center gap-4 text-white text-sm">
          <div className="flex items-center">
            <Home className="w-4 h-4 mr-1" />
            <span>{landSize}m²</span>
          </div>
          <div className="flex items-center">
            <Home className="w-4 h-4 mr-1 fill-current" />
            <span>{buildingSize}m²</span>
          </div>
          <div className="flex items-center">
            <Bed className="w-4 h-4 mr-1" />
            <span>{bedrooms}</span>
          </div>
          <div className="flex items-center">
            <Bath className="w-4 h-4 mr-1" />
            <span>{bathrooms}</span>
          </div>
          {parkingSpots && (
            <div className="flex items-center">
              <Car className="w-4 h-4 mr-1" />
              <span>{parkingSpots}</span>
            </div>
          )}
        </div>
      </motion.div>

      {/* WhatsApp Button */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="p-4 bg-[#eeae5b]"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.open("https://wa.me/628126113855", "_blank")}
          className="w-full cursor-pointer bg-white border-2 border-white py-3 px-4 rounded-full flex items-center justify-center hover:bg-green-50 transition-colors"
        >
          <MessageCircle className="w-4 text-[#eeae5b] h-4 mr-2" />
          <span className="font-medium text-[#eeae5b]">Whatsapp</span>
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
