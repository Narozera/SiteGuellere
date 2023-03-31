import { hero } from "../Constants";

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-[#00293F] lg:px-[0px] px-[150px] py-10 h-[500px] md:h-[470px]"
    >
      <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-1">
        <div className="flex justify-center">
          <h1 className="text-[white] font-bold text-[32px] text-center w-[320px] lg:text-[26px]">
            {hero[0]}
          </h1>
        </div>

        <div className="flex justify-center sm:hidden md:hidden">
          <img className="absolute top-[150px] h-[500px]" src="/img-hero.svg" />
          <img className="mt-30" src="balao-hero.svg" />
        </div>

        <div className="flex justify-end sm:justify-center md:justify-center">
          <ul className="text-[white] text-[18px] list-disc sm:text-center sm:pr-[5px] sm:list-none md:pr-[5px] md:list-none md:text-center lg:text-[16px] lg:pr-[5px] pr-[30px]">
            <li className="w-[180px] sm:w-[280px] md:w-[300px] my-[10px]">
              {hero[1]}
            </li>
            <li className="w-[180px] sm:w-[280px] md:w-[300px]">{hero[2]}</li>
          </ul>
        </div>
      </div>
    </section>
    // <section id="hero" className="bg-[#00293F] py-20">
    //   <div className="container mx-auto flex flex-wrap">
    //     <div className="sm:mx-auto md:mx-auto ">
    //       <h1 className="text-[white] font-bold text-[32px] text-center w-[320px] lg:text-[26px]">
    //         {hero[0]}
    //       </h1>
    //     </div>

    //     <div className="flex justify-center mx-auto sm:hidden md:hidden">
    //       <img className="absolute top-[150px] h-[500px]" src="/img-hero.svg" />
    //       <img className="mt-30" src="balao-hero.svg" />
    //     </div>

    //     <div className="sm:mx-auto md:mx-auto">
    //       <ul className="pr-[30px] text-[white] text-[18px] list-disc lg:text-[16px] sm:pt-5 md:pt-5">
    //         <li className="sm:w-[240px] md:w-[300px] w-[180px] my-[10px]">
    //           {hero[1]}
    //         </li>
    //         <li className="sm:w-[240px] md:w-[300px] w-[180px]">{hero[2]}</li>
    //       </ul>
    //     </div>
    //   </div>

    // </section>
  );
}
