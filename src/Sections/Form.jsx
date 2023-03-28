import { form } from "../Constants";
import Maps from "../Components/Maps";

export default function Form() {
  return (
    <section className="w-full bg-[#00293F]">
      <div className="container mx-auto bg-[#FFFAFA] rounded-[20px]">
        <div className="grid grid-cols-2">
          <div>
            <Maps />
          </div>

          <div>
            <h3>{form[0]}</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
