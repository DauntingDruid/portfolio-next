import Image from 'next/image'
import React from 'react'


const Bottomnav = () => {
  return (
    <div className='xs:flex-row sm:flex w-full justify-evenly'>
      <a className='cursor-none flex justify-center' download="AbhishekTomar_resume.pdf" href="../../assets/file/AbhishekTomar_resume.pdf">
        <Image width={80} height={80} src='/assets/img/applicant.png' className='ease-in-out duration-150 hover:scale-125'  alt="resume" />
      </a>
      <a className='cursor-none flex justify-center' href="https://github.com/DauntingDruid" target="_blank">
        <Image width={80} height={80} src='/assets/img/github.png' className='ease-in-out duration-150 hover:scale-125'  alt="github" />
      </a>
      <a className='cursor-none flex justify-center' href="https://www.linkedin.com/in/abhishek-tomar-07" target="_blank">
        <Image width={80} height={80} src='/assets/img/linkedin.png' className='ease-in-out duration-150 hover:scale-125'  alt="linkedin" />
      </a>
    </div>
  )
}

export default Bottomnav