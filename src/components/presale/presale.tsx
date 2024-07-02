import { Button } from '../../common'
import styles from './presale.module.css'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export const Presale = () => {
  const card = useRef<HTMLDivElement>(null)
  const person = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.fromTo(
      card.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: card.current,
        },
      }
    )

    gsap.fromTo(
      person.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: person.current,
        },
      }
    )
  }, [])

  return (
    <section className='w-full min-h-screen xl:h-[958px] relative'>
      <div className='container flex-col-reverse xl:flex-row h-full flex px-5 xl:px-0'>
        <div
          ref={person}
          className='z-[101] w-full xl:w-[40%] h-full flex xl:pb-0 pb-36 items-center justify-start'
        >
          <img className='' src='./presale-person-1.png' alt='' />
        </div>
        <div ref={card} className='z-[101]  w-full xl:w-[60%] h-full flex items-center'>
          <div
            className={`${styles.wood_card} pb-[160px]   pt-[160px] xl:pt-[208px] flex flex-col items-center w-full xl:pb-[201px] pl-[80px] pr-[80px] xl:pl-[134px] xl:pr-[140px]`}
          >
            <h1 className=' text-[14px] md:text-[28px] xl:text-[40px] text-[#663C0C] luckiest font-normal leading-10 text-center'>
              presale
            </h1>
            <p className=' md:w-[40%] xl:w-auto mb-2 leading-3 text-[10px] md:text-[15px] xl:text-2xl xl:mt-[21px] xl:mb-[58px] text-[#263D6B] paytone font-normal xl:leading-[33.5px] text-center'>
              Join our presale to be part of something big, and keep an eye out
              for upcoming airdrops to fill your treasure chest with valuable
              coins!
            </p>
            <Button
              className='montserrat transition-all duration-500 text-[8px] hover:!text-[#070707] hover:!bg-white md:!text-[10px]  xl:!text-xl !px-5 !pt-1 !pb-2 xl:!px-[29px] xl:!pt-[14px] xl:!pb-[19px] !font-[600] !bg-[#070707] !text-white'
              borderColor='#F3D583'
            >
              JOIN NOW
            </Button>
          </div>
        </div>
      </div>
      <img
        src='./presale.png'
        alt=''
        className='absolute top-0 left-0 w-full h-full z-[-1] object-cover xl:object-fill'
      />
      <div
        className={`${styles.blur} w-[300%] left-[-150px] translate-x-[-20%] z-10 h-[70px] xl:h-[110px] absolute -bottom-10 `}
      ></div>
      <img
        src='./presale-line.png'
        alt=''
        className='absolute -bottom-11 z-10'
      />
    </section>
  )
}
