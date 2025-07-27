import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopApp'

const ProductItem = ({ id, name, image, price }) => {
  const {currency} = useContext(ShopContext)
  return (
      <Link to={`/product/${id}`} className='flex flex-col gap-4'>
          <div className='overflow-hidden'>
              <img src={image[0]} alt="" className='hover:scale-[1.2] duration-200' />
          </div>  
          <p className='text-sm text-gary-600 '>{name}</p>
      <p className='text-sm font-bold'> {currency}{price}</p>
    
     </Link>
  )
}

export default ProductItem