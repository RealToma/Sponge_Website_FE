import { Button } from '../../common'
import styles from './Time.module.css'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export const Time = () => {
  const time = useRef<HTMLDivElement>(null)
  const person = useRef<HTMLImageElement>(null)

  useEffect(() => {
    gsap.fromTo(
      time.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: time.current,
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
    <section className='w-full min-h-screen xl:h-[1083px] relative '>
      <img
        src='./time-bg.png'
        alt=''
        className='absolute top-0 z-[-1] left-0 object-cover xl:object-fill w-full h-full'
      />
      <div className='w-full pb-10 px-5 xl:px-0 container flex xl:flex-row flex-col h-full'>
        <div ref={person} className=' w-full xl:w-1/2 h-full relative'>
          <img
            src='./presale-person.png'
            alt=''
            className=' static xl:absolute -bottom-0 h-[400px] xl:h-[600px] w-[400px] left-40'
          />
        </div>
        <div className=' w-full xl:w-1/2 h-full flex items-center justify-center'>
          <div
            ref={time}
            className='bg-[#F9D68F] w-full px-[20px] xl:px-[97px] flex flex-col rounded-[40px] pb-[24px] pt-[42px]'
          >
            <img
              src='./time-avatar.png'
              alt=''
              className=' w-[150px] m-auto xl:w-[345px] h-[150px] xl:h-[345px]'
            />
            <div className='w-full flex justify-center'>
              <h1 className='text-[28px] mt-[14px] font-normal leading-10 paytone'>
                Auction Ending in
              </h1>
            </div>
            <div className='flex m-auto mt-[17px] gap-x-[23px]'>
              <div className='flex flex-col items-center'>
                <div className='flex gap-x-[7px]'>
                  <div className=' w-[26px] xl:w-[42px] gabriela h-[42px] xl:h-[78px] bg-black  text-white flex items-center justify-center rounded-[4px] text-[28px] font-normal leading-5'>
                    0
                  </div>
                  <div className=' w-[26px] xl:w-[42px] gabriela h-[42px] xl:h-[78px] bg-black  text-white flex items-center justify-center rounded-[4px] text-[28px] font-normal leading-5'>
                    0
                  </div>
                </div>
                <p className='text-xl font-normal leading-5 paytone mt-[17px]'>
                  Day
                </p>
              </div>

              <div className='flex flex-col items-center'>
                <div className='flex gap-x-[7px]'>
                  <div className=' w-[26px] xl:w-[42px] gabriela h-[42px] xl:h-[78px] bg-black  text-white flex items-center justify-center rounded-[4px] text-[28px] font-normal leading-5'>
                    0
                  </div>
                  <div className=' w-[26px] xl:w-[42px] gabriela h-[42px] xl:h-[78px] bg-black  text-white flex items-center justify-center rounded-[4px] text-[28px] font-normal leading-5'>
                    0
                  </div>
                </div>
                <p className='text-xl font-normal leading-5 paytone mt-[17px]'>
                  Hours
                </p>
              </div>

              <div className='flex flex-col items-center'>
                <div className='flex gap-x-[7px]'>
                  <div className=' w-[26px] xl:w-[42px] gabriela h-[42px] xl:h-[78px] bg-black  text-white flex items-center justify-center rounded-[4px] text-[28px] font-normal leading-5'>
                    0
                  </div>
                  <div className=' w-[26px] xl:w-[42px] gabriela h-[42px] xl:h-[78px] bg-black  text-white flex items-center justify-center rounded-[4px] text-[28px] font-normal leading-5'>
                    0
                  </div>
                </div>
                <p className='text-xl font-normal leading-5 paytone mt-[17px]'>
                  Min
                </p>
              </div>

              <div className='flex flex-col items-center'>
                <div className='flex gap-x-[7px]'>
                  <div className=' w-[26px] xl:w-[42px] gabriela h-[42px] xl:h-[78px] bg-black  text-white flex items-center justify-center rounded-[4px] text-[28px] font-normal leading-5'>
                    0
                  </div>
                  <div className=' w-[26px] xl:w-[42px] gabriela h-[42px] xl:h-[78px] bg-black  text-white flex items-center justify-center rounded-[4px] text-[28px] font-normal leading-5'>
                    0
                  </div>
                </div>
                <p className='text-xl font-normal leading-5 paytone mt-[17px]'>
                  Sec
                </p>
              </div>
            </div>

            <div className='w-[60%] m-auto mt-[28px] mb-[29px] h-[12px] bg-[#D9D9D9] overflow-hidden rounded-[20px] relative '>
              <div className='w-1/2 h-full bg-[#B89664] rounded-[20px]' />
            </div>

            <div className='grid gap-x-[52px] gap-y-[16px] mb-[27px] grid-cols-1 xl:grid-cols-2'>
              <Button
                borderColor='#FEBA00'
                className='!w-full !text-white  !bg-[#ED9D34]'
              >
                Start Date: 10.10.2024
              </Button>
              <Button
                borderColor='#FEBA00'
                className='!w-full !text-white !bg-[#ED9D34]'
              >
                End Date: 12.10.2024
              </Button>
              <Button
                borderColor='#FEBA00'
                className='!w-full !text-white !bg-[#ED9D34]'
              >
                Total coin : 5609089
              </Button>
              <Button
                borderColor='#FEBA00'
                className='!w-full !text-white !bg-[#ED9D34]'
              >
                Presale Price: 7698
              </Button>
            </div>

            <div className='w-full flex justify-center pt-[20px] border-t border-[#263D6B]'>
              <div className='py-[18px] w-full flex items-center  justify-between px-[27px] rounded-full bg-[#B65700]'>
                <p className='text-[#F9EFCB] paytone text-justify text-[14px] xl:text-base not-italic font-normal leading-[normal]'>
                  Presale Address - Solana
                </p>
                <button className='py-2 px-5 xl:px-9 rounded-[16px] text-[#231F20] text-xs not-italic font-bold leading-[normal] bg-[#CFA53C]'>
                  Copy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${styles.blur} w-full h-[70px] xl:h-[113px] absolute -bottom-10 `}
      ></div>
    </section>
  )
}
