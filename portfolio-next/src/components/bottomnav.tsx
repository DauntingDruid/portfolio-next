import React from 'react'


const Bottomnav = () => {
  return (
    <div className='flex w-full justify-evenly'>
      <a download="AbhishekTomar_resume.pdf" href="../../assets/file/AbhishekTomar_resume.pdf">
        <img className='h-20 ease-in-out duration-150 hover:scale-125' src='../../assets/img/applicant.png' alt="linkedin" />
      </a>
      <a href="https://github.com/DauntingDruid" target="_blank">
        <img className='h-20 ease-in-out duration-150 hover:scale-125' src='../../assets/img/github.png' alt="github" />
      </a>
      <a href="https://www.linkedin.com/in/abhishek-tomar-07" target="_blank">
        <img className='h-20 ease-in-out duration-150 hover:scale-125' src='../../assets/img/linkedin.png' alt="linkedin" />
      </a>
    </div>
  )
}

export default Bottomnav