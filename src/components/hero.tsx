import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import heroBg from "../assets/hero-bg.webp";
import arrow from "../assets/arrow.svg";
import BookingModal from "./BookingModal";
import appApk from "../assets/apk/Heavens_LIving.apk";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const images = [
    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleDownload = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = appApk;
    link.download = 'Heavens_LIving.apk';
    
    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <section
      id="hero"
      style={{ backgroundImage: `url(${heroBg})` }}
      className="relative flex min-h-[810px] w-full flex-col items-center justify-center overflow-hidden bg-cover px-6 pt-[0px] md:flex-row md:items-start md:px-10 md:pt-[200px] lg:justify-start lg:pt-[237px] xl:px-[159px] 3xl:justify-center"
    >
      {/* Left Content */}
      <div className="z-10 flex w-full flex-col items-center text-[#0e0e0e] lg:items-start 3xl:max-w-[1200px] md:w-1/2">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              ease: [0.44, 0, 0, 1],
            },
          }}
          viewport={{
            amount: "some",
            once: true,
          }}
          className="h-auto w-full text-center text-[60px] font-semibold leading-[60px] tracking-[-3px] opacity-[0.8704] md:h-[160px] md:w-[649px] md:text-[80px] md:leading-[80px] lg:text-left"
        >
          Home, Away from Home
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              delay: 0.2,
              ease: [0.44, 0, 0, 1],
            },
          }}
          viewport={{
            amount: "some",
            once: true,
          }}
          className="mt-[25.5px] w-full text-center text-base font-medium leading-6 md:w-[523px] md:text-[20px] md:leading-[30px] lg:text-left"
        >
          Welcome to Heavens Living, your perfect partner in finding safe, comfortable, and budget-friendly accommodation. Designed with students and professionals in mind, our PG stays offer the right mix of convenience, quality, and affordability.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              delay: 0.4,
              ease: [0.44, 0, 0, 1],
            },
          }}
          viewport={{
            amount: "some",
            once: true,
          }}
          className="mt-[55.5px] flex w-full flex-col items-center justify-center gap-6 md:flex-row lg:justify-start"
        >
          <button
            onClick={() => setIsModalOpen(true)}
            className="group relative h-[56px] w-[180px] overflow-hidden rounded-full border-2 border-[#131316] text-base font-medium leading-[28px] text-[#445568] shadow-[0_1px_2px_0_rgba(14,24,41,0.05)] md:h-[60px] md:w-[202px] md:text-[18px]">
            <div className="absolute -left-1 bottom-0 right-0 -z-10 !mx-auto h-[0px] w-[207px] rounded-full bg-black transition-all duration-300 group-hover:h-[59px]" />
            <span className="group-hover:text-white">Book Now</span>
          </button>

          {/* <button className="flex h-[56px] w-[180px] items-center justify-center gap-3 rounded-full text-base font-medium leading-[28px] text-[#445568] underline-offset-8 transition-all hover:underline md:h-[60px] md:w-[202px] md:text-[18px]">
            <span>Download App</span>
            <img src={arrow} alt="" />
          </button> */}
           <button 
            onClick={handleDownload}
            className="flex h-[56px] w-[180px] items-center justify-center gap-3 rounded-full text-base font-medium leading-[28px] text-[#445568] underline-offset-8 transition-all hover:underline md:h-[60px] md:w-[202px] md:text-[18px]"
          >
            <span>Download App</span>
            <img src={arrow} alt="" />
          </button>
        </motion.div>
      </div>

      {/* Right Carousel */}
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 relative h-[300px] sm:h-[400px] lg:h-[600px] mt-4 md:-mt-12 lg:-mt-20 px-4 md:px-6"
      >
        <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-lg">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: currentImage === index ? 1 : 0,
                scale: currentImage === index ? 1 : 1.1
              }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              <img
                src={img}
                alt={`Apartment ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </motion.div>
          ))}
          
          {/* Play Button Circle */}
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.3, type: "spring" }}
            className="absolute top-8 right-8 z-20"
          >
            <button className="group relative w-14 h-14 md:w-16 md:h-16 bg-white/50 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
              {/* Tilted Triangle Play Icon */}
              
                <div className="w-0 h-0 
                  border-t-[8px] border-t-transparent
                  border-l-[16px] border-l-black
                  border-b-[8px] border-b-transparent
                  translate-x-[2px]"
                />
                

              {/* Ripple Effect */}
              <div className="absolute inset-0 rounded-full bg-white/30 group-hover:scale-150 transition-transform duration-500" />
            </button>
          </motion.div>
          
          {/* Carousel Indicators */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentImage === index ? 'bg-white w-6' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Booking Modal */}
      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default Hero;