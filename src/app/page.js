"use client";
import Cards from "@/components/Card";
import React from "react";
import { Map } from "lucide-react";

export default function page() {
  const tenant_xxi = [
    {
      url: "images/dcost.jpeg",
    },
    {
      url: "images/pepper.jpeg",
    },
    {
      url: "images/peoples_cafe.jpeg",
    },
    {
      url: "images/kimukatsu.jpeg",
    },
    {
      url: "images/tekko.jpeg",
    },
    {
      url: "images/kopte.jpeg",
    },
    {
      url: "images/chateraise.jpeg",
    },
  ];

  const property = [
    {
      name: "Marocco",
      image: "images/maroco.jpeg",
      bedrooms: 4,
      bathrooms: 2,
      parkingSpots: 1,
      buildingSize: 120,
      locations: "Bekasi",
      landSize: 150,
      price: 6,
    },
    {
      name: "Roma",
      image: "images/roma.jpeg",
      bedrooms: 4,
      bathrooms: 2,
      parkingSpots: 1,
      buildingSize: 120,
      locations: "Bekasi",
      landSize: 150,
      price: 6,
    },
  ];

  return (
    <div className="flex flex-col w-screen">
      {/* Header */}
      <div className="bg-white px-3 sm:px-5 py-3 sm:py-5 flex w-full items-center justify-between">
        <img src="/Logo-Transparant.png" className="h-10 sm:h-12 md:h-15" />
        <div
          onClick={() => window.open("https://wa.me/628126113855", "_blank")}
          className="font-raleway bg-[#8dc100] px-3 sm:px-4 md:px-5 py-2 sm:py-3 text-sm sm:text-lg md:text-xl text-white cursor-pointer rounded"
        >
          Get An Offering
        </div>
      </div>

      {/* Hero Section */}
      <section
        className="relative h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero.jpeg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 sm:px-6 md:px-8">
          <img src="/Logo-white.png" className="h-20 sm:h-24 md:h-30 mb-4" />
          <p className="text-sm sm:text-base md:text-lg font-raleway mb-6 px-2 sm:px-4 md:px-5 text-center max-w-4xl">
            PT Kota Bintang Rayatri is a property development company that
            develops residential and commercial projects under the name Grand
            Kota Bintang (GKB) in Bekasi, West Java. This project spans 65
            hectares of land and includes retail, office, hotel, and residential
            components. The development of GKB will contribute to the
            JABODETABEK area by providing a lifestyle, entertainment, and
            business center that will enhance the economy of Bekasi City. GKB is
            located in a premium area east of Jakarta, with direct access to the
            JORR toll road leading to Pondok Indah and Kelapa Gading, as well as
            access from Jalan K.H. Noer Ali (Kalimalang) and Jalan Bintara Raya,
            which connect to Kasablanka and Kuningan. We are recognized as
            pioneers of innovative real estate development in Bekasi.
          </p>
        </div>
      </section>

      {/* Tenant Section */}
      <section>
        <div className="flex flex-col md:flex-row">
          <img src="images/tenant1.jpeg" className="w-full md:w-1/2" />
          <div className="flex px-5 sm:px-8 md:px-10 py-6 md:py-0 flex-col items-center justify-center w-full">
            <h1 className="font-cormorant mb-2 text-3xl sm:text-4xl md:text-5xl font-bold text-center">
              Prestigious Tenant
            </h1>
            <p className="text-black font-raleway text-justify text-sm sm:text-base">
              This premium area, with a lineup of prestigious tenants, features
              a stand-alone building concept, offering a classy experience. From
              renowned coffee shops and renowned restaurants to lifestyle
              essentials, to the largest and most comprehensive department
              store, everything is gathered in one prestigious destination. With
              its aesthetically pleasing modern architecture and spacious
              parking area, Grand Kota Bintang is the prime choice for those
              seeking comfort, convenience, and a dynamic lifestyle.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse">
          <img src="images/stellar.jpeg" className="w-full md:w-1/2" />
          <div className="flex px-5 sm:px-8 md:px-10 py-6 md:py-0 flex-col items-center justify-center w-full">
            <h1 className="font-cormorant mb-2 text-3xl sm:text-4xl md:text-5xl font-bold text-center">
              LIMITLESS EXPERIENCE AT STELLAR AVENUE
            </h1>
            <p className="text-black font-raleway text-justify text-sm sm:text-base">
              Discover an unforgettable experience at Stellar Avenue, the newest
              destination that combines fashion, lifestyle, entertainment, and
              culinary delights all in one place! With a unique natural concept,
              we present the perfect harmony between modernity and natural
              beauty. Enjoy the serene atmosphere with refreshing greenery and a
              calming river. Make Stellar Avenue your first choice for relaxing,
              shopping, or simply hanging out with friends and family.
              Experience a different experience with every visit!
            </p>
          </div>
        </div>
      </section>

      {/* Modern Meets Nature Section */}
      <section className="py-6 md:py-0">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 px-3 sm:px-0">
            <div className="flex gap-2 sm:gap-4">
              <img src="images/modern2.jpeg" className="w-[49%]" />
              <img src="images/modern1.jpeg" className="w-[49%]" />
            </div>
            <img src="images/modern3.jpeg" className="mt-3 sm:mt-5 w-full" />
          </div>
          <div className="flex px-5 sm:px-10 lg:px-20 py-6 lg:py-0 flex-col items-center justify-center w-full lg:w-1/2">
            <h1 className="font-cormorant mb-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-center">
              Where Modern Meets Nature.
            </h1>
            <p className="text-black font-raleway text-justify text-sm sm:text-base">
              Tenants at Stellar Avenue are ready to provide a new experience
              for you, with friends and family, enjoying delicious dishes and
              refreshing drinks. With a calming natural atmosphere, every moment
              at Stellar Avenue feels more special and memorable.
            </p>
          </div>
        </div>
      </section>

      {/* XXI Cinema Section */}
      <section className="relative min-h-screen w-full bg-cover bg-center bg-[url(/images/xxi.jpeg)]">
        <div className="px-5 sm:px-10 md:px-20 min-h-screen py-6 sm:py-8 md:py-10 flex flex-col justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-cormorant text-white font-extrabold">
              XXI Le Cinema
            </h1>
            <img
              src="images/xxi logo.png"
              className="w-1/2 sm:w-2/5 md:w-1/3 mt-3 sm:mt-5"
            />
            <p className="w-full sm:w-2/3 md:w-1/3 text-justify text-white mt-3 sm:mt-5 font-raleway font-bold text-sm sm:text-base">
              XXI, present at Grand Kota Bintang, offers more than just a cinema
              experience, becoming the premier destination for movie lovers to
              experience unforgettable viewing experiences. With cutting-edge
              screen technology, stunning surround sound, and premium comfort,
              every visit to XXI is an emotional journey that brings you closer
              to the world of the stories you love.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mt-6">
            {tenant_xxi.map((item, index) => (
              <div
                key={index}
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center rounded-full bg-white shadow-md"
              >
                <img
                  src={item.url}
                  alt={`tenant-${index}`}
                  className="max-w-[70%] max-h-[70%] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Residential Header */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center bg-cover bg-center bg-[url(/images/bg_residential.jpeg)]">
        <img src="Logo-Transparant.png" className="w-1/2 sm:w-2/5 md:w-1/3" />
        <h1 className="font-cormorant text-4xl sm:text-6xl md:text-7xl lg:text-9xl text-[#987964] font-extrabold text-center">
          RESIDENTIAL
        </h1>
      </section>

      {/* Property Cards */}
      <section className="py-6">
        <div className="flex flex-col sm:flex-row gap-4 w-full px-4">
          {property.map((item, index) => (
            <Cards
              key={index}
              image={item.image}
              title={item.name}
              bathrooms={item.bathrooms}
              bedrooms={item.bedrooms}
              location={item.locations}
              buildingSize={item.buildingSize}
              parkingSpots={item.parkingSpots}
              landSize={item.landSize}
              price={item.price}
            />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        className="relative h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/images/closer.jpeg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 sm:px-6">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-extrabold font-cormorant mb-6 sm:mb-8 md:mb-10">
            GET MORE CLOSER
          </h1>
          <p className="text-sm sm:text-base md:text-lg font-raleway mb-4 sm:mb-6 px-2 sm:px-5 text-center max-w-2xl">
            Jl. Kota Bintang Boulevard No. B9, Grand Kota Bintang, Jakasampurna,
            Bekasi Barat, Bekasi 17145
          </p>
          <button className="flex gap-2 px-4 sm:px-6 md:px-7 rounded py-2 sm:py-3 mb-4 sm:mb-5 bg-[#8dc100] text-sm sm:text-base">
            <Map className="w-4 h-4 sm:w-5 sm:h-5" />
            Direction Using Google Maps
          </button>
          <p className="text-sm sm:text-base md:text-lg font-raleway font-extrabold mb-4 sm:mb-6 px-2 sm:px-5 text-center">
            OR CHAT WITH US ON WHATSAPP
          </p>
          <button
            onClick={() => window.open("https://wa.me/628126113855", "_blank")}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 px-2 sm:px-5 text-center hover:text-green-400 transition-colors"
          >
            0812 6113 855
          </button>
        </div>
        <div className="flex items-center justify-end absolute bottom-0 right-0 sm:bottom-0 sm:right-0 md:bottom-0 md:right-0">
          <img src="images/footer.png" className="w-1/2" />
        </div>
      </section>
    </div>
  );
}
