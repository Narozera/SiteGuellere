import { about } from "../Constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";

export default function About() {
  return (
    <section className="w-full bg-[#00293F] font-roboto">
      <motion.div
        className="container mx-auto"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1  pt-[30px]">
          <div className="mx-auto lg:my-auto">
            <motion.img
              className="sm:rounded-full md:rounded-full lg:rounded-full"
              src="/guellas.png"
              variants={textVariant(1.2)}
            />
          </div>

          <div className="mx-auto" variants={textVariant(0.4)}>
            <ul className="text-[white] text-[20px] list-disc py-10 max-w-[465px] sm:w-[315px] sm:text-[18px] sm:list-none sm:text-center md:list-none md:text-[18px] md:w-[380px] md:text-center lg:w-[370px]">
              <motion.li className="mb-5" variants={textVariant(0.6)}>
                {about[0]}
              </motion.li>
              <motion.li variants={textVariant(0.8)}>{about[1]}</motion.li>
            </ul>
            <motion.button
              className="w-[465px] bg-[white] h-[50px] text-[20px] font-bold 
            
            rounded-[20px] cursor-pointer hover:bg-[#cbcbcb] hover:text-[white] sm:w-[315px] md:w-[380px] lg:w-[370px] lg:mb-10"
              variants={textVariant(1)}
            >
              {about[2]}
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
