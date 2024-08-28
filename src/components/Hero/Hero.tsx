import styles from "./Hero.module.css";
export const Hero = () => {
  return (
    <section id="home" className={`min-h-screen xl:h-[1080px]  relative `}>
      <div className="w-full container flex justify-center lg:pt-[300px] pt-[150px] px-5 xl:px-0 h-full">
        <div className="w-full flex flex-col items-center z-[101]">
          <h1
            className={`${styles.title_shadow} text-[#F3D583] w-[90%] md:w-[75%] xl:w-[70%] luckiest text-center text-[50px] sm:text-[60px] md:text-[65px] xl:text-[75px] not-italic font-normal leading-[111.425%]`}
            >
            Welcome to the world of $SPONGE OF WALL STREET
          </h1>
          <p className="text-[#F3D583] text-center luckiest mt-[20px] xl:mt-[50px] sm:mt-[40px] md:mt-[40px] xl:w-[80%] w-[100%] text-[18px] sm:text-[25px] md:text-[30px] xl:text-[35px] not-italic font-normal leading-[111.425%]">
            where the financial savvy of Wall Street meets the whimsical charm
            of Bikini Bottom. Dive into an ocean of opportunities with Spongebob
            and his friends as your guides.
          </p>
        </div>
      </div>
      <div
        className={`${styles.blur} w-[300%] left-[-150px] translate-x-[-20%] h-[100px] xl:h-[150px] absolute -bottom-12 xl:-bottom-14`}
      ></div>
      <img
        src="/hero-bg.jpg"
        className="absolute w-full top-0  h-full z-[-1] object-cover xl:object-fill"
        alt=""
      />
    </section>
  );
};
