import styles from './Welcom.module.css'

export const Welcome = () => {
  return (
    <section
      id='home'
      className='w-full relative flex items-center justify-center min-h-screen'
    >
      <img
        src='./pre-welcome.png'
        alt=''
        className='z-[-2] absolute w-full h-full object-cover xl:object-fill top-0 left-0'
      />
      <div className='relative flex flex-col  items-center'>
        <h1
          className={`text-white ${styles.title} text-center text-[35px] xl:text-[75px] not-italic font-normal leading-[normal] luckiest`}
        >
          Welcome to the world <br /> of $Sponge
        </h1>
        <p
          className={` ${styles.text_shadow_subTitle} mt-[14px] text-white w-[70%] luckiest text-center text-[18px] xl:text-[35px] not-italic font-normal xl:leading-10`}
        >
          where the financial savvy of Wall Street meets the whimsical charm of
          Bikini Bottom. Dive into an ocean of opportunities with Spongebob and
          his friends as your guides.
        </p>
      </div>
      <div
        className={`${styles.blur} w-full h-[100px] xl:h-[158px] absolute -bottom-10 `}
      ></div>
    </section>
  )
}
