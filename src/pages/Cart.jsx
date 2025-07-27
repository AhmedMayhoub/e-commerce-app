import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopApp'
import Title from '../components/Title';
import { assets } from '../assets/frontend_assets/assets';
import TotalCountCart from '../components/totalCountCart';

const Cart = () => {

    const { products, cart, currency, updateCart , navigator } = useContext(ShopContext)
    const [cartData, setCartData] = useState([]);
    
    useEffect(() => {
        
        const tempData = [];
        for (const items in cart){
            for (const item in cart[items]) {
                if (cart[items][item] > 0) {
                    tempData.push({
                        _id: items,
                        size: item,
                        quantity : cart[items][item]
                    })
                }
            }

        }
       setCartData(tempData)
    },[cart])
    

  return (
      <div className='pt-14'>
          <div className=' text-2xl mb-5'>
              <Title text1={'YOUR'} text2={'CART'} />  
          </div>
        
          <div className=' '>
              {
                  cartData.map((item, index) => {
                      const productData = products.find((product) => product._id === item._id)

                      return (
                          <div key={index} className='border-t border-b py-4  grid grid-cols-[4fr_.5fr_.5fr] sm:grid-cols-[4fr_3fr_.5fr] mb-4 items-center'>
                            
                              <div className=' flex gap-4'>
                                  <img src={productData.image[0]} alt="" className='w-32' />
                                  <div className='flex flex-col gap-4'>
                                      <b>{productData.name}</b>
                                      <div className='flex gap-4 items-center'>
                                          <button className='py-1 px-3 bg-slate-200'>{item.size}</button>
                                          <b>{currency} {productData.price}</b>
                                      </div>
                                  </div>
                                 
                                 
                              </div>
                              <div className='w-[45px]'>
                                  <input onChange={(e)=> e.target.value === '' || e.target.value === '0' ? null  : updateCart(productData._id , item.size, Number(e.target.value))} type="number" defaultValue={item.quantity} className='w-full border p-1' />
                              </div>
                              <div className='ml-4 sm:ml-0'>
                                  <img onClick={()=> updateCart(productData._id , item.size , 0)} src={assets.bin_icon} alt="" className='w-6 cursor-pointer ' />
                              </div>
                          </div>
                      )
                  })
             }  
          </div>
          <div className=' flex  justify-end'>
              <div className='w-full sm:w-[450px] mt-14'>
                  <TotalCountCart /> 
                  
                  <button onClick={()=> navigator('/orders')} className='w-full bg-black text-white my-8 py-3 px-8 cursor-pointer capitalize'>proceed to checkout</button>
                 
              </div>
            
          </div>
    </div>
  )
}

export default Cart
 