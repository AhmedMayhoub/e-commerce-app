import React, { useContext } from 'react'
import Title from '../components/Title'
import { ShopContext } from '../context/ShopApp'

const PlaceOrder = () => {
  const {products , currency} = useContext(ShopContext)
  return (
    <div className='  pt-16'>

      <div className=' text-2xl mb-2'>
        <Title text1={'my'} text2={'orders'}/>
      </div>

      <div>
        {
          products.slice(1, 4).map((item, index) => (
            <div key={index} className='py-4 border-t border-b  text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
              <div className=' flex items-start gap-6 text-sm'>
                <img src={item.image[0]} className='w-16 md:w-20' alt="" />
                <div>
                  <p className=' sm:text-base font-medium'>{item.name}</p>
                  <div className='flex items-center gap-3 mt-2 text-base text-gray-700'>
                    <p className='text-lg'>{currency}{item.price}</p>
                    <p>Quantity : 1</p>
                    <p>Size : M</p>
                  </div>
                  <p className='mt-2'>Date : <span className='text-gray-400'>25 , jul 2025</span></p>
                </div>
              </div>
              <div className='md:w-1/2 flex justify-between'>
                <div className='flex items-center gap-2'>
                  <p className='h-2 min-w-2 rounded-full bg-green-500'></p>
                  <p className='text-gray-600 text-base'>Ready to Ship</p>
                </div>
                <button className='px-4 py-2 text-sm border rounded-sm cursor-pointer'>Track Orders</button>
              </div>
            </div>
          ))
       }
      </div>
    </div>
  )
}

export default PlaceOrder
