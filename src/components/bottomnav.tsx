import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Bottomnav = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }} className='xs:flex-row sm:flex xs:w-full justify-evenly  lg:w-9/12'>
      <a className='cursor-none hover:animate-pulse flex justify-center' download="AbhishekTomar_resume.pdf" href="../../assets/file/AbhishekTomar_resume.pdf">
        <Image width={80} height={80} src='/assets/img/applicant.png' className='ease-in-out duration-150 hover:scale-125'  alt="resume" />
      </a>
      <a className='cursor-none hover:animate-pulse flex justify-center' href="https://github.com/DauntingDruid" target="_blank">
        <Image width={80} height={80} src='/assets/img/github.png' className='ease-in-out duration-150 hover:scale-125'  alt="github" />
      </a>
      <a className='cursor-none hover:animate-pulse flex justify-center' href="https://www.linkedin.com/in/abhishek-tomar-07" target="_blank">
        <Image width={80} height={80} src='/assets/img/linkedin.png' className='ease-in-out duration-150 hover:scale-125'  alt="linkedin" />
      </a>
    </motion.div>
  )
}

export default Bottomnav