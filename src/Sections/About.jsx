import { about } from "../Constants";

export default function About() {
  return (
    <section className="w-full bg-[#00293F]">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1">
          <div className="mx-auto lg:my-auto">
            <img
              className="sm:rounded-full md:rounded-full lg:rounded-full"
              src="/guellas.png"
            />
          </div>

          <div className="mx-auto">
            <ul className="text-[white] text-[20px] list-disc py-10 max-w-[465px] sm:w-[315px] sm:text-[18px] sm:list-none sm:text-center md:list-none md:text-[18px] md:w-[380px] md:text-center lg:w-[370px]">
              <li className="mb-5">{about[0]}</li>
              <li>{about[1]}</li>
            </ul>
            <button
              className="w-[465px] bg-[white] h-[50px] text-[20px] font-bold 
            
            rounded-[20px] cursor-pointer hover:bg-[#cbcbcb] hover:text-[white] sm:w-[315px] md:w-[380px] lg:w-[370px] lg:mb-10"
            >
              {about[2]}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
