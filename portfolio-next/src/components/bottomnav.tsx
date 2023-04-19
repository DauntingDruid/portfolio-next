import React from 'react'


const Bottomnav = () => {
  return (
    <div className='flex w-full justify-evenly'>
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