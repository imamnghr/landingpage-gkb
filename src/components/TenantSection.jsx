import { motion } from "framer-motion";

const tenants = [
  {
    id: 1,
    name: "McDonald's",
    logo: "/images/mcd.jpeg",
    category: "Fast Food",
  },
  {
    id: 2,
    name: "Starbucks",
    logo: "/images/starbuck.jpeg",
    category: "Coffee & Beverages",
  },
  {
    id: 3,
    name: "Amanaia",
    logo: "/images/amanaia.jpeg",
    category: "Cafe & Resto",
  },
  {
    id: 4,
    name: "Kyuka",
    logo: "/images/kyuka.jpeg",
    category: "Cafe & Resto",
  },
  {
    id: 5,
    name: "Pizza Hut",
    logo: "/images/pizza hut.jpeg",
    category: "Restaurant",
  },
  { id: 6, name: "KFC", logo: "/images/kfc.jpeg", category: "Fast Food" },
  { id: 7, name: "Hokben", logo: "/images/hokben.jpeg", category: "Fast Food" },
  {
    id: 8,
    name: "Burger King",
    logo: "/images/burger.jpeg",
    category: "Fast Food",
  },
  {
    id: 9,
    name: "Chat Time",
    logo: "/images/chat.jpeg",
    category: "Coffee & Beverages",
  },
  {
    id: 10,
    name: "Alfamart",
    logo: "/images/alfamart-logo.png",
    category: "Retail",
  },
  {
    id: 11,
    name: "Yoshinoya",
    logo: "/images/yoshinoya.jpeg",
    category: "Cafe & Resto",
  },
  {
    id: 12,
    name: "Tomoro",
    logo: "/images/tomoro.jpeg",
    category: "Coffee & Beverages",
  },
  {
    id: 13,
    name: "Solaria",
    logo: "/images/solaria.jpeg",
    category: "Cafe & Resto",
  },
  {
    id: 14,
    name: "Richeese Factory",
    logo: "/images/richis.jpeg",
    category: "Cafe & Resto",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function TenantSection() {
  return (
    <motion.section
      className="relative min-h-screen w-full bg-cover bg-center bg-[url(/images/tenant1.jpeg)] p-5"
      initial="hidden"
      animate="show"
      variants={fadeInUp}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="flex flex-col relative z-10 h-full">
        {/* Header */}
        <div className="flex px-5 sm:px-8 md:px-10 py-6 md:py-8 flex-col items-center justify-center">
          <motion.h1
            className="font-cormorant mb-2 text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white"
            variants={fadeInUp}
          >
            Our Tenant
          </motion.h1>
          <motion.p
            className="text-white text-lg mt-2 text-center max-w-2xl"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            Discover our diverse collection of premium brands and local
            favorites
          </motion.p>
        </div>

        {/* Manual Scroll Slider */}
        <div className="flex-1 flex items-center justify-center px-5 sm:px-8 md:px-10">
          <div className="w-full max-w-7xl">
            {/* Desktop & Tablet */}
            <div
              className="hidden tenant-wrapper no-scrollbar sm:flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4"
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              {tenants.map((tenant, index) => (
                <motion.div
                  key={`${tenant.id}-${index}`}
                  className="flex-shrink-0 flex flex-col items-center text-center rounded-xl p-6 
                            hover:bg-white/20 transition-all duration-300 transform hover:scale-105
                            snap-center"
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Logo */}
                  <div className="bg-white rounded-full mb-4 w-24 h-24 flex items-center justify-center overflow-hidden">
                    <img
                      src={tenant.logo}
                      alt={`${tenant.name} logo`}
                      className="w-full h-full object-cover rounded-full"
                      onError={(e) => {
                        e.target.src =
                          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yMCAyNkM4IDI2IDggMTQgMjAgMTRDMzIgMTQgMzIgMjYgMjAgMjZaTTIwIDIyQzI4IDIyIDI4IDE4IDIwIDE4QzEyIDE4IDEyIDIyIDIwIDIyWiIgZmlsbD0iIzlDQTNBRiIvPgo8L3N2Zz4K";
                      }}
                    />
                  </div>
                  {/* Info */}
                  <h3 className="text-white font-semibold text-lg mb-1">
                    {tenant.name}
                  </h3>
                  <p className="text-gray-300 text-sm">{tenant.category}</p>
                </motion.div>
              ))}
            </div>

            {/* Mobile */}
            <div
              className="flex sm:hidden gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4"
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              {tenants.map((tenant, index) => (
                <motion.div
                  key={`${tenant.id}-${index}`}
                  className="flex-shrink-0 flex flex-col items-center text-center rounded-xl p-4 
                            hover:bg-white/20 transition-all duration-300 transform hover:scale-105
                            snap-center"
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Logo */}
                  <div className="bg-white rounded-full mb-4 w-20 h-20 flex items-center justify-center overflow-hidden">
                    <img
                      src={tenant.logo}
                      alt={`${tenant.name} logo`}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  {/* Info */}
                  <h3 className="text-white font-semibold text-base mb-1">
                    {tenant.name}
                  </h3>
                  <p className="text-gray-300 text-xs">{tenant.category}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
