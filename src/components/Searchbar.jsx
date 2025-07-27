import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopApp'
import { assets } from '../assets/frontend_assets/assets'
import { useLocation } from 'react-router-dom'

const SearchBar = () => {

    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext)
    const [visible ,setVisible] = useState(false)
    
    const location = useLocation()

    useEffect(() => {
        if (location.pathname.includes('collection')) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    },[location])
  return showSearch && visible ? (
      <div className=' border-t border-gray-400 bg-gray-50 py-4 text-center'>
          <div className=' inline-flex items-center justify-center bg-gray-200 px-5 py-2 rounded-full w-3/4 sm:w-1/2 '>
              <input onChange={(e)=>setSearch(e.target.value)} value={search} type="text" placeholder='Search' className='outline-none bg-inherit w-full ' />
              <img src={assets.search_icon} className='w-4' alt="" />
          </div>
          <img src={assets.cross_icon} className='w-3 inline ml-4 cursor-pointer' onClick={()=>setShowSearch(false)} alt="" />
    </div>
  ): null
}

export default SearchBar
