import Image from 'next/image'
import React from 'react'


const Navbar = () => {
  return (
    <nav className='container mx-auto'>
        <div className='flex justify-between items-center'>
        <div>
            <a href="#" className='cursor-none text-white ease-in-out duration-300 hover:line-through hover:text-lg hover:text-fuchsia-600'>Abhishek Tomar</a>
        </div>
        <div className='flex items-center'>
            {/* <div className="mx-3">
                <a href="#">Home</a>
            </div>
            <div className="mx-3">
                <a href="#">Projects</a>
            </div>
            <div className="mx-3">
                <a href="#">Contact</a>
            </div> */}
            <div className='cursor-none flex items-center ease-in-out duration-300 hover:scale-110 hover:rotate-6'>
                <a href="mailto:abhishektomarwork@gmail.com" className='cursor-none text-white hover:line-through hover:text-blue-400'>Lets connect?</a>
                <Image width={40} height={40} src='/assets/img/paper.png' alt="send mail" />
            </div>
        </div>
        </div>
    </nav>
  )
}

export default Navbar