import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
import { motion } from 'framer-motion'
import { fadeIn } from '../assets/variants'


const Hero = () => {
    return (
        <div className='flex flex-col sm:flex-row border border-gray-800 '>
            {/* Text Header Section */}
            <div className=' w-full sm:w-1/2 flex  items-center justify-center py-10 sm:py-0'>
                <motion.div
                    variants={fadeIn('up', 0.2)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once:true,amount:0.8}}
                    className='flex flex-col gap-4'>
                    <div className='flex items-center gap-2 '>
                        <p className='w-8 sm:w-11 h-[1.5px] bg-[#141414]'></p>
                        <p className='text-sm font-medium '>OUR BESTSELLERS</p>
                    </div>
                    <h1 className='text-3xl sm:text-4xl md:text-5xl  font-medium text-[#141414]'>Latest Arrivals</h1>
                    <div className='flex gap-2 items-center'>
                        <p className='text-sm text-[#141414] '>SHOP NOW</p>
                        <p className='w-11 h-[1.5px] bg-[#141414]'></p>
                    </div>
                </motion.div>

            </div>
            {/* Image Header Section */}
            <div className='w-full sm:w-1/2'>
                <img src={assets.hero_img} alt="" />
            </div>
            
        </div>
    )
}

export default Hero