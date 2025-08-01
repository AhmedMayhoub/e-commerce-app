import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopApp'
import Title from './Title'
import ProductItem from './ProductItem'

const RelatedProduct = ({ category, subCategory }) => {
    
    const { products } = useContext(ShopContext)
    const [related , setRelated] = useState([])

    useEffect(() => {
        if (products.length > 0) {
            let productCopy = products.slice()
            productCopy = productCopy.filter((item)=> category === item.category)
            productCopy = productCopy.filter((item) => subCategory === item.subCategory)

            setRelated(productCopy.slice(0,5))
        }
      
       
    },[products])
    return (
      <div className='mt-10'>
            <div className=' flex items-center justify-center '>
                <Title text1={'RELATED'} text2={'PRODUCTS'}/>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 gap-y-6 mt-10'>
                {
                    related.map((item, index) => (
                        <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                    ))
                }
            </div>
      
       </div>
  )
}

export default RelatedProduct
