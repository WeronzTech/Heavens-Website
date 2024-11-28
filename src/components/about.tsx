import { motion } from 'framer-motion';

const AboutUs = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="font-sans"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Main Heading */}
      <motion.h1 
        variants={itemVariants}
        className="text-5xl font-bold ml-6 mt-8 mb-8"
      >
        About Us
      </motion.h1>

      {/* Mission Section */}
      <motion.section className="flex flex-col md:flex-row items-center py-16 px-6 md:px-16">
        <motion.div 
          className="md:w-1/2"
          variants={itemVariants}
        >
          <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            There's this notion that to grow a business, you have to be ruthless. But we know
            there's a better way to grow. One where what's good for the bottom line is also
            good for customers. We believe businesses can grow with a conscience, and succeed
            with a soul — and that they can do it with inbound. That's why we've created an
            ecosystem uniting software, education, and community to help businesses grow
            better every day.
          </p>
        </motion.div>
        <motion.div 
          className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0"
          variants={imageVariants}
        >
          <div className="relative">
            <img
              src="https://via.placeholder.com/400"
              alt="Founders"
              className="w-[400px] h-[400px] object-cover rounded-2xl shadow-lg"
              style={{
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
              }}
            />
            <motion.div 
              className="absolute bottom-4 right-4 text-right text-gray-500 text-sm bg-white/80 p-2 rounded-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <p>Brian Halligan</p>
              <p>Dharmesh Shah</p>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      {/* Story Section */}
      <motion.section className="flex flex-col md:flex-row-reverse items-center py-16 px-6 md:px-16 bg-gray-100">
        <motion.div 
          className="md:w-1/2"
          variants={itemVariants}
        >
          <h2 className="text-4xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            As fellow graduate students at MIT in 2004, Brian and Dharmesh noticed a shift in the
            way people shop and buy. Consumers were no longer tolerating interruptive bids for their
            attention — in fact, they'd gotten really, really good at ignoring them.
          </p>
        </motion.div>
        <motion.div 
          className="md:w-1/2 flex justify-center md:justify-start mt-8 md:mt-0"
          variants={imageVariants}
        >
          <div className="relative">
            <img
              src="https://via.placeholder.com/400"
              alt="Our Story"
              className="w-[400px] h-[400px] object-cover rounded-2xl shadow-lg"
              style={{
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
              }}
            />
          </div>
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default AboutUs;