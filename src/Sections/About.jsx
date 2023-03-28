import { about } from "../Constants";

export default function About() {
  return (
    <section className="w-full bg-[#00293F]">
      <div className="container mx-auto">
        <div className="grid grid-cols-2">
          <div className="mx-auto">
            <img src="/guellas.png" />
          </div>
          <div className="mx-auto">
            <ul className="text-[white] text-[20px] list-disc py-10 max-w-[465px]">
              <li className="mb-5">{about[0]}</li>
              <li>{about[1]}</li>
            </ul>
            <button
              className="w-[465px] bg-[white] h-[50px] text-[20px] font-bold
            
            rounded-[20px] cursor-pointer hover:bg-[#cbcbcb] hover:text-[white]"
            >
              {about[2]}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
