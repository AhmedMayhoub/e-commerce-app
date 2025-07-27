import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { ShopContext } from '../context/ShopApp'
import ProductItem from './ProductItem'
import { motion } from 'framer-motion'
import { fadeIn } from '../assets/variants'
import { fadItemVarian } from '../assets/variants'



// const fadItemVarian = {
//     hidden: { opacity: 0, y: -30 },

//     visible: (index) => ({
//         y: 0,
//         opacity: 1,
//         transition: { delay: index * 0.1, duration: 0.3 }
//     })
// }


const LatestCollection = () => {
    const { products } = useContext(ShopContext)
    const [latestProduct, setLatestProduct] = useState([])
    
    useEffect(() => {
        setLatestProduct(products.slice(0,10))
    },[])
  return (
      <div className=' my-20'>
          <motion.div
          
              variants={fadeIn('down', 0.2)}
              initial="hidden"
              whileInView={'show'}
              viewport={{once:true,amount:0.8}}
              className='text-center flex items-center justify-center py-8 text-3xl'>
              <div className='flex flex-col gap-2 justify-center items-center mx-auto'>
                  <Title text1={"Latest"} text2={"collection"} />
                  <p className='text-sm text-gray-500 max-w-[450px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti reiciendis totam sunt velit modi laboriosam</p>
              </div>
          </motion.div>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 gap-y-6'>
              {
                  latestProduct.map((item, index) => (
                      <motion.div
                          variants={fadItemVarian}
                          initial='hidden'
                          whileInView={'visible'}
                          viewport={{ once: true, amount: 0.8}}
                          custom={{ index }}
                          key={index}>
                          <ProductItem  id={item._id} image={item.image} name={item.name} price={item.price} />

                      </motion.div>
                  ))
              }
          </div>
          
      </div>
  )
}

export default LatestCollection