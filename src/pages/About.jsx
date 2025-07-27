import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import Newsletters from '../components/Newsletters'
import { motion } from 'framer-motion'
import { fadeIn } from '../assets/variants'

const About = () => {
  return (
    <div>

      <motion.div
      
        variants={fadeIn('down', 0.2)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: true, amount: 0.8 }}
        
        
        
        className='pt-8  flex items-center justify-center  text-2xl'>
        <Title text1={'about'} text2={'us'}/>
      </motion.div>
      <div className='flex flex-col md:items-center md:flex-row gap-14 my-10'>
        <motion.div className='w-full md:max-w-[450px]'
        
          variants={fadeIn('left', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: true, amount: 0.8 }}
        
        >
        
          <img src={assets.about_img} className='w-full' alt="" />

        </motion.div>
        
        <motion.div
        
          variants={fadeIn('left', 0.4)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: true, amount: 0.8 }}
          
          className='flex flex-col gap-6 text-gray-700  '>
          <p className='text-sm text-gray-700'> we’re redefining the online shopping experience. Our mission is simple: make shopping fast, easy, and enjoyable. Whether you're browsing the latest trends or hunting for everyday essentials, we bring quality products right to your fingertips — with secure checkout and reliable delivery.</p>
          <p className='text-sm text-gray-700'> your go-to shopping app for everything you love! We’ve made it easier than ever to find top deals, discover new brands, and get what you need, when you need it. Shopping should be fun and stress-free — and that’s exactly what we’re here for.</p>
          <p className='text-sm text-gray-700'> a next-gen e-commerce platform built to meet the needs of today’s digital shopper. With smart search, personalized recommendations, and real-time order tracking, we make online shopping smoother and smarter. Backed by cutting-edge tech and a trusted support team, we're here to serve you better.</p>
          <b>Our Mission</b>
          <p className='text-gray-700 text-sm'>Our mission is to make online shopping simple, reliable, and enjoyable for everyone. We aim to connect customers with quality products through a seamless digital experience, fast delivery, and exceptional customer service.</p>
        </motion.div>
      </div>
      <motion.div
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: true, amount: 0.8 }}
        
        
        className='text-xl pt-8 '>
        <Title text1={'why'} text2={'choose us'}/>
      </motion.div>
      <motion.div
      
        variants={fadeIn('right', 0.4)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: true, amount: 0.8 }}
        
        className='flex flex-col items-center md:flex-row mt-10'>
        <div className='border px-10 sm:px-16 py-8 sm:py-16 flex flex-col gap-5'>
          <b>Quality Assurance :</b>
          <p className='text-gray-600'>Quality is our promise. Every product listed on our platform goes through a strict quality check.</p>
         </div>
        <div className='border px-10 sm:px-16 py-8 sm:py-16 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Shopping made easy. With a user-friendly interface, smart search, and secure payment options.</p>
         </div>
        <div className='border px-10 sm:px-16 py-8 sm:py-16 flex flex-col gap-5'>
          <b>Exceptional Customer Service :</b>
          <p className='text-gray-600'>Real people, real help. We care about your experience, not just your order. Our friendly support team is just a message away,</p>
         </div>
    
      </motion.div>
      <div className='mt-16'>
        <Newsletters/>
      </div>
    </div>
  )
}

export default About