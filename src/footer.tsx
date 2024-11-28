import logoWhite from "./assets/heavens-white.png";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer className="relative flex h-auto w-full flex-col items-center justify-center gap-16 overflow-hidden bg-[#131316] px-6 py-10 text-white md:h-[650px] md:px-10 md:pb-12 md:pt-16 xl:px-[112px]">
      <div className="absolute left-[-216px] top-[-216px] h-[425px] w-[425px] rounded-[425px] bg-white blur-[350px]" />

      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 0.5,
            delay: 0.3,
            ease: [0.44, 0, 0.22, 0.99],
          },
        }}
        viewport={{
          amount: "some",
          once: true,
        }}
        src={logoWhite}
        alt=""
        className="w-[1315.875px] 3xl:max-w-[1200px] lg:mt-[-15rem]"
      />

      <div className="flex w-full flex-col items-center justify-center gap-12 3xl:max-w-[1200px]">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-[#94969D]"
        >
          {/* Social Media Icons Column */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-row md:flex-col gap-6 justify-center items-center"
          >
            <motion.a variants={linkVariants} href="#" className="hover:text-white transition-colors duration-300">
              <FaLinkedin size={24} />
            </motion.a>
            <motion.a variants={linkVariants} href="#" className="hover:text-white transition-colors duration-300">
              <FaInstagram size={24} />
            </motion.a>
            <motion.a variants={linkVariants} href="#" className="hover:text-white transition-colors duration-300">
              <FaFacebook size={24} />
            </motion.a>
          </motion.div>

          {/* Sitemap Column */}
          <motion.div variants={itemVariants} className="text-center">
            <motion.h3 variants={itemVariants} className="text-white font-bold mb-4">Sitemap</motion.h3>
            <motion.ul variants={containerVariants} className="space-y-2">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <motion.li key={item} variants={linkVariants}>
                  <a href="#" className="hover:text-white transition-colors duration-300">
                    {item}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Contact Information Column */}
          <motion.div variants={itemVariants} className="text-center">
            <motion.h3 variants={itemVariants} className="text-white font-bold mb-4">Contact Us</motion.h3>
            <motion.address variants={containerVariants} className="not-italic space-y-2">
              <motion.p variants={linkVariants}>123 Business Street</motion.p>
              <motion.p variants={linkVariants}>City, State 12345</motion.p>
              <motion.p variants={linkVariants}>Country</motion.p>
              <motion.a 
                variants={linkVariants}
                href="mailto:info@heavens.com" 
                className="hover:text-white transition-colors duration-300"
              >
                info@heavens.com
              </motion.a>
            </motion.address>
          </motion.div>
        </motion.div>

        {/* Copyright Section */}
        <div className="w-full text-base font-medium leading-6 text-[#94969C] text-center sm:flex items-center justify-center gap-[5px]">
          <p>
            ✦ Crafted by
            <a
              href="https://www.weronz.com/"
              target="_blank"
              className="text-[#fff] hover:text-[#94969C] hover:no-underline underline-offset-4 transition-all cursor-pointer duration-300 mx-[5px]"
            >
              Weronz Tech
            </a>
            — © 2024 Heavens
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;