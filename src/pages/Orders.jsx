import Title from '../components/Title'
import TotalCountCart from '../components/totalCountCart'
import { assets } from '../assets/frontend_assets/assets'
import { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopApp'

const Orders = () => {
    const {navigator} = useContext(ShopContext)

    const [method , setMethod] = useState("paypal")
  return (
      <div className='my-2 0'>
          <Title text1={'Your'} text2={'information'}/>
          <div className='flex flex-col sm:flex-row  justify-between w-full '>
              {/* left side inputs felids  */}
              <div className='flex-1 max-w-[500px]  my-10 sm:mt-10'>
                  <div className='flex items-center gap-3'>
                      <input type="text" placeholder='First Name' className='border border-gray-600 w-full py-2 px-6' />
                      <input type="text" placeholder='Last Name' className='border border-gray-600 w-full py-2 px-6 ' />
                  </div>
                  <input type="text" placeholder='Street' className='border border-gray-600 w-full py-2 px-6 mt-3' />
                  <input type="e-mail" placeholder='E-mail' className='border border-gray-600 w-full py-2 px-6 mt-3' />
                  <div className='flex items-center gap-3 mt-3'>
                      <input type="number" placeholder='Phone' className='border border-gray-600 w-full py-2 px-6' />
                      <input type="text" placeholder='Z-code' className='border border-gray-600 w-full py-2 px-6 ' />
                  </div>
                  <input type="text" placeholder='Country' className='border border-gray-600 w-full py-2 px-6 mt-3' />


             </div>
              {/* right side totals checks and payment methods */}
              <div className='w-full sm:w-[450px]'>
                  <TotalCountCart />
                  <button onClick={() => navigator('/place-order')} className='w-full bg-black text-white my-8 py-3 px-8 cursor-pointer capitalize'>place order</button>


                  {/* pay method icons */}
                  <div className='mb-5'>
                      <Title text1={'payment'} text2={'methods'}/>
                  </div>
                   <div className='flex gap-4 '>
                      <div onClick={()=>setMethod('paypal')} className='flex items-center justify-center gap-2 shadow-sm w-10 h-10 w-20 cursor-pointer'>
                          <p className={`w-2 h-2 rounded-full  ${method === 'paypal' ? 'bg-green-500' : ""}`}></p>
                          <img src={assets.paypal_logo} alt=""  className='w-8'/>
                    </div>
                      <div onClick={()=>setMethod('visa')} className='flex items-center justify-center gap-2 shadow-sm w-10 h-10 w-20 cursor-pointer'>
                          <p className={`w-2 h-2 rounded-full  ${method === 'visa' ? 'bg-green-500' : ""}`}></p>
                          <img src={assets.visa_logo} alt=""  className='w-8'/>
                    </div>
                      <div onClick={()=>setMethod('apple')} className='flex items-center justify-center gap-2 shadow-sm w-10 h-10 w-20 cursor-pointer'>
                          <p className={`w-2 h-2 rounded-full  ${method === 'apple' ? 'bg-green-500' : ""}`}></p>
                          <img src={assets.apple_logo} alt=""  className='w-8'/>
                    </div>
                      <div onClick={()=>setMethod('stripe')} className='flex items-center justify-center gap-2 shadow-sm w-10 h-10 w-20 cursor-pointer'>
                          <p className={`w-2 h-2 rounded-full  ${method === 'stripe' ? 'bg-green-500' : ""}`}></p>
                          <img src={assets.stripe_logo} alt=""  className='w-8'/>
                    </div>
                   
                  </div> 
              </div>
         </div>
    </div>
  )
}

export default Orders
