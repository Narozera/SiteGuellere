import { jobs } from "../../Constants/index";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

export default function Carousel() {
  const carousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  return (
    <>
      <motion.div
        className="overflow-hidden mx-auto cursor-grab sm:max-w-[300px] md:max-w-[300px] lg:max-w-[650px] xl:max-w-[1000px] 2xl:max-w-[1000px]"
        ref={carousel}
      >
        <motion.div
          className="flex gap-12"
          whileTap={{ cursor: "grabbing" }}
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          initial={{ x: 200 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {jobs.map((item) => (
            <motion.div key={item.id} className="text-center mx-auto">
              <img
                className="mx-auto mt-10 h-[80px] w-[80px]"
                alt={item.alt}
                src={item.img}
              />
              <h3 className="my-5 text-[white] text-[20px] font-bold max-w-[300px]">
                {item.title}
              </h3>
              <p className="my-5 text-[white] max-w-[300px] h-[180px]">
                {item.text}
              </p>

              <button className="bg-white w-[300px] cursor-pointer hover:bg-[#cbcbcb] hover:text-[white] font-bold py-2 px-4 rounded">
                {item.button}
              </button>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
}
