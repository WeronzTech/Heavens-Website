import whyGradient from "../assets/why-gradient.svg";
import c1 from "../assets/whychooseus/c1.jpg";
import c2 from "../assets/whychooseus/c2.jpg";
import c3 from "../assets/whychooseus/c3.jpg";
import c4 from "../assets/whychooseus/c4.jpg";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";

const WhyUs = () => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState(1);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start center", "end start"],
  });

  const height = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["12.91512915129151%", "100%"],
  );

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.125) {
      setPosition(1);
    } else if (latest > 0.125 && latest < 0.25) {
      setPosition(2);
    } else if (latest > 0.25 && latest < 0.375) {
      setPosition(3);
    } else {
      setPosition(4);
    }
  });

  return (
    <section
      id="services"
      className="relative flex w-full flex-col-reverse items-center justify-center gap-16 px-6 pb-24 pt-12 md:flex-row md:px-10 md:pb-16 md:pt-32 xl:px-[159px]"
    >
      <img src={whyGradient} alt="" className="absolute bottom-0 left-0" />
      <div className="relative flex w-full flex-col-reverse gap-20 md:flex-row 3xl:max-w-[1200px]">
        <motion.div
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
          className="relative z-10 h-[400px] w-full object-cover sm:h-[500px] md:h-[650px] md:min-w-[400px] xl:min-w-[592px] rounded-3xl"
        >
          <img
            src={c1}
            alt=""
            className={`rounded-3xl absolute z-[13] h-full w-full scale-[1.01] object-cover transition-all duration-300 ${position === 1 ? "opacity-100" : "opacity-0"}`}
          />
          <img
            src={c2}
            alt=""
            className={`rounded-3xl absolute z-[12] h-full w-full scale-[1.005] object-cover transition-all duration-300 ${position <= 2 ? "opacity-100" : "opacity-0"}`}
          />
          <img
            src={c3}
            alt=""
            className={`rounded-3xl absolute z-[11] h-full w-full object-cover transition-all duration-300 ${position <= 3 ? "opacity-100" : "opacity-0"}`}
          />
          <img
            src={c4}
            alt=""
            className={`rounded-3xl absolute z-[10] h-full w-full object-cover transition-all duration-300 ${position <= 4 ? "opacity-100" : "opacity-100"}`}
          />
        </motion.div>

        <div ref={cardRef} className="flex flex-col pt-[70px]">
          <h3 className="text-[32px] font-bold leading-[44px] tracking-[-0.72px] text-[#0e1829] md:text-[36px]">
            Why Choose US
          </h3>

          <div className="relative mt-6 flex w-full flex-col items-center justify-center gap-6">
            <div className="[544px] absolute left-0 top-0 h-full w-1 bg-[#eaecf0]">
              <motion.div
                style={{
                  height: height,
                }}
                className="h -[70px] w-1 bg-[#0A0D14]"
              />
            </div>

            <div
              className={`py-4 pl-6 transition-all ${position === 1 ? "opacity-100" : "opacity-30"}`}
            >
              <h5 className="text-[20px] font-bold leading-[30px] text-[#0e1829]">
                Affordable and Transparent Pricing
              </h5>
              <p className="mt-2 text-base font-medium leading-6 text-[#445469]">
                We understand the importance of sticking to a budget. That’s why we offer competitively priced accommodations with no hidden charges. Enjoy the best value for your money without compromising on quality or comfort.

.
              </p>
            </div>

            <div
              className={`py-4 pl-6 transition-all ${position === 2 ? "opacity-100" : "opacity-30"}`}
            >
              <h5 className="text-[20px] font-bold leading-[30px] text-[#0e1829]">
                Modern Amenities for a Comfortable Stay
              </h5>
              <p className="mt-2 text-base font-medium leading-6 text-[#445469]">
                From high-speed Wi-Fi and fully furnished rooms to regular housekeeping and secure premises, we provide all the essentials you need for a hassle-free and productive lifestyle.
              </p>
            </div>

            <div
              className={`py-4 pl-6 transition-all ${position === 3 ? "opacity-100" : "opacity-30"}`}
            >
              <h5 className="text-[20px] font-bold leading-[30px] text-[#0e1829]">
                Trusted and Reliable Service
              </h5>
              <p className="mt-2 text-base font-medium leading-6 text-[#445469]">
                With a proven track record of satisfied residents, Heavens Living is a name you can rely on. From seamless booking to consistent maintenance, we prioritize delivering a dependable and worry-free living experience.
              </p>
            </div>

            <div
              className={`py-4 pl-6 transition-all ${position === 4 ? "opacity-100" : "opacity-30"}`}
            >
              <h5 className="text-[20px] font-bold leading-[30px] text-[#0e1829]">
                Focus on Safety and Security
              </h5>
              <p className="mt-2 text-base font-medium leading-6 text-[#445469]">
                Your safety is our top priority. With 24/7 surveillance, secure entry systems, and a well-trained support team, you can live with complete peace of mind.
              </p>
            </div>

            <div className="why-gradient absolute bottom-0 hidden h-[69px] w-full lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
