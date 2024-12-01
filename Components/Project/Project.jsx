'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { assets, projectsData } from '@/public/assets/assets';
import { motion } from 'framer-motion';

export default function Project() {
    const [sliderCart, setSliderCart] = useState(0);
    const [showCart, setShowCart] = useState(1);

    const updateCartSlider = () => {
        if (window.innerWidth >= 1024) {
            setShowCart(4); // Show 4 items for larger screens
        } else {
            setShowCart(1); // Show 1 item for smaller screens
        }
    };

    useEffect(() => {
        // Run once on mount and set correct `showCart` value
        updateCartSlider();
        // Add listener for window resize
        window.addEventListener('resize', updateCartSlider);
        // Cleanup listener on unmount
        return () => window.removeEventListener('resize', updateCartSlider);
    }, []);

    const slideNext = () => {
        setSliderCart((prevIndex) =>
            prevIndex + 1 < projectsData.length ? prevIndex + 1 : 0
        );
    };

    const sildePrv = () => {
        setSliderCart((prevIndex) =>
            prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
        );
    };

    return (
        <motion.div
        initial={{ opacity: 0, x: -200 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center container p-14 md:px-20 lg:px-32 w-full overflow-hidden" id="Project">
            <h2 className="text-2xl sm:text-4xl font-bold mb-2">
                Project <span className="underline underline-offset-4 decoration-1 font-light">Our Brand</span>
            </h2>
            <p className="text-gray-500 max-w-80 text-center mb-8">
                Passionate About Properties, Dedicated to your vision
            </p>
            {/* Slider Buttons */}
            <div className="flex items-center justify-end mb-8 w-full">
                <button onClick={sildePrv} className="p-3 bg-gray-200 rounded mr-2">
                    <Image src={assets.left_arrow} alt="left arrow" width={20} height={20} />
                </button>
                <button onClick={slideNext} className="p-3 bg-gray-200 rounded mr-2">
                    <Image src={assets.right_arrow} alt="right arrow" width={20} height={20} />
                </button>
            </div>
            {/* Slider Container */}
            <div className="overflow-hidden">
                <div
                    className="flex gap-8 transition-transform duration-500 ease-in-out"
                    style={{
                        transform: `translateX(-${(sliderCart * (100 / showCart))}%)`,
                    }}
                >
                    {projectsData.map((project, index) => (
                        <div key={index} className="relative flex-shrink-0 w-full sm:w-1/4">
                            <Image
                                src={project.image}
                                alt="slider image"
                                className="w-full h-auto mb-14 rounded-sm"
                            />
                            <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                                <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md rounded-sm">
                                    <h2 className="text-xl font-semibold text-gray-800">
                                        {project.title}
                                    </h2>
                                    <p className="text-gray-500 text-[10px]">
                                        {project.price} <span>|</span> {project.location}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
