import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
    return (
        <div className=' my-10 flex flex-col '>
        <div className=' flex flex-col  sm:grid grid-cols-[2fr_1fr_1fr] gap-14 text-sm mt-40  '>
            <div className='flex flex-col gap-1 '>
                <img src={assets.logo} alt="logo" className='w-32 ' />
                <p className='text-sm font-medium text-gray-500 max-w-[500px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem explicabo iure qui consectetur fugiat distinctio aut expedita illo alias impedit quasi necessitatibus, ex quis saepe, optio sunt obcaecati nulla molestias?</p>
            </div>
            <div>
                <h1 className='text-3xl font-semibold'>Company</h1>
                <ul className=' mt-4 flex flex-col gap-1 font-medium text-gray-500'>
                    <li>Home</li>
                    <li>Collection</li>
                    <li>About</li>
                    <li>Privacy & Policy</li>
                </ul>
            </div>
            <div>
                <h1 className='text-3xl font-semibold'>Get In Touch</h1>
                <ul className=' mt-4 flex flex-col gap-1 font-medium text-gray-500'>
                    <li>+020101044667</li>
                    <li>contact:ahmedmayhoub4@gmail.com</li>
                
                </ul>
            </div>
            </div>
            <div className='mt-10 text-center '>
                <hr />
                <p className='mt-8'>CopyRights©2025 All rights reserved..</p>
            </div>
        </div>
    )
}

export default Footer
