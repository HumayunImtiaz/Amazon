import React from "react";
import { Link } from 'react-router-dom';
import amazon_logo from "../assets/amazon_logo.png";
import USFlag from "../assets/USFlag.png";


const Navbar = () => {
  
  return (
    <header>
      <div className='bg-[#0F1111] h-16 justify-evenly flex items-center text-white text-sm cursor-pointer'>
        <a href="#" className='border border-transparent p-1 hover:border-white'>
        <Link to="/Home">
        <img src={amazon_logo} alt="Amazon Logo" className='w-24 h-10 mt-2'/>
        </Link>
        </a>
        <div className='border border-transparent p-1 hover:border-white'>
          <p className='text-xs font-title'>Deliver to</p>
          <div className='flex items-center gap-1'>
            <i className='fa-solid fa-location-dot'></i>
            <p className='font-bold font-title'>Pakistan</p>
          </div>
          </div>

          <div className='text-black flex h-12 p-1 '>
            <select className='bg-white px-2 round-lg round-r-none font-title'>
              <option>All</option>
            </select>
            <input type="text" placeholder="search"  className='w-[650px] pl-2 text-base' />
            <div className='bg-orange-300 round-lg round-l-none p-2'>
              <i className='fa-solid fa-magnifying-glass fa-xl'></i>
            </div>
          </div>

          <div className='flex border border-transparent p-1 hover:border-white'>
            <img src={USFlag} alt="image" className='h-4 w-5' />
            <select className='bg-transparent font-bold font-title'>
              <option>EN</option>
            </select>
          </div>

          <div>
            <p className='text-xs pl-2 font-title'>Hello, sign in</p>
            <select className='bg-transparent font-bold'>
              <option>Account & List</option>
            </select>

          </div>
          <ul className="flex space-x-4 mr-2 font-title">
        <li><Link to="/cart" className="text-white text-sm font-title">Cart</Link></li>
      </ul>

      </div>


    <nav className="bg-gray-800 p-3 flex justify-between">
      <ul className="flex space-x-4">
        <li><Link to="/Home" className="text-white mainClass text-sm font-title">Home</Link></li>
        <li><Link to="/categories" className="text-white text-sm font-title ">Categories</Link></li>
        <li><Link to="/products" className="text-white text-sm font-title">Products</Link></li> 
        <li><Link to="/sell" className="text-white text-sm font-title">Sell</Link></li>               
      </ul>    

    </nav>
    </header>
    
  );
};


export default Navbar;
