import React, { useState } from 'react'

const Login = () => {

  const [currentState, setCurrentState] = useState('Login')
  
  const onSubmitHandler = async(e) => {
    e.preventDefault()
  }
  return (
    <form onSubmit={onSubmitHandler} className=' flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-700'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-700'/>
      </div>
       {currentState === 'Login' ?  '' : <input type="text" placeholder='Name' className='w-full border border-gray-700 py-2 px-5' required/>} 
      <input type="email" placeholder='Email' className='w-full border border-gray-700 py-2 px-5' required/>
      <input type="password" placeholder='Password' className='w-full border border-gray-700 py-2 px-5' required />
      
      <div className='mt-2 flex items-center justify-between w-full'>
        <p className='cursor-pointer text-sm'>Forget Password?</p>
        {currentState === 'Login' ?
          <p onClick={()=> setCurrentState('Sign Up')} className='cursor-pointer text-gray-700 text-sm'>Create an Account!</p>
          :
          <p onClick={()=> setCurrentState('Login')} className='cursor-pointer text-gray-700 text-sm'>Login Here</p>}
      </div>
      <button className=' cursor-pointer py-3 px-8 text-sm font-semibold bg-black text-white'>{currentState === "Login"  ? "Sign in" : "Sign up"}</button>
    </form>
  )
}

export default Login