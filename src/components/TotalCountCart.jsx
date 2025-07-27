import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopApp'
import Title from './Title'

const TotalCountCart = () => {
    const { currency, delivery_fee,  getTotalAmount } = useContext(ShopContext)
  return (
      <div className='w-full'>
          
          <div className='text-2xl mb-5'>
              <Title text1={'CART'} text2={'TOTALS'} />
          </div>
          <div className=' text-sm flex flex-col gap-4'> 
              <div className='flex justify-between items-center'>
                  <p className='text-gray-700 font-medium '>SubTotal</p>
                  <p className='text-gray-700 font-medium '>{currency}{getTotalAmount()}.00</p>
              </div>
              <hr />
              <div className='flex justify-between items-center'>
                  <p className='text-gray-700 font-medium '>shopping fee</p>
                  <p className='text-gray-700 font-medium '>{currency}{delivery_fee}.00</p>
              </div>
              <hr />
              <div className='flex justify-between items-center'>
                  <p className='text-gray-700 font-medium '>total</p>
                  <p className='text-gray-700 font-medium '>{currency}{getTotalAmount() === 0 ? 0 : getTotalAmount() + delivery_fee}.00</p>
              </div>
          </div>
      
    </div>
  )
}

export default TotalCountCart
