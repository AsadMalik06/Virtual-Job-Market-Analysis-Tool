import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='bg-white flex justify-between items-center  h-16'>

      <Link href="/">  <div className="logo flex md:gap-4 items-center">
        <h1 className='text-3xl font-serif   hidden md:block text-green-900 font-bold cursor-pointer ml-5'>HireTask</h1>
        <p className='cursor-pointer hidden md:block'>Hire or get Hired!</p>
      </div></Link>

      <ul className='flex  justify-center gap-6  font-bold  items-center '>
      <Link href="/"> <li className='hover:scale-105 transition-all cursor-pointer'>Home</li>    </Link>
        <Link href="/Worker">  <li className='hover:scale-105 transition-all cursor-pointer'>Skills Tracker</li></Link>
 
        <Link href="/About"> <li className='hover:scale-105 transition-all cursor-pointer'>About me</li>    </Link>
     
        <Link href="/Admin">  <div className='bg-green-700 mr-4 hidden md:flex  text-white py-1 px-4 rounded hover:bg-green-800 cursor-pointer'>Post Job</div> </Link>


      </ul>



         <div className='bg-green-700 mr-4 md:hidden  text-white py-1 px-2 rounded hover:bg-green-800 cursor-pointer'>
        
        
         <Link href="/Admin">  Post Job  </Link>
        
        
        </div>
        
        
      

    </nav>
  )
}

export default Navbar