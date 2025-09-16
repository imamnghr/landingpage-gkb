// app/page.tsx (atau file page kamu)
"use client";
import React from "react";
import { Map } from "lucide-react";
import { motion } from "framer-motion";
import TenantSection from "@/components/TenantSection";
import RoomSlider from "@/components/RoomSLider";
import Image from "next/image";

// Variants animasi reusable
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Page() {
  const tenant_xxi = [
    { url: "images/dcost.jpeg" },
    { url: "images/pepper.jpeg" },
    { url: "images/peoples_cafe.jpeg" },
    { url: "images/kimukatsu.jpeg" },
    { url: "images/tekko.jpeg" },
    { url: "images/kopte.jpeg" },
    { url: "images/chateraise.jpeg" },
  ];

  return (
    // NB: overflow-y-auto agar konten bisa discroll jika melebihi viewport
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden overflow-y-auto">
      {/* Header */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-white px-3 sm:px-5 py-3 sm:py-5 flex w-full items-center justify-between"
      >
        <img src="/Logo-Transparant.png" className="h-10 sm:h-12 md:h-14" />
        <div
          onClick={() => window.open("https://wa.me/628126113855", "_blank")}
          className="font-raleway bg-[#8dc100] px-3 sm:px-4 md:px-5 py-2 sm:py-3 text-sm sm:text-lg md:text-xl text-white cursor-pointer rounded hover:scale-105 transition-transform"
        >
          Get An Offering
        </div>
      </motion.div>

      {/* Hero Section */}
      <motion.section
        className="relative min-h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero.jpeg')" }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeInUp}
      >
        {/* overlay harus pointer-events-none supaya tidak memblok scroll/click */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black pointer-events-none"></div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="relative z-20 flex flex-col items-center justify-center min-h-screen text-center text-white px-4 sm:px-6 md:px-8"
        >
          <motion.img
            src="/logo-white.png"
            className="h-20 sm:h-24 md:h-28 mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />
          <p className="text-sm sm:text-base md:text-lg font-raleway mb-6 px-2 sm:px-4 md:px-5 text-center max-w-4xl">
            PT Kota Bintang Rayatri is a property development company that
            develops residential and commercial projects under the name Grand
            Kota Bintang (GKB) in Bekasi, West Java. This project spans 65
            hectares of land and includes retail, office, hotel, and residential
            components. The development of GKB will contribute to the
            JABODETABEK area by providing a lifestyle, entertainment, and
            business center that will enhance the economy of Bekasi City. GKB is
            located in a premium area east of Jakarta, with direct access to the
            JORR toll road...
          </p>
        </motion.div>
      </motion.section>

      {/* XXI Cinema Section */}
      <motion.section
        className="relative min-h-screen w-full bg-cover bg-center bg-[url(/images/xxi.jpeg)]"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="px-5 sm:px-10 md:px-20 min-h-screen py-6 sm:py-8 md:py-10 flex flex-col justify-between">
          <motion.div variants={fadeInUp} className="relative z-20">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-cormorant text-white font-extrabold">
              XXI Le Cinema
            </h1>
            <img
              src="images/xxi logo.png"
              className="w-1/2 sm:w-2/5 md:w-1/3 mt-3 sm:mt-5"
            />
            <p className="w-full sm:w-2/3 md:w-1/3 text-justify text-white mt-3 sm:mt-5 font-raleway font-bold text-sm sm:text-base">
              XXI, present at Grand Kota Bintang...
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mt-6 relative z-20"
            variants={fadeInUp}
          >
            {tenant_xxi.map((item, index) => (
              <motion.div
                key={index}
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center rounded-full bg-white shadow-md"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={item.url}
                  alt={`tenant-${index}`}
                  className="max-w-[70%] max-h-[70%] object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* TenantSection (komponen eksternal) */}
      <div className="relative z-10">
        <TenantSection />
      </div>

      {/* Residential Section */}
      <motion.section
        className="relative min-h-screen w-full flex flex-col items-center justify-center bg-cover bg-center bg-[url(/images/bg_residential.jpeg)]"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
        <div className="relative z-20 flex flex-col items-center">
          <img src="Logo-Transparant.png" className="w-1/2 sm:w-2/5 md:w-1/3" />
          <h1 className="font-cormorant text-4xl sm:text-6xl md:text-7xl lg:text-9xl text-[#987964] font-extrabold text-center">
            RESIDENTIAL
          </h1>
        </div>
      </motion.section>

      {/* Maroco Section */}
      <motion.section
        className="relative"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="relative min-h-screen w-full flex p-10 justify-between bg-cover bg-center bg-[url(/images/maroco.jpeg)]">
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>
          <div className="z-20">
            <p className="text-4xl font-raleway text-black font-extralight">
              Cluster
            </p>
            <h1 className="text-6xl font-cormorant font-extrabold">Maroco</h1>
          </div>
          <div className="z-20">
            <h1 className="text-black font-extrabold text-6xl font-raleway">
              SOLD <span className="text-red-500">OUT</span>
            </h1>
          </div>
        </div>
      </motion.section>

      {/* Roma Section */}
      <motion.section
        className="relative"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="relative min-h-screen w-full flex p-10 items-center justify-center flex-col bg-cover bg-center bg-[url(/images/new_rome.jpeg)]">
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />
          <div className="relative z-20 flex flex-col items-center">
            <img src="/logo-white.png" className="w-1/3" />
            <h1 className="text-white text-4xl font-cormorant font-extrabold mt-3">
              New Residence Cluster
            </h1>
            <p className="text-[#e4cbb7] text-6xl mt-3 font-raleway font-extrabold">
              ROMA
            </p>
            <p className="text-[#e4cbb7] mt-3 font-raleway text-center font-bold max-w-3xl px-2 sm:px-5">
              Discover the timeless charm of living in Cluster Roma...
            </p>
          </div>
        </div>
      </motion.section>

      {/* Luxury Section */}
      <motion.section
        className="relative"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="relative min-h-screen w-full flex items-center justify-center bg-cover bg-center bg-[url(/images/fsd-roma.jpg)]">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black pointer-events-none"></div>
          <div className="relative z-20 text-center max-w-2xl">
            <h2 className="text-4xl md:text-5xl z-50 font-bold text-[#ffc59e] drop-shadow-sm">
              Luxury Living Awaits You
            </h2>
            <p className="mt-4 text-lg md:text-xl text-[#ffc59e]">
              Starting from{" "}
              <span className="font-semibold text-[#ffc59e]">
                IDR 2 Billion
              </span>
            </p>
            <button
              onClick={() =>
                window.open("https://wa.me/628126113855", "_blank")
              }
              className="mt-8 px-8 py-3 bg-black text-white rounded-full shadow-lg hover:bg-gray-800 transition"
            >
              Book a Visit
            </button>
          </div>
        </div>
      </motion.section>

      {/* Room slider (komponen eksternal) */}
      <div className="relative z-10">
        <RoomSlider />
      </div>

      {/* Layout Section */}
      <motion.section
        className="relative"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="relative w-full h-screen overflow-hidden">
          <Image
            src="/images/layout.jpg"
            alt="Background Blur"
            fill
            className="object-cover blur-2xl scale-110"
            priority
          />
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src="/images/layout.jpg"
              alt="Cluster Roma"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        className="relative min-h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/images/closer.jpeg')" }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black pointer-events-none"></div>
        <div className="relative z-20 flex flex-col items-center justify-center min-h-screen text-center text-white px-4 sm:px-6">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-extrabold font-cormorant mb-6 sm:mb-8 md:mb-10">
            GET MORE CLOSER
          </h1>
          <p className="text-sm sm:text-base md:text-lg font-raleway mb-4 sm:mb-6 px-2 sm:px-5 text-center max-w-2xl">
            Jl. Kota Bintang Boulevard No. B9, Grand Kota Bintang, Jakasampurna,
            Bekasi Barat, Bekasi 17145
          </p>
          <motion.button
            onClick={() =>
              window.open("https://maps.app.goo.gl/BU1jUE4FKi8XNWm16", "_blank")
            }
            whileHover={{ scale: 1.05 }}
            className="flex gap-2 px-4 sm:px-6 md:px-7 rounded py-2 sm:py-3 mb-4 sm:mb-5 bg-[#8dc100] text-sm sm:text-base"
          >
            <Map className="w-4 h-4 sm:w-5 sm:h-5" />
            Direction Using Google Maps
          </motion.button>
          <p className="text-sm sm:text-base md:text-lg font-raleway font-extrabold mb-4 sm:mb-6 px-2 sm:px-5 text-center">
            OR CHAT WITH US ON WHATSAPP
          </p>
          <motion.button
            onClick={() => window.open("https://wa.me/628126113855", "_blank")}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 px-2 sm:px-5 text-center hover:text-green-400 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            0812 6113 855
          </motion.button>
        </div>
        {/* footer image — make pointer-events-none so tidak memblok scroll */}
        <div className="flex items-center justify-end absolute bottom-0 right-0 pointer-events-none">
          <img src="images/footer.png" className="w-1/2" />
        </div>
      </motion.section>
    </div>
  );
}
