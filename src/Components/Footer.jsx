import { footerIcons, footerText, footerTitle } from "../Constants";

export default function Footer() {
  return (
    <footer className="w-full bg-[#00293F]">
      <div className="container mx-auto">
        <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-1">
          <div className="my-auto sm:mx-auto md:mx-auto">
            <img src="/logo.svg" />
          </div>

          <div className="mx-auto my-auto sm:text-center md:text-center">
            <ul>
              {footerText.map((item) => (
                <li
                  key={item.id}
                  className="my-[22px] text-[white] font-bold flex"
                >
                  <img className="px-2" src={item.icon} />
                  <a href={item.href}>{item.text}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mx-auto my-auto">
            <h3 className="text-center pb-2 text-[20px] text-white font-bold">
              {footerTitle[0]}
            </h3>
            <div className="flex">
              {footerIcons.map((item) => (
                <a key={item.id} href={item.href}>
                  <img
                    className="px-2 hover:text-[18px] sm:pb-5 md:pb-5"
                    src={item.icon}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
