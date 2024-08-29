import { SOCIALMEDIAS } from "../../constants/social-medias";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="z-[101] w-full bg-[#1E1E1E] pb-[25px] pt-10 xl:pt-[123px]"
    >
      <div className="container">
        <h1 className=" text-[28px] xl:text-7xl text-[#c23631] luckiest font-normal leading-[72px] text-center">
          Contact Us
        </h1>
        <p className=" text-base xl:text-lg mt-3 paytone font-normal text-[#EEEEEE] leading-6 text-center">
          Email us at{" "}
          <a href="#" className="text-[#c23631]">
            support@sponge.io
          </a>{" "}
          for any <br /> queries or support
        </p>
        <div className="flex pb-[48px] justify-center gap-x-6 mt-[28px]">
          {SOCIALMEDIAS.map((media, index) => (
            <a
              key={index}
              href={media.link}
              target="_blank"
              className="w-[40.39px] transition-all duration-500 footer_icon_hover hover:text-[#040F00] h-[40.39px] rounded-full border border-[#c23631] text-[#c23631] hover:border-transparent flex justify-center items-center"
            >
              {media.icon}
            </a>
          ))}
        </div>
        <div className="w-full h-[1px] footer_line" />
        <p className="text-center text-xs xl:text-base text-[#8C8B8B] font-normal leading-6  mt-[27px] paytone">
          &copy; 2024 All rights reserved by $SPONGE OF WALL STREET
        </p>
      </div>
    </section>
  );
};
