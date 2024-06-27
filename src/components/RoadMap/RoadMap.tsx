import styles from "./RoadMap.module.css";
export const RoadMap = () => (
  <section className={`${styles.bg} w-full h-screen `}>
    <div className="w-full container">
      <h1 className="text-7xl font-normal text-[#D9D9D9] luckiest leading-[100px] text-left">
        OUR ROAD MAP
      </h1>
      <p className="text-lg text-[#F3D583] w-[55%] paytone font-normal leading-[30px] text-left">
        Patrick, Mr. Krabs, and even Squidward invested in $SWS, each dreaming
        of riches. As word spread, $SWS became popular across the ocean,
        bringing the whimsical world of Bikini Bottom to the high-stakes arena
        of digital finance, transforming SpongeBob into the Sponge of
        Wallstreet.
      </p>
      <img src="./road-map-line.png" alt="" />
      <div>
        <img src="./road-map-person.png" alt="" />
      </div>
    </div>
  </section>
);
