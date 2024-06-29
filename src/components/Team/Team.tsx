import styles from "./Team.module.css";
export const Team = () => {
  return (
    <section className="w-full h-screen xl:h-[1471px] relative">
      <img
        src="./team-bg.png"
        alt=""
        className="w-full h-full z-[-1] object-cover xl:object-fill  "
      />
      <img
        src="./team-img-1.png"
        alt=""
        className="absolute top-[-172px] w-[520px] -translate-x-1/2 left-[43%] "
      />
      <div className="absolute bottom-[200px] xl:bottom-[100px] w-full flex flex-col items-center">
        <h1 className=" text-[28px] xl:text-7xl font-normal xl:leading-[100px] text-left text-white luckiest">
          Team
        </h1>
        <img src="./team.png" alt="" className="w-[901px]" />
      </div>
      <div
        className={`w-full h-[81px] ${styles.blur} absolute -bottom-5 `}
      ></div>
    </section>
  );
};
