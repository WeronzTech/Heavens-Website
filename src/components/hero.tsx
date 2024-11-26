import heroBg from "../assets/hero-bg.webp";
// import arrow from "../assets/arrow.svg";
// import og1 from "../assets/interlock-og.webp";
// import og2 from "../assets/interlock-og-2.webp";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      style={{ backgroundImage: `url(${heroBg})` }}
      className="relative flex min-h-[810px] w-full flex-col items-center justify-center overflow-hidden bg-cover px-6 pt-[0px] md:flex-row md:items-start md:px-10 md:pt-[200px] lg:justify-start lg:pt-[237px] xl:px-[159px] 3xl:justify-center"
    >
      <div className="z-10 flex w-full flex-col items-center text-[#0e0e0e] lg:items-start 3xl:max-w-[1200px]">
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
          It is a long established fact that a reader will be distracted by the readable content of a page
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
          <button className="group relative h-[56px] w-[180px] overflow-hidden rounded-full border-2 border-[#131316] text-base font-medium leading-[28px] text-[#445568] shadow-[0_1px_2px_0_rgba(14,24,41,0.05)] md:h-[60px] md:w-[202px] md:text-[18px]">
            <div className="absolute -left-1 bottom-0 right-0 -z-10 !mx-auto h-[0px] w-[207px] rounded-full bg-black transition-all duration-300 group-hover:h-[59px]" />
            <span className="group-hover:text-white">Book Now</span>
          </button>
        </motion.div>
      </div>

      {/* New Video Div */}
      <div className="relative z-10 w-full md:w-1/2 lg:w-1/2 bg-red-600">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="https://videos.pexels.com/video-files/3648257/3648257-sd_640_360_30fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Removed heroImg */}
      {/* <img src={og1} alt="" className="hidden" />
      <img src={og2} alt="" className="hidden" /> */}
    </section>
  );
};

export default Hero;