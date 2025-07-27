import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/frontend_assets/assets'
import { ShopContext } from '../context/ShopApp'
import ProductItem from '../components/ProductItem';
import { fadItemVarian } from '../assets/variants'
import { motion } from 'framer-motion';
const Collection = () => {
  const { products ,search , showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false)
  const [allProduct, setAllProduct] = useState([])
  const [category , setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])
  const [sortType , setSortType] = useState('relavent')
  


  const toggleCategory = (e) => {
   
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter((item)=> item !== e.target.value))
    } else {
      setCategory(prev=> [...prev , e.target.value])
    }
  }

  const toggleSubCategory = (e) => {
    
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev=> prev.filter((item)=> item !== e.target.value))
    } else {
      setSubCategory(prev=> [...prev , e.target.value])
    }
  }




  const applyFilter = () => {
    let productCopy = products.slice();

    if (search && showSearch) {
      productCopy = productCopy.filter(item=> item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      productCopy = productCopy.filter((item)=>category.includes(item.category))
    }

    if (subCategory.length > 0) {
      productCopy = productCopy.filter((item)=> subCategory.includes(item.subCategory))
    }


    setAllProduct(productCopy)
  }
  
  
  const sortProduct = () => {

    let cfp = allProduct.slice();

    switch (sortType) {
      case 'low-hight':
        setAllProduct(cfp.sort((a, b) => (a.price - b.price)))
        break;
      case 'hight-low':
        setAllProduct(cfp.sort((a, b) => (b.price - a.price)))
        break;

      default:
        applyFilter();
        break;
    }
  }

  useEffect(() => {
   applyFilter()
  }, [category, subCategory, search, showSearch])
  
  useEffect(() => {
    sortProduct()
  },[sortType])
  
  


  

  return (
    <div className='my-10'>
      <div className='flex flex-col sm:flex-row gap-10  '>
        {/* left side filter */}
        <div className='min-w-60'>
          <p className='flex items-center gap-2 mb-6 font-semibold cursor-pointer' onClick={()=>setShowFilter(!showFilter)}>
            FILTER
            <img src={assets.dropdown_icon} className={` block sm:hidden w-2 ${showFilter? "rotate-90" : ""}`} alt="" />
          </p>
          {/* Filter category */}
          <div className={` border border-gray-300 pl-5 py-3 mb-6 ${showFilter? "" : "hidden"} sm:block`}>
            <div className='flex flex-col gap-2'>
              <p>Category</p>
              <div className='flex items-center gap-2'>
                <input type="checkbox" value={"Men"} onChange={toggleCategory}/> Men
              </div>
              <div className='flex items-center gap-2'>
                <input type="checkbox" value={"Women"} onChange={toggleCategory} /> Women
              </div>
              <div className='flex items-center gap-2'>
                <input type="checkbox" value={"Kids"} onChange={toggleCategory}/> Kids
              </div>
            </div>
          </div>
          {/* Filter subcategory */}
          <div className={` border border-gray-300 pl-5 py-3 ${showFilter? "" : "hidden"} sm:block`}>
            <div className='flex flex-col gap-2'>
              <p>SubCategory</p>
              <div className='flex items-center gap-2'>
                <input type="checkbox" value={"Topwear"} onChange={toggleSubCategory}/> Top Wear
              </div>
              <div className='flex items-center gap-2'>
                <input type="checkbox" value={"Bottomwear"} onChange={toggleSubCategory}/> Button Wear
              </div>
              <div className='flex items-center gap-2'>
                <input type="checkbox" value={"Winterwear"} onChange={toggleSubCategory}/> Winter Wear
              </div>
            </div>
          </div>
        </div>
       
        {/* right side all collection and other featured */}
        <div className='flex-1'>
          <div className='flex items-center justify-between '>
           <h1 className='text-xl sm:text-2xl md:text-3xl font-bold text-gray-700'>All Category </h1>
            {/* select options */}
            <select onChange={(e)=>setSortType(e.target.value)} className='border border-gray-400 outline-none px-3 py-1 rounded-md'>
              <option value='relavent'>Sort by  : Relavent</option>
              <option value="low-hight">Sort by : low-to-hight</option>
              <option value="hight-low">Sort by : hight-to-low</option>
            </select>
          </div>
          {/* rendering all products */}
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 gap-y-6 gap-4'>
            {
              allProduct.map((item , index) => (
                <motion.div
                  variants={fadItemVarian}
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true, amount: .3}}
                  custom={index}
                  key={index}>
                  <ProductItem id={item._id} image={item.image} name={item.name} price={item.price}/>
                </motion.div>
              ))
           }
          </div>
        </div>
       </div>
    </div>
  )
}

export default Collection