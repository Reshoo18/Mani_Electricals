import React from 'react'

const Navbar = () => {
  return (
    <nav className='sticky top-0 bg-white border-b py-4'>
    <div className='max-w-7xl mx-auto flex justify-between items-center px-6'>
        <h2 className="text-2xl font-bold">Mani Electricals & Electronics</h2>
     <ul className='flex gap-8'>
        <li className="cursor-pointer hover:text-blue-600 transition" >Home</li>
        <li className="cursor-pointer hover:text-blue-600 transition">About</li>
        <li className="cursor-pointer hover:text-blue-600 transition">Services</li>
        <li className="cursor-pointer hover:text-blue-600 transition">Products</li>
        <li className="cursor-pointer hover:text-blue-600 transition">Contact</li>

     </ul>

       <button className='bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition duration-300'>Request a Quote</button>
    </div>
    </nav>
  )
}

export default Navbar
