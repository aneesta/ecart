import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
   <nav className= 'flex bg-blue-400 fixed w-full p-5 text-white'>
    <Link to={'/'}><i className="fa-solid fa-truck-fast"></i> Daily cart</Link>
    <ul className='flex-1 text-right'>
        <li className='list-none inline-block px-5'> <input style={{width:300}} className='rounded border p-3' type="text" placeholder='Search the Product name' /></li>
        <li className='list-none inline-block px-5'><i className="fa-solid fa-heart text-red-700"></i>whishlist</li><span className='bg-black text-white-rounded p-1'>20</span>
        <li className='list-none inline-block px-5'><i className="fa-solid fa-cart-plus text-green-500"></i>cart</li><span className='bg-black text-white-rounded p-1'>20</span>
    </ul>
   </nav>
  )
}

export default Header