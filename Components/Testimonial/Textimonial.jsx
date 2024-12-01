'use client'
import { assets, testimonialsData } from '@/public/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

export default function Textimonial() {
    return (
        <motion.div 
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center container p-14 md:px-20 lg:px-32 w-full overflow-hidden" id='Testimonial'>
            <h2 className="text-2xl sm:text-4xl font-bold mb-2">
                Customer <span className="underline underline-offset-4 decoration-1 font-light">Testimonial</span>
            </h2>
            <p className="text-gray-500 max-w-80 text-center mb-8">
                Passionate About Properties, Dedicated to your vision
            </p>

            <div className='flex flex-wrap justify-center gap-4'>
                {
                    testimonialsData.map((testimonial,index) =>(
                        <div key={index} className='max-w-[320px] border shadow-lg rounded px-8 py-12 text-center '>
                            <Image src={testimonial.image} alt={testimonial.alt} className='mx-auto mb-4 rounded-full' />
                            <h2 className='text-xl text-gray-700 font-medium'>{testimonial.name}</h2>
                            <p className='text-gray-500 mb-4 text-sm'>{testimonial.title}</p>
                            <div className='flex justify-center gap-1 text-red-500 mb-4'>
                                {
                                    Array.from({length: testimonial.rating},(item,index)=>(
                                        <Image key={index} src={assets.star_icon} alt=''/>
                                    ))
                                }
                            </div>
                            <p className='text-gray-600'>{testimonial.text}</p>
                        </div>
                    ))
                }
            </div>
        </motion.div>
    )
}
