import { form } from "../Constants";
import Maps from "../Components/Maps";
import Form from "../Components/Form";

export default function Contact() {
  return (
    <section className="w-full bg-[#00293F]">
      <div className="container mx-auto bg-[#FFFAFA] rounded-[20px]">
        <div className="grid grid-cols-2">
          <div className="rounded-[20px]">
            <Maps />
          </div>
          <div>
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
}
