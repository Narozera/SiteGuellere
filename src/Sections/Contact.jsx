import Maps from "../Components/Maps";
import Form from "../Components/Form";

export default function Contact() {
  return (
    <section
      className="w-full bg-[#00293F] sm:py-5 md:py-5 font-roboto"
      id="contact"
    >
      <div className="container mx-auto bg-[#FFFAFA] rounded-[20px]">
        <div className="sm:grid-cols-1 md:grid-cols-1 grid grid-cols-2">
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
