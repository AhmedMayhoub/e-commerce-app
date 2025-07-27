import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopApp'
import ProductItem from './ProductItem'
import Title from './Title'
import { fadItemVarian } from '../assets/variants'
import { motion } from 'framer-motion'
import { fadeIn } from '../assets/variants'


const BestSeller = () => {
    const {products} = useContext(ShopContext)

    const [bestSeller, setBestSeller] = useState([])



    useEffect(() => {
        const bestSellerProduct = products.filter((item) => (item.bestseller))
        setBestSeller(bestSellerProduct.slice(0,5))
    },[products])
    
  return (
      <div className='my-20'>
          
          <motion.div
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once:true , amount: 0.4}}
              className='text-center flex items-center justify-center py-8 text-3xl'>
              <div className='flex flex-col gap-2 justify-center items-center mx-auto'>
                  <Title text1={"Best Seller"} text2={"collection"} />
                  <p className='text-sm text-gray-500 max-w-[450px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti reiciendis totam sunt velit modi laboriosam</p>
             </div>
          </motion.div>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 gap-y-6 '>
              {
                  bestSeller.map((item , index) => (
                      <motion.div
                          variants={fadItemVarian}
                          initial='hidden'
                          whileInView={'visible'}
                          viewport={{ once: true, amount: 0.8 }}
                          custom={index}
                          
                          key={item._id}>
                          <ProductItem id={item._id} image={item.image} price={item.price} name={item.name} />
                      </motion.div>
                  ))
              }
          </div>
      
    </div>
  )
}

export default BestSeller
