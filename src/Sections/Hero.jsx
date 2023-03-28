import { hero } from "../Constants";

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-[#00293F] px-[150px] py-10 grid grid-cols-3 h-[500px]"
    >
      <div className="flex justify-start">
        <h1 className="text-[white] font-bold text-[32px] text-center w-[320px]">
          {hero[0]}
        </h1>
      </div>

      <div className="flex justify-center">
        <img className="absolute top-[120px] h-[500px]" src="/img-hero.svg" />
        <img className="mt-30" src="balao-hero.svg" />
      </div>

      <div className="flex justify-end">
        <ul className="pr-[30px] text-[white] text-[18px] list-disc">
          <li className="w-[180px] my-[10px]">{hero[1]}</li>
          <li className="w-[180px]">{hero[2]}</li>
        </ul>
      </div>
    </section>
  );
}
