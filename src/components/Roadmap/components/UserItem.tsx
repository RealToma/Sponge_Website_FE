import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export const UserItem = ({
  className,
  title,
  lists,
  userName,
}: {
  className?: string
  title: string
  lists: string[]
  userName: string
}) => {
  const container = useRef<HTMLDivElement>(null)
  useEffect(() => {
    gsap.fromTo(
      container.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: container.current,
        },
      }
    )
  })
  return (
    <div
      ref={container}
      className={`flex w-full flex-col mt-10 xl:mt-0 xl:flex-row static  xl:absolute gap-x-[7px] items-start ${className} `}
    >
      <div className='flex items-start'>
        <img
          className=' w-[80px] h-[80px] xl:w-[158px] xl:h-[158px]'
          src='/avatar.png'
          alt=''
        />
        <div className='w-[184px] h-full flex flex-col justify-start'>
          <p className='text-white ml-[10px] paytone text-3xl font-normal leading-[100px] tracking-[11%] text-left'>
            {title}
          </p>
          <div className='w-full hidden xl:flex items-center'>
            <div className=' w-full border-b-[2px] border-b-[#9A9A9A] border-dashed  '></div>
            <div className='w-[5px] h-[5px] rounded-full bg-[#9A9A9A]'></div>
          </div>
        </div>
      </div>
      <div className='flex  pt-7 flex-col '>
        <div className='flex items-center gap-x-3'>
          <img src='/avatar.png' className='w-[39px] h-[39px]' />
          <p className='text-[#F3D583] paytone text-xl not-italic font-normal leading-[normal]'>
            {userName}
          </p>
        </div>
        <div className='pt-5'>
          {lists.map((list: string, index: number) => (
            <p
              key={index}
              className='flex w-full xl:w-[100%] gap-x-[13px] text-white paytone items-center text-[16px] font-normal leading-[27.92px] text-left '
            >
              {list}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
