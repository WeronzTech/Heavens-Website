import { motion } from "framer-motion";
import { FaCity, FaHome, FaBed, FaUserFriends } from "react-icons/fa"; // Import relevant icons

const SocialProof = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: {
          duration: 0.6,
          delay: 0.2,
          ease: [0.44, 0, 0.56, 1],
        },
      }}
      viewport={{
        amount: "some",
        once: true,
      }}
      className="flex w-full flex-col items-center justify-center gap-8 py-16"
    >
      <p className="text-[18px] leading-[26px] tracking-[-0.216px] text-[#2f2b43]/60">
        Trusted by the best
      </p>
      <div className="flex flex-wrap items-center justify-center gap-6">
        {/* First Card */}
        <div className="flex items-center p-4 border rounded-[20px] shadow-md bg-white w-full max-w-[300px] h-[120px]">
          <FaCity className="text-3xl mr-4 text-[#631930]" />
          <div>
            <h3 className="text-lg font-bold">8+ Cities</h3>
            <p className="text-sm text-gray-600">Expanding our reach.</p>
          </div>
        </div>
        {/* Second Card */}
        <div className="flex items-center p-4 border rounded-[20px] shadow-md bg-white w-full max-w-[300px] h-[120px]">
          <FaHome className="text-3xl mr-4 text-[#631930]" />
          <div>
            <h3 className="text-lg font-bold">8+ Residences</h3>
            <p className="text-sm text-gray-600">Comfortable living spaces.</p>
          </div>
        </div>
        {/* Third Card */}
        <div className="flex items-center p-4 border rounded-[20px] shadow-md bg-white w-full max-w-[300px] h-[120px]">
          <FaBed className="text-3xl mr-4 text-[#631930]" />
          <div>
            <h3 className="text-lg font-bold">8+ Beds</h3>
            <p className="text-sm text-gray-600">Quality sleep guaranteed.</p>
          </div>
        </div>
        {/* Fourth Card */}
        <div className="flex items-center p-4 border rounded-[20px] shadow-md bg-white w-full max-w-[300px] h-[120px]">
          <FaUserFriends className="text-3xl mr-4 text-[#631930]" />
          <div>
            <h3 className="text-lg font-bold">8+ Customers</h3>
            <p className="text-sm text-gray-600">Happy clients.</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default SocialProof;