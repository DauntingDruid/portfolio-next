import React from 'react'

const Navbar = () => {
  return (
    <nav className='container mx-auto'>
        <div className='flex justify-between'>
        <div>
            <a href="#">Abhishek Tomar</a>
        </div>
        <div className='flex'>
            <div className="mx-3">
                <a href="#">Home</a>
            </div>
            <div className="mx-3">
                <a href="#">Projects</a>
            </div>
            <div className="mx-3">
                <a href="#">Contact</a>
            </div>
        </div>
        </div>
    </nav>
  )
}

export default Navbar