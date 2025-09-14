import React from "react";
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
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-sm">
      <div className="relative h-64">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <button className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 hover:bg-opacity-100 transition-all">
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
        </button>
        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 hover:bg-opacity-100 transition-all">
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
        </button>
      </div>

      {/* Orange Header Section */}
      <div className="bg-[#edad5a] px-4 py-3">
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
      </div>

      {/* Price Section */}
      <div className="flex items-center justify-between px-4 py-4">
        <span className="text-[#eeae5b] text-3xl font-cormorant font-bold mr-2">Start From</span>
        <div className="text-[#eeae5b] flex flex-col text-center text-sm mt-1">
          <span className="text-4xl font-bold text-[#eeae5b] font-raleway">{price}</span>
          {currency}
        </div>
      </div>

      {/* Property Details */}
      <div className="bg-[#c6995e] px-4 py-3">
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
      </div>

      {/* WhatsApp Button */}
      <div className="p-4 bg-[#eeae5b]">
        <button onClick={() => window.open("https://wa.me/628126113855", "_blank")} className="w-full cursor-pointer bg-white border-2 border-white py-3 px-4 rounded-full flex items-center justify-center hover:bg-green-50 transition-colors">
          <MessageCircle className="w-4 text-[#eeae5b] h-4 mr-2" />
          <span className="font-medium text-[#eeae5b]">Whatsapp</span>
        </button>
      </div>
    </div>
  );
}
