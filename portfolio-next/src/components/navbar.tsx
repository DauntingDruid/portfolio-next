import React from 'react'


const Navbar = () => {
  return (
    <nav className='container mx-auto'>
        <div className='flex justify-between'>
        <div>
            <a href="#" className='text-white ease-in-out duration-300 hover:line-through hover:text-lg hover:text-fuchsia-600'>Abhishek Tomar</a>
        </div>
        <div className='flex'>
            {/* <div className="mx-3">
                <a href="#">Home</a>
            </div>
            <div className="mx-3">
                <a href="#">Projects</a>
            </div>
            <div className="mx-3">
                <a href="#">Contact</a>
            </div> */}
            <img className='w-50 h-10 ease-in-out duration-150 hover:scale-125' src='../../assets/img/paper.png' alt="send mail" />
        </div>
        </div>
    </nav>
  )
}

export default Navbar