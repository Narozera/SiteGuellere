import {
  civilLaw,
  consumerLaw,
  digitalLaw,
  familyLaw,
  jobs,
  laborLaw,
  textModal,
} from "../../Constants/index";
import { motion } from "framer-motion";
import { container, item } from "../../utils/motion";
import { useState, useRef, useEffect } from "react";

export default function Carousel() {
  const carousel = useRef();
  const [width, setWidth] = useState(0);

  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);

  const modal = useRef();

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
          {/* {jobs.map((item) => (
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

              <button
                className="bg-white w-[300px] cursor-pointer hover:bg-[#cbcbcb] hover:text-[white] font-bold py-2 px-4 rounded ease-linear transition-all duration-150"
                onClick={() => setShowModal(true)}
              >
                {item.button}
              </button>
            </motion.div>
          ))} */}

          <motion.div className="text-center mx-auto">
            <img
              className="mx-auto mt-10 h-[80px] w-[80px]"
              alt={jobs[0].alt}
              src={jobs[0].img}
            />
            <h3 className="my-5 text-[white] text-[20px] font-bold max-w-[300px]">
              {jobs[0].title}
            </h3>
            <p className="my-5 text-[white] max-w-[300px] h-[180px]">
              {jobs[0].text}
            </p>

            <button
              className="bg-white w-[300px] cursor-pointer hover:bg-[#cbcbcb] hover:text-[white] font-bold py-2 px-4 rounded ease-linear transition-all duration-150"
              onClick={() => setShowModal(true)}
            >
              {jobs[0].button}
            </button>
          </motion.div>

          <motion.div className="text-center mx-auto">
            <img
              className="mx-auto mt-10 h-[80px] w-[80px]"
              alt={jobs[1].alt}
              src={jobs[1].img}
            />
            <h3 className="my-5 text-[white] text-[20px] font-bold max-w-[300px]">
              {jobs[1].title}
            </h3>
            <p className="my-5 text-[white] max-w-[300px] h-[180px]">
              {jobs[1].text}
            </p>

            <button
              className="bg-white w-[300px] cursor-pointer hover:bg-[#cbcbcb] hover:text-[white] font-bold py-2 px-4 rounded ease-linear transition-all duration-150"
              onClick={() => setShowModal1(true)}
            >
              {jobs[1].button}
            </button>
          </motion.div>

          <motion.div className="text-center mx-auto">
            <img
              className="mx-auto mt-10 h-[80px] w-[80px]"
              alt={jobs[2].alt}
              src={jobs[2].img}
            />
            <h3 className="my-5 text-[white] text-[20px] font-bold max-w-[300px]">
              {jobs[2].title}
            </h3>
            <p className="my-5 text-[white] max-w-[300px] h-[180px]">
              {jobs[2].text}
            </p>

            <button
              className="bg-white w-[300px] cursor-pointer hover:bg-[#cbcbcb] hover:text-[white] font-bold py-2 px-4 rounded ease-linear transition-all duration-150"
              onClick={() => setShowModal2(true)}
            >
              {jobs[2].button}
            </button>
          </motion.div>

          <motion.div className="text-center mx-auto">
            <img
              className="mx-auto mt-10 h-[80px] w-[80px]"
              alt={jobs[3].alt}
              src={jobs[3].img}
            />
            <h3 className="my-5 text-[white] text-[20px] font-bold max-w-[300px]">
              {jobs[3].title}
            </h3>
            <p className="my-5 text-[white] max-w-[300px] h-[180px]">
              {jobs[3].text}
            </p>

            <button
              className="bg-white w-[300px] cursor-pointer hover:bg-[#cbcbcb] hover:text-[white] font-bold py-2 px-4 rounded ease-linear transition-all duration-150"
              onClick={() => setShowModal3(true)}
            >
              {jobs[3].button}
            </button>
          </motion.div>

          <motion.div className="text-center mx-auto">
            <img
              className="mx-auto mt-10 h-[80px] w-[80px]"
              alt={jobs[4].alt}
              src={jobs[4].img}
            />
            <h3 className="my-5 text-[white] text-[20px] font-bold max-w-[300px]">
              {jobs[4].title}
            </h3>
            <p className="my-5 text-[white] max-w-[300px] h-[180px]">
              {jobs[4].text}
            </p>

            <button
              className="bg-white w-[300px] cursor-pointer hover:bg-[#cbcbcb] hover:text-[white] font-bold py-2 px-4 rounded ease-linear transition-all duration-150"
              onClick={() => setShowModal4(true)}
            >
              {jobs[4].button}
            </button>
          </motion.div>
        </motion.div>

        {showModal ? (
          <>
            <motion.div
              className="justify-center items-center flex modal-open-animation overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div
                  ref={modal}
                  className="border-0 rounded-lg shadow-lg relative flex flex-col mx-[15px] bg-[#013754] text-white outline-none focus:outline-none"
                >
                  <motion.div
                    className="flex items-center justify-center p-5 border-b border-solid border-slate-200 rounded-t"
                    variants={item}
                  >
                    <h3 className="text-3xl font-semibold">
                      {textModal[0].title}
                    </h3>
                  </motion.div>

                  <motion.div
                    className="relative p-6 flex flex-wrap"
                    variants={item}
                  >
                    {laborLaw.map((item) => (
                      <div className="p-3 mx-auto" key={item.id}>
                        <img
                          className="mx-auto h-[60px] mb-3"
                          src={item.icon}
                        />
                        <p className="text-center">{item.text}</p>
                      </div>
                    ))}
                  </motion.div>
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="flex w-full justify-center shadow bg-white text-black hover:bg-[#cbcbcb] hover:text-[white] rounded-xl font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => {
                        setShowModal(false);
                      }}
                    >
                      Fechar
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black" />
          </>
        ) : null}

        {showModal1 ? (
          <>
            <motion.div
              className="justify-center items-center flex modal-open-animation overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div
                  ref={modal}
                  className="border-0 rounded-lg shadow-lg relative flex flex-col mx-[15px] bg-[#013754] text-white outline-none focus:outline-none"
                >
                  <motion.div
                    className="flex items-center justify-center p-5 border-b border-solid border-slate-200 rounded-t"
                    variants={item}
                  >
                    <h3 className="text-3xl font-semibold text-center">
                      {textModal[1].title}
                    </h3>
                  </motion.div>

                  <motion.div
                    className="relative p-6 flex sm:flex-wrap sm:p-0 md:flex-wrap"
                    variants={item}
                  >
                    {consumerLaw.map((item) => (
                      <div className="p-3 mx-auto" key={item.id}>
                        <img
                          className="mx-auto h-[60px] mb-3"
                          src={item.icon}
                        />
                        <p className="text-center">{item.text}</p>
                      </div>
                    ))}
                  </motion.div>
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="flex w-full justify-center shadow bg-white text-black hover:bg-[#cbcbcb] hover:text-[white] rounded-xl font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => {
                        setShowModal1(false);
                      }}
                    >
                      Fechar
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black" />
          </>
        ) : null}

        {showModal2 ? (
          <>
            <motion.div
              className="justify-center items-center flex modal-open-animation overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div
                  ref={modal}
                  className="border-0 rounded-lg shadow-lg relative flex flex-col mx-[15px] bg-[#013754] text-white outline-none focus:outline-none"
                >
                  <motion.div
                    className="flex items-center justify-center p-5 border-b border-solid border-slate-200 rounded-t"
                    variants={item}
                  >
                    <h3 className="text-3xl font-semibold">
                      {textModal[2].title}
                    </h3>
                  </motion.div>

                  <motion.div
                    className="relative p-6 flex md:flex-wrap sm:flex-wrap sm:p-0"
                    variants={item}
                  >
                    {familyLaw.map((item) => (
                      <div className="p-3 mx-auto" key={item.id}>
                        <img
                          className="mx-auto h-[60px] mb-3"
                          src={item.icon}
                        />
                        <p className="text-center">{item.text}</p>
                      </div>
                    ))}
                  </motion.div>
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="flex w-full justify-center shadow bg-white text-black hover:bg-[#cbcbcb] hover:text-[white] rounded-xl font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => {
                        setShowModal2(false);
                      }}
                    >
                      Fechar
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black" />
          </>
        ) : null}

        {showModal3 ? (
          <>
            <motion.div
              className="justify-center items-center flex modal-open-animation overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div
                  ref={modal}
                  className="border-0 rounded-lg shadow-lg relative flex flex-col mx-[15px] bg-[#013754] text-white outline-none focus:outline-none"
                >
                  <motion.div
                    className="flex items-center justify-center p-5 border-b border-solid border-slate-200 rounded-t"
                    variants={item}
                  >
                    <h3 className="text-3xl font-semibold">
                      {textModal[3].title}
                    </h3>
                  </motion.div>

                  <motion.div
                    className="relative p-6 flex flex-wrap sm:p-0"
                    variants={item}
                  >
                    {civilLaw.map((item) => (
                      <div className="p-3 mx-auto" key={item.id}>
                        <img
                          className="mx-auto h-[60px] mb-3"
                          src={item.icon}
                        />
                        <p className="text-center w-[120px]">{item.text}</p>
                      </div>
                    ))}
                  </motion.div>
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="flex w-full justify-center shadow bg-white text-black hover:bg-[#cbcbcb] hover:text-[white] rounded-xl font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => {
                        setShowModal3(false);
                      }}
                    >
                      Fechar
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black" />
          </>
        ) : null}

        {showModal4 ? (
          <>
            <motion.div
              className="justify-center items-center flex modal-open-animation overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div
                  ref={modal}
                  className="border-0 rounded-lg shadow-lg relative flex flex-col mx-[15px] bg-[#013754] text-white outline-none focus:outline-none"
                >
                  <motion.div
                    className="flex items-center justify-center p-5 border-b border-solid border-slate-200 rounded-t"
                    variants={item}
                  >
                    <h3 className="text-3xl font-semibold">
                      {textModal[4].title}
                    </h3>
                  </motion.div>

                  <motion.div
                    className="relative p-6 flex flex-wrap sm:p-2"
                    variants={item}
                  >
                    {digitalLaw.map((item) => (
                      <div className="p-3 mx-auto" key={item.id}>
                        <img
                          className="mx-auto h-[60px] mb-3"
                          src={item.icon}
                        />
                        <p className="text-center">{item.text}</p>
                      </div>
                    ))}
                  </motion.div>
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="flex w-full justify-center shadow bg-white text-black hover:bg-[#cbcbcb] hover:text-[white] rounded-xl font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => {
                        setShowModal4(false);
                      }}
                    >
                      Fechar
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black" />
          </>
        ) : null}
      </motion.div>
    </>
  );
}
