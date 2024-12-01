'use client'
import React from 'react'
import { assets } from '@/public/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
export default function Footer() {
    return (
        <motion.div 
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden ' id='Footer'>
            <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
                <div>
                    <Image src={assets.logo_dark} alt='dark logo' />
                    <p className='text-gray-400 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Quo asperiores exercitationem fugiat optio
                          voluptates soluta, sunt quae temporibus eos iure
                           sint tenetur eaque libero voluptatibus nobis
                            assumenda ab molestias fuga.</p>


                </div>
                <div className='w-full md:h-1/5 mb-8 md:mb-0'>
                    <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
                    <ul className='flex flex-col gap-2 text-gray-400'>
                        <Link href="#Header" className='hover:text-white'>Home</Link>
                        <Link href="#About" className='hover:text-white'>About Us</Link>
                        <Link href="#Contact" className='hover:text-white'>Contact Us</Link>
                        <Link href="#" className='hover:text-white'>Privacy Policy</Link>
                    </ul>
                </div>
                <div className='w-full md:w-1/3'>
                    <h1 className='text-white text-lg font-bold mb-4'>Subscribe to our newsletter </h1>
                    <p className='text-gray-400 mb-4 max-w-80'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, maiores.</p>
                    <div className='flex gap-2'>
                        <input type="email" placeholder='Enter Your  Email'className='p-2 rounded text-gray-400 
                        bg-gray-800 border border-gray-700 focus:outline-none w-full md:w-auto ' />
                        <button className='py-2 px-4 rounded bg-blue-500 text-white'>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className='border-t p-4 border-gray-700 border-y-4 mt-10 text-center text-gray-500'>
                <h3>Copyright 2024 @ All Right Reserved.</h3>
            </div>
        </motion.div>
    )
}
