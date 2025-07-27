import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import Newsletters from '../components/Newsletters'
import { motion } from 'framer-motion'
import { fadeIn } from '../assets/variants'


const Contact = () => {
  return (
    <div>
      <div className='pt-16'>
        <motion.div
          variants={fadeIn('down', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: true, amount: 0.8 }}
          
          className='flex items-center justify-center text-2xl '>
          <Title text1={'contact'} text2={'us'}/>
        </motion.div>
        <motion.div
        
          variants={fadeIn('left', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: true, amount: 0.8 }}
          
          className='flex flex-col items-center justify-center gap-8 md:flex-row mb-28 my-10'>
          <img src={assets.contact_img} className='w-full md:max-w-[450px]' alt="" />
          <div className='flex flex-col justify-center gap-6 items-start'>
            <p className='text-xl font-bold text-gray-700'>Our Store</p>
            <p className='text-gray-600'>123 Commerce Street, Suite 400 <br /> New York, NY 10001 United States</p>
            <p className='text-gray-600'> Email us at: support@forever.com</p>
            <p className='text-gray-600'>Call us: +123-456-7890</p>
            <p className='text-gray-600'>Our support team is available 7 days a week.</p>
            <button className='py-3 px-8 border text-sm text-gray-600 hover:bg-black hover:text-white transition-all duration-300 cursor-pointer'>Explore</button>
          </div>
         
        </motion.div>
        <Newsletters/>
      </div>
    </div>
  )
}

export default Contact