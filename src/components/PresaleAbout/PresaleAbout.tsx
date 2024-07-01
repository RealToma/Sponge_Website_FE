import { Button } from '../../common'
import styles from './PresaleAbout.module.css'

import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export const PresaleAbout = () => {
  const presaleAbout = useRef<HTMLDivElement>(null)

  const cards = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.fromTo(
      presaleAbout.current,
      { opacity: 0 },
      {
        opacity: 1,
        scale: 1,
        duration: 2,
        scrollTrigger: {
          trigger: presaleAbout.current,
        },
      }
    )

    gsap.fromTo(
      cards.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        scrollTrigger: {
          trigger: cards.current,
        },
      }
    )
  }, [])

  return (
    <section className='w-full h-[898px] relative'>
      <img
        src='./presale-about-bg.png'
        alt=''
        className=' absolute top-0  z-[-1] w-full h-full object-cover xl:object-fill'
      />
      <div className='w-full gap-x-[23px] pb-10 xl:pb-0 pt-10 gap-y-4 xl:gap-y-0 h-full container px-5 xl:px-0 flex xl:flex-row flex-col'>
        <div className=' w-full xl:w-1/2 h-full'>
          <div
            ref={presaleAbout}
            className={` flex items-center flex-col justify-center w-full h-full ${styles.card}`}
          >
            <h1 className=' text-[24px] xl:text-[35px] text-[#AF6D27] luckiest font-normal leading-[35px] text-center'>
              Presale
            </h1>
            <p className=' text-[8px] xl:text-2xl w-[60%] md:w-[50%] xl:w-[70%] mt-3 xl:mt-[18px] mb-2 xl:mb-[37px] paytone text-[#263D6B] font-normal xl:leading-[33.5px] text-center'>
              Get ready to be part of an exciting journey with our memecoin.
              Here’s everything you need to know about our presale
            </p>
            <Button
              className='montserrat transition-all duration-500 hover:!bg-white hover:!text-[#070707] text-[8px] md:!text-[10px]  xl:!text-xl !px-5 !pt-1 !pb-2 xl:!px-[29px] xl:!pt-[14px] xl:!pb-[19px] !font-[600] !bg-[#070707] !text-white'
              borderColor='#F3D583'
            >
              Presale now
            </Button>
          </div>
        </div>
        <div className=' w-full xl:w-1/2 h-full flex items-center '>
          <div
            ref={cards}
            className='flex flex-col xl:flex-row flex-wrap justify-around gap-x-[26px] gap-y-[29px]'
          >
            <div className=' w-full xl:w-[45%] py-[25px] px-[32px] flex flex-col justify-center items-center rounded-[27px] bg-[#F3D583]'>
              <Button
                className='luckiest transition-all duration-500 hover:!bg-white  hover:!text-[#070707]  text-[8px] md:!text-[10px]  xl:!text-xl !px-5 !pt-1 !pb-2 xl:!px-[29px] xl:!pt-[14px] xl:!pb-[19px] !font-[600] !bg-[#070707] !text-[#C57E33]'
                borderColor='#FEBA00'
              >
                Presale Wallet
              </Button>
              <p className=' text-base xl:text-xl font-normal paytone leading-[27.92px] text-center'>
                Deposit your investment to our official Solana wallet address:
                solana_wallet_address.
              </p>
            </div>
            <div className='w-full xl:w-[45%] py-[25px] px-[32px] flex flex-col justify-center items-center rounded-[27px] bg-[#F3D583]'>
              <Button
                className=' transition-all duration-500 luckiest hover:!bg-white  hover:!text-[#070707]  text-[8px] md:!text-[10px]  xl:!text-xl !px-5 !pt-1 !pb-2 xl:!px-[29px] xl:!pt-[14px] xl:!pb-[19px] !font-[600] !bg-[#070707] !text-[#C57E33]'
                borderColor='#FEBA00'
              >
                Limited Supply
              </Button>
              <p className='text-base xl:text-xl font-normal paytone leading-[27.92px] text-center'>
                Only a fixed number of coins will be available during the
                presale.
              </p>
            </div>
            <div className='w-full xl:w-[45%] py-[25px] px-[32px] flex flex-col justify-center items-center rounded-[27px] bg-[#F3D583]'>
              <Button
                className='luckiest transition-all duration-500 hover:!bg-white  hover:!text-[#070707]  text-[8px] md:!text-[10px]  xl:!text-xl !px-5 !pt-1 !pb-2 xl:!px-[29px] xl:!pt-[14px] xl:!pb-[19px] !font-[600] !bg-[#070707] !text-[#C57E33]'
                borderColor='#FEBA00'
              >
                Bonous
              </Button>
              <p className='ttext-base xl:ext-xl font-normal paytone leading-[27.92px] text-center'>
                Early participants will receive a bonus percentage of coins.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${styles.blur} w-full h-[70px] xl:h-[158px] absolute -bottom-12 `}
      ></div>
    </section>
  )
}
