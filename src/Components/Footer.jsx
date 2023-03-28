import { footerIcons, footerText, footerTitle } from "../Constants";

export default function Footer() {
  return (
    <footer className="w-full bg-[#00293F]">
      <div className="container mx-auto">
        <div className="grid grid-cols-3">
          <div className="my-auto">
            <img src="/logo.svg" />
          </div>

          <div className="mx-auto my-auto">
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
                <a href={item.href}>
                  <img
                    className="px-2 hover:text-[18px]"
                    key={item.id}
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
