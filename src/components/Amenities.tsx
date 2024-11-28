import { motion } from 'framer-motion';

const Amenities = () => {
  const amenities = [
    { id: '01', title: 'FULLY FURNISHED ROOMS' },
    { id: '02', title: 'HIGH SPEED Wi-Fi' },
    { id: '03', title: 'HEALTHY FOOD' },
    { id: '04', title: 'GYM' },
    { id: '05', title: 'MEDITATION AREA' },
    { id: '06', title: 'ENTERTAINMENT ZONE' },
    { id: '07', title: 'LAUNDRY FACILITY' },
    { id: '08', title: 'COFFEE VENDING MACHINE' },
    { id: '09', title: 'GAMING SECTION' },
    { id: '10', title: 'WORK SPACE' },
    { id: '11', title: 'CCTV' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="bg-[#1A1A1A] py-32 md:py-48 px-4 md:px-8 lg:px-16 min-h-screen flex items-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-7xl mx-auto w-full"
      >
        <motion.h2 
          variants={itemVariants}
          className= "bg-gradient-to-b from-zinc-100 to-zinc-700 bg-clip-text text-transparent text-4xl md:text-5xl font-medium mb-24"
        >
          What we Provide
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          className="flex flex-wrap items-center justify-start gap-x-6 md:gap-x-8 gap-y-12"
        >
          {amenities.map((amenity, index) => (
            <motion.div
              key={amenity.id}
              variants={itemVariants}
              className="flex items-center group"
            >
              <span className="text-gray-500 text-sm font-medium mr-3">
                {amenity.id}
              </span>
              <h3 className="text-white text-xl md:text-2xl font-medium tracking-wide">
                {amenity.title}
              </h3>
              {index !== amenities.length - 1 && (
                <span className="text-gray-500 mx-6 text-2xl">/</span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Amenities; 