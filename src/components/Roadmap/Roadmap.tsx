import styles from './Roadmap.module.css'
import { UserItem } from './components/UserItem'

import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const PHASE1 = ['Presale Launch: Early birds catch the best prices on $Sponge.']

const PHASE2 = ['DEX Launch: Dive into decentralized exchanges.']

const PHASE3 = [
  'Farming & Burning: Enhance your holdings with our fun farming and burning strategies.',
]

const PHASE4 = [
  'CEX Listings + NFTs + Game: Join the hustle with centralized exchange listings, unique NFTs, and a Sponge-themed game.',
]

const PHASE5 = [
  'Top-Tier Listings: Elevate $Sponge to new heights with tier-1 exchange listings.',
]

const PHASE6 = [
  'Rewards and Raffles: Enjoy exclusive rewards and raffles for loyal $Sponge holders.',
]

export const Roadmap = () => {
  const welcome = useRef<HTMLDivElement>(null)
  const textContent = useRef<HTMLDivElement>(null)
  const person = useRef<HTMLImageElement>(null)

  useEffect(() => {
    gsap.fromTo(
      welcome.current,
      { opacity: 0, scale: 0.2 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: welcome.current,
        },
      }
    )
    gsap.fromTo(
      textContent.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: textContent.current,
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
    <section id='roadmap' className='w-full relative h-[2421px]'>
      <img
        src='./roadmap-bg.png'
        alt=''
        className='absolute top-0 left-0 w-full h-full object-cover xl:object-fill z-[-1]'
      />
      <div
        ref={welcome}
        className='absolute w-full xl:w-auto -top-20 md:-top-44 xl:top-0 z-30 left-1/2 -translate-x-1/2'
      >
        <img src='./welcome.png' alt='' className='w-full xl:w-[576px] ' />
      </div>
      <div className='absolute w-full h-[1656px]  xl:overflow-x-hidden top-1/2 -translate-y-1/2 left-0 '>
        <div className='w-full px-8  xl:px-0 h-full mt-10 xl:mt-0 relative'>
          <img
            src='./road-map-line.png'
            alt=''
            className='w-auto h-full hidden xl:inline-block '
          />
          <UserItem
            userName='Bikini Bottom Dive'
            title='Phase 1'
            lists={PHASE1}
            className='top-[170px] right-[-150px] w-full'
          />
          <UserItem
            title='Phase 2'
            lists={PHASE2}
            userName='Ocean Splash'
            className='top-[360px] right-[-330px] w-full'
          />
          <UserItem
            title='Phase 3'
            lists={PHASE3}
            userName='Jellyfishing Fun'
            className='top-[600px] right-[-430px] w-full'
          />
          <UserItem
            title='Phase 4'
            lists={PHASE4}
            userName='Krusty Krab Hustle'
            className='bottom-[620px] right-[-430px] w-full'
          />
          <UserItem
            title='Phase 5'
            lists={PHASE5}
            userName='High Tides'
            className='bottom-[350px] right-[-320px] w-full'
          />

          <UserItem
            title='Phase 6'
            lists={PHASE6}
            userName='Golden Pineapple'
            className='bottom-[150px] right-[-110px] w-full'
          />
        </div>
      </div>

      <div
        className='absolute hidden xl:inline-block left-0 top-1/2
      -translate-y-1/2'
      >
        <img src='./road-map-person.png' alt='' ref={person} />
      </div>
      <div
        ref={textContent}
        className='container px-5 xl:px-0 pt-32 xl:pt-[240px]'
      >
        <h1 className='text-[23px] xl:text-7xl text-[#D9D9D9] luckiest font-normal xl:leading-[100px] text-left'>
          OUR ROAD MAP
        </h1>
        <p className=' text-[14px] xl:text-lg w-full xl:w-[60%] paytone text-[#F3D583] font-normal xl:leading-[30px] text-left'>
          Patrick, Mr. Krabs, and even Squidward invested in $SWS, each dreaming
          of riches. As word spread, $SWS became popular across the ocean,
          bringing the whimsical world of Bikini Bottom to the high-stakes arena
          of digital finance, transforming SpongeBob into the Sponge of
          Wallstreet.
        </p>
      </div>
      <div
        className={`${styles.blur} h-[290px] w-[150%] translate-x-[-20%] absolute z-20 -bottom-20`}
      ></div>
    </section>
  )
}
