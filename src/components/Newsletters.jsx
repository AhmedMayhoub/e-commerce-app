import React from 'react'
import { fadeIn } from '../assets/variants'
import { motion } from 'framer-motion'

const Newsletters = () => {
  return (
    <div className='mt-20 '>
      <motion.div
        variants={fadeIn('down', 0.2)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: true, amount: 0.8 }}
        
        className=' w-full flex  items-center  justify-center  h-[350px] rounded-md'>
        <div className=' flex flex-col gap-6 p-4 '>
          <h1 className='text-lg sm:text-2xl text-gray-600 font-bold max-w-ful md:max-w-[850px] text-center'>Whether you’re hunting for discounts or looking for inspiration, our newsletter keeps you in the loop.</h1>
          <div className=' flex items-center border-2 max-w-full  '>
            <input className='md:flex-1 px-5 outline-none border-none py-3' type="text" placeholder='Enter Your Message' />
             <button className=' bg-black py-3  px-5 text-white font-medium  '>join</button>
           </div>
   
        </div>
      </motion.div>
    </div>
  )
}

export default Newsletters
