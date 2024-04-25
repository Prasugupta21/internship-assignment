import React from 'react'
import FormInput from './FormInput'
import { BiHide } from "react-icons/bi";
import { Link } from 'react-router-dom';
import SocialIcon from './SocialIcon';

const Login = () => {
  return (
    <div className=''>
        <h3 className="flex ms-4 mt-[4.250rem] font-bold text-[1.6rem] text-[#2C2B2B] ">
        Welcome Back
      </h3>
      <form className="max-w-sm mx-auto flex flex-col  items-center justify-center">
      <FormInput inputType={'email'} entry={'Email'} />
      <div className='my-5 relative'>
      <input type={'password'} placeholder={'Password'} disabled class="block w-[21.438rem] placeholder:[#7F7F7F] p-4 text-gray-900 border border-gray-300 rounded-lg bg-[#F1F1F1] text-base focus:ring-blue-500 focus:border-blue-600 dark:bg-blue-700 dark:border-blue-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>  
      <div class="text-gray-500 text-[1.5rem] absolute inset-y-0 end-0 flex items-center pe-3.5 pointer-events-none">
      <BiHide/>

  </div>
   </div>
   <Link className='text-[#7F7F7F] underline me-auto ms-4'>Forget your password?</Link>
   <div className="mt-[18.125rem] mb-4">
<button
  class="w-[21.438rem] align-middle  font-sans  text-center  transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gradient-to-r from-[#7B91FF] to-[#95BEFF] text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
  type="button"
>
 <Link to={'/'} className="text-[1rem]">Sign In</Link> 
</button>
</div>
<SocialIcon/>
<div className="mt-[1.625rem] flex mb-4">
       <p>
   Don't have an account yet? <span> <Link  to={'/sign-up'} className="text-blue-500 underline">Create an account</Link></span>
       </p>
    </div>
      </form>
    </div>
  )
}

export default Login