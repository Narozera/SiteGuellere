import Carousel from "../Components/Carousel/Carousel";
import { jobs, titleJobs } from "../Constants";

export default function Jobs() {
  return (
    <section className="w-full bg-[#00293F]">
      <div className="container mx-auto bg-[#013754] rounded-[20px] py-[40px]">
        <h1 className="w-[650px] font-bold text-[32px] text-center mx-auto text-[white] sm:w-[280px] sm:text-[22px] md:w-[300px] md:text-[22px]">
          {titleJobs[0]}
        </h1>
        <Carousel />
        {/* <div className="flex flex-wrap overflow-hidden mx-auto max-w-[1100px] gap-12 cursor-grab">
          {jobs.map((item) => (
            <div key={item.id} className="text-center mx-auto">
              <img
                className="mx-auto mt-10 h-[80px] w-[80px]"
                alt={item.alt}
                src={item.img}
              />
              <h3 className="my-5 text-[white] text-[20px] font-bold max-w-[300px] sm:max-w-[230px] lg:w-[330px]">
                {item.title}
              </h3>
              <p className="my-5 text-[white] max-w-[300px] h-[180px] sm:max-w-[230px] lg:w-[330px]">
                {item.text}
              </p>

              <button className="bg-white w-[300px] cursor-pointer hover:bg-[#cbcbcb] hover:text-[white] font-bold py-2 px-4 rounded">
                {item.button}
              </button>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
