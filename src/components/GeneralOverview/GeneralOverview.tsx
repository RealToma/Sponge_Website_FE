import { Button } from '../../common'
import styles from './GeneralOverview.module.css'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export const GeneralOverview = () => {
  const person = useRef<HTMLImageElement>(null)
  const card = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.fromTo(
      person.current,
      { x: -50 },
      {
        x: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: person.current,
        },
      }
    )

    gsap.fromTo(
      card.current,
      { opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: card.current,
        },
      }
    )
  }, [])

  return (
    <section className='w-full xl:h-[1419px] relative '>
      <img
        src='./general-overview.png'
        alt=''
        className='w-full h-full object-cover xl:object-fill absolute top-0 left-0 z-[-1]'
      />
      <div className='w-full flex flex-col xl:flex-row items-end h-full container px-5 xl:px-0 '>
        <div
          ref={person}
          className=' w-full relative xl:w-1/2 h-full flex items-end pb-10'
        >
          <img
            src='./general.png'
            alt=''
            className=' w-[200px] xl:w-auto absolute bottom-[-400px] xl:static'
          />
        </div>
        <div className='w-full relative h-full xl:w-1/2'>
          <div
            ref={card}
            className=' h-full flex justify-center xl:justify-end items-end pb-0 xl:pb-20'
          >
            <div
              className={`w-[200px] h-[400px] xl:h-[614px] translate-y-20 xl:translate-y-0 pb-20 flex items-center justify-center flex-col relative xl:w-[798px] ${styles.bg} `}
            >
              <p className=' text-[10px] mt-10 xl:mt-0 xl:text-[20px] w-[40%] xl:w-[50%] font-normal paytone xl:leading-[23.83px] tracking-[-0.02em] text-center'>
                Hiya, pals! Welcome to my pineapple under the sea!
              </p>
              <p className=' text-[10px] xl:text-[20px] xl:my-[13px] text-[#FFFFFF] w-[55%] paytone font-normal xl:leading-[25.23px] tracking-[-0.03em] text-center'>
                I’m Spongebob, here to give you a cheerful overview of our
                fantastic memecoin project.
              </p>

              <Button
                className='montserrat transition-all duration-500 hover:!text-[#070707] hover:!bg-white !text-[8px] md:!text-[10px]  xl:!text-[18px] !px-5 !pt-1 !pb-2 xl:!px-[29px] xl:!pt-[14px] xl:!pb-[19px] !font-[600] !bg-[#070707] !text-white'
                borderColor='#F3D583'
              >
                MORE INFO
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`w-full h-[68px] absolute -bottom-10 ${styles.blur} `}
      ></div>
    </section>
  )
}
