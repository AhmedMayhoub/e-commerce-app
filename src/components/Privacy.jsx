import React from 'react'
import Title from './Title'
import { assets } from '../assets/frontend_assets/assets'
import { motion } from 'framer-motion'
import { fadeIn } from '../assets/variants'



const Privacy = () => {
    return (
        <div className='my-20'>
            <motion.div
                variants={fadeIn('down', 0.2)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: true, amount: 0.8 }}

                className=' flex flex-col gap-4 items-center justify-center mx-auto'>
                <Title text1={'Privacy &'} text2={'policy'} />
                <p className='text-sm font-medium text-gray-500 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing </p>
            </motion.div>
            <motion.div
                variants={fadeIn('left', 0.2)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: true, amount: 0.8 }}
                
                className='flex flex-col md:flex-row items-center justify-evenly gap-4 mt-12 '>
                <div className='flex flex-col gap-3 items-center cursor-pointer'>
                    <img src={assets.exchange_icon} alt="" className='w-12 m-auto mb-5' />
                    <p className='font-semibold'>Easy Exchange Policy</p>
                    <p className='text-gray-400'>We Offer hassle free exchange policy</p>
                </div>
                <div className='flex flex-col gap-3 items-center cursor-pointer'>
                    <img src={assets.quality_icon} alt="" className='w-12 m-auto mb-5' />
                    <p className='font-semibold'>7 Days Return Policy</p>
                    <p className='text-gray-400'>We Provide 7days free return policy</p>
                </div>
                <div className='flex flex-col gap-3 items-center cursor-pointer'>
                    <img src={assets.support_img} alt="" className='w-12 m-auto mb-5' />
                    <p className='font-semibold'>Best customer support</p>
                    <p className='text-gray-400'>We provide 24/7 customer support</p>
                </div>
            </motion.div>
        </div>
    )
}

export default Privacy
