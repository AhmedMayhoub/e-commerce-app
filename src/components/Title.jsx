import React from 'react'

const Title = ({ text1, text2 }) => {
    return (
        <div className=''>
            <div className='flex items-center gap-2'>
                <p className='text-3xl capitalize font-medium '>{text1} <span className='text-gray-500'>{text2}</span></p>
                <p className='w-8 sm:w-11 h-[1.5px] bg-black'></p>
            </div>
        </div>
    )
}

export default Title