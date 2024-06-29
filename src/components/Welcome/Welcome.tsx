import styles from "./Welcom.module.css";

export const Welcome = () => {
  return (
    <section
      id="home"
      className="w-full relative flex items-center justify-center min-h-[607px]"
    >
      <img
        src="./pre-welcome.png"
        alt=""
        className="z-[-2] absolute w-full h-full object-cover xl:object-fill top-0 left-0"
      />
      <div className="relative">
        <h1 className=" text-[28px] xl:text-7xl font-normal xl:leading-[72px] text-center text-[#FFFFFF] luckiest">
          Welcome to the Presale of <br /> Our Memecoin!
        </h1>
        <div
          className={` w-full h-full z-[-1] absolute top-0 ${styles.text_shadow}`}
        ></div>
      </div>
      <div
        className={`${styles.blur} w-full h-[100px] xl:h-[158px] absolute -bottom-10 `}
      ></div>
    </section>
  );
};
