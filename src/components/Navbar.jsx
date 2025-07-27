import { Link, NavLink } from "react-router-dom"
import { assets } from "../assets/frontend_assets/assets"
import { useContext, useState } from "react"
import { ShopContext } from "../context/ShopApp"
import {LogInIcon } from 'lucide-react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { setShowSearch, getTotalCount, navigator } = useContext(ShopContext)
    


    return (
        <nav className=" flex justify-between items-center py-4   ">
            {/* Logo image */}
            <Link to='/'>
                <img src={assets.logo} className="w-35" />
            </Link>
           {/* NavLink */}
            <div className="hidden sm:flex items-center gap-4">
                <NavLink to='/' className='text-base font-medium flex flex-col items-center' >
                    HOME
                    <hr className="w-1/2 h-[1.5px] bg-black font-bold hidden" />
                </NavLink>
                <NavLink to='/collection' className='text-base font-medium flex flex-col   items-center'>
                    COLLECTION
                    <hr className="w-1/2 h-[1.5px] bg-black font-bold hidden" />

                </NavLink>
                <NavLink to='/about' className='text-base font-medium flex flex-col  items-center'>
                    ABOUT
                    <hr className="w-1/2 h-[1.5px] bg-black font-bold hidden" />

                </NavLink>
                <NavLink to='/contact' className='text-base font-medium flex flex-col  items-center'>
                    CONTACT
                    <hr className="w-1/2 h-[1.5px] bg-black font-bold hidden" />

                </NavLink>
            </div>
            {/* Icons Image */}
            <div className="flex gap-4">
                <img onClick={()=>setShowSearch(true)} className='w-4 cursor-pointer' src={assets.search_icon} alt=""/>
                <div className=" relative group cursor-pointer ">
                   <Link to={'/login'}><img className='w-4 ' src={assets.profile_icon} alt="" /></Link> 
                    {/* <div className="absolute hidden  p-4 rounded-md top-6 right-1  z-10  group-hover:block w-[150px] bg-slate-100">
                        <div className=" flex justify-between ">
                            <p className=" text-gray-500 text-sm font-bold hover:text-block transition-all" onClick={() => navigator('/login')}>Login</p>
                            <LogInIcon className=" w-4 h-4 text-gray-500" />
                         </div>
                        
                    </div>   */}
                </div>
                
                <Link to='/cart' className="relative">
                    <img className="w-4" src={assets.cart_icon} />
                    <div className="w-6 h-6 rounded-full bg-black text-xs -top-2 left-[10px] text-white absolute flex items-center justify-center">{getTotalCount()}</div>
                </Link>
                {/* menu icon */}
                <img onClick={() => setIsOpen(true)} className="w-4 ml-4 sm:hidden cursor-pointer" src={assets.menu_icon} alt="" />
            </div> 
         
            {/* Menu For Others Screen */}
            <div className={` absolute top-0 bottom-0 right-0 overflow-hidden bg-white  transition-all ease-in ${isOpen ? " w-full  " : "w-0"} `}>
                <div className="p-4">
                    <div onClick={() => setIsOpen(false)} className="flex items-center gap-2 cursor-pointer">
                        <img className="w-2 rotate-180" src={assets.dropdown_icon} alt="" />
                        <span className="text-bold">BACK</span>
                    </div>
                    <div className="flex flex-col pt-10 justify-center items-center  gap-4">
                        <NavLink to='/' className='text-base font-medium' onClick={()=>setIsOpen(false)}>
                            HOME
                        </NavLink>
                        <NavLink to='/collection' className='text-base font-medium 'onClick={()=>setIsOpen(false)}>
                            COLLECTION
                        </NavLink>
                        <NavLink to='/about' className='text-base font-medium 'onClick={()=>setIsOpen(false)}>
                            ABOUT
                        </NavLink>
                        <NavLink to='/contact' className='text-base font-medium 'onClick={()=>setIsOpen(false)}>
                            CONTACT
                        </NavLink>
                    </div>
                </div>
            </div>

        </nav>
    )
}

export default Navbar