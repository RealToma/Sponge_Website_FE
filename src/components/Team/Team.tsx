export const Team = () => {
  return (
    <section className={` w-full h-[1471px]`}>
      <div className="w-full h-full relative">
        <div>
          <img
            src="./team-img-1.png"
            alt=""
            className="absolute h-[637px] top-[-330px] left-[43%] -translate-x-1/2"
          />
        </div>
        <div className="w-full h-full pt-[20rem] flex-col flex items-center justify-center">
          <h1 className="text-7xl luckiest text-white font-normal leading-[100px] text-center">
            Team
          </h1>
          <img src="./team.png" alt="" className="w-[901px]" />
        </div>
        <img
          src="./team-bg.png"
          alt=""
          className="absolute !h-full w-full top-0 left-0 object-fill z-[-1]"
        />
      </div>
    </section>
  );
};
