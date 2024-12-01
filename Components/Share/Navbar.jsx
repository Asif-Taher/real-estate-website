'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { assets } from '@/public/assets/assets'
import Link from 'next/link'
export default function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  
  return (
    <div className='absolute top-0 left-0 w-full z-10'>
     <div className='container flex justify-between items-center px-6 py-4 bg-transparent'>
      <Image className='cursor-pointer' src={assets.logo} alt='logo image'/>
      <ul className='hidden md:flex gap-5 text-white'>
        <li className='cursor-pointer hover:text-gray-300'><Link href="#Header">Home</Link></li>
        <li className='cursor-pointer  hover:text-gray-300'><Link href="#About">About</Link></li>
        <li className='cursor-pointer  hover:text-gray-300'><Link  href="#Project">Projects</Link></li>
        <li className='cursor-pointer  hover:text-gray-300'><Link  href="#Testimonial">Testimonial</Link></li>
        <li className='cursor-pointer  hover:text-gray-300'><Link  href="#Contact">Contact</Link></li>
      </ul>
      <button className='hidden md:block bg-white px-8 py-2 rounded-full'>Signup</button>
      <Image  onClick={()=>setShowMobileMenu(true)} src={assets.menu_icon} width={50} height={50} alt='menu icon' className='md:hidden '/>
     </div>
     {/* mobile menu */}
     <div className={`md:hidden fixed w-full right-0 top-0 bottom-0 overflow-hidden bg-white transition-all ${showMobileMenu? "fixed w-full" : "h-0 w-0"}`}>
      <div className='flex justify-end p-6'>
        <Image  onClick={()=>setShowMobileMenu(false)} src={assets.cross_icon} height={50} width={50} alt='cross icon'/>
      </div>
     <ul className='flex flex-col items-center gap-5 mt-5 px-4 text-lg font-medium'>
        <li className='cursor-pointer hover:text-gray-300 text-2xl'><Link  onClick={()=>setShowMobileMenu(false)} href="#Header">Home</Link></li>
        <li className='cursor-pointer  hover:text-gray-300 text-2xl'><Link  onClick={()=>setShowMobileMenu(false)}href="#About">About</Link></li>
        <li className='cursor-pointer  hover:text-gray-300 text-2xl'><Link  onClick={()=>setShowMobileMenu(false)} href="#Project">Projects</Link></li>
        <li className='cursor-pointer  hover:text-gray-300 text-2xl'><Link  onClick={()=>setShowMobileMenu(false)} href="#Testimonial">Testimonial</Link></li>
        <li className='cursor-pointer  hover:text-gray-300 text-2xl'><Link  onClick={()=>setShowMobileMenu(false)} href="#Contact">Contact</Link></li>
      </ul>
     </div>
    </div>
  )
}
