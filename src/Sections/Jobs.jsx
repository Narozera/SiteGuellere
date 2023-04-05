import Carousel from "../Components/Carousel/Carousel";
import { jobs, titleJobs } from "../Constants";

export default function Jobs() {
  return (
    <section className="w-full bg-[#00293F] font-roboto">
      <div className="container mx-auto bg-[#013754] rounded-[20px] py-[40px]">
        <h1 className="w-[650px] font-black text-[32px] text-center mx-auto text-[white] sm:w-[280px] sm:text-[22px] md:w-[300px] md:text-[22px]">
          {titleJobs[0]}
        </h1>
        <Carousel />
      </div>
    </section>
  );
}
