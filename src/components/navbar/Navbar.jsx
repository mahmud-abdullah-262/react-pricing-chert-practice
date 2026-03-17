import React, { useState } from 'react';
import Link from '../link/Link';
import { Menu, MenuIcon, X } from 'lucide-react';

const navLinks = [
  {
    id: 1,
    name: "Home",
    path: "/"
  },
  {
    id: 2,
    name: "About",
    path: "/about"
  },
  {
    id: 3,
    name: "Services",
    path: "/services"
  },
  {
    id: 4,
    name: "Blog",
    path: "/blog"
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact"
  },
  {
    id: 6,
    name: "Gallery",
    path: "/gallery"
  },
  {
    id: 7,
    name: "FAQ",
    path: "/faq"
  }
];


const Navbar = () => {
  const [open, setOpen] =  useState(true)
  const links = navLinks.map(route => <Link key={route.id} route={route}></Link>)

  return (
    <nav className='flex justify-between w-11/12 mx-auto mt-4'>
      
      <span onClick={() => {setOpen(!open)}} className='flex gap-2'>
        {open ? <X className='md:hidden'></X> :  <Menu className='md:hidden'></Menu>}
        <ul className={`flex md:hidden flex-col gap-2 absolute z-10 duration-1000 top-12
          ${open ? 'left-4' : '-left-[50%]'} bg-white w-[50%] pr-4 pb-4`}>
          {links}
        </ul>
          
      <h3 className='font-bold text-gray-600'>My Logo</h3>
      </span>
    
      <ul className='hidden md:flex gap-2 items-center justify-center'>
        {
          links
        }
      </ul>
      <button className='btn btn-primary'>Sign In</button>
    </nav>
  );
};

export default Navbar;