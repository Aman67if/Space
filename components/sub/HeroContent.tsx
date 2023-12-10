"use client";

import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import Image from 'next/image';



const HeroContent = () => {
  return (
    <motion.div initial='hidden' animate='visible' className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'>
      <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
        <motion.div className='Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]' variants={slideInFromTop}>
          <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5 ' />
          <h1 className='Welcome-text text-[13px]'>Frontend Developer Portfolio</h1>
        </motion.div>
        <motion.div variants={slideInFromLeft(0.5)} className='flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto'>
          Aman Kumar
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mt-[-20px] ml-[-5px] text-[50px] md:text-[60px]'>Choudhary</span>
        </motion.div>
        <motion.p variants={slideInFromLeft(0.8)} className='text-lg text-gray-400 my-5 max-w-[600px]'>
          I&apos;m a Frontend Developer with a passion for creating beautiful and functional web applications. I&apos;ve worked on a variety of projects. I&apos;m always looking for new challenges and opportunities to grow as a developer. Let&apos;s work
        </motion.p>
        <motion.a variants={slideInFromLeft(1)} className='py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]'>
          Learn More!
        </motion.a>
      </div>
      <motion.div variants={slideInFromRight(0.8)} className='w-full h-full flex justify-center items-center'>
        <Image src='/mainIconsdark.svg' alt='work-icons' height={650} width={650}/>
      </motion.div>
    </motion.div>
  )
}

export default HeroContent