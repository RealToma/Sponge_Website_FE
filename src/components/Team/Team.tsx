import styles from './Team.module.css'
export const Team = () => {
  return (
    <section className='w-full h-screen md:h-[1471px] relative' id='team'>
      <img
        src='./team-bg.png'
        alt=''
        className='w-full h-full z-[-1] object-cover xl:object-fill  '
      />
      <div className='absolute top-[-50px]  xl:top-[-150px] -translate-x-1/2 left-[43%] '>
        <img
          src='./team-img-1.png'
          alt=''
          data-aos='zoom-in'
          className='w-[520px] '
        />
      </div>
      <div className='absolute bottom-[100px] md:bottom-[250px] xl:bottom-[100px] w-full flex flex-col items-center'>
        <h1 className=' text-[28px] xl:text-7xl font-normal xl:leading-[100px] text-left text-white luckiest'>
          Team
        </h1>
        <img
          data-aos='fade-up'
          src='./team.png'
          alt=''
          className=' w-full xl:w-[901px]'
        />
      </div>
      <div
        className={`w-full h-[81px] ${styles.blur} absolute -bottom-5 `}
      ></div>
    </section>
  )
}
