import React, { useEffect, useState } from "react";
import FormInput from "./FormInput";
import { Link } from "react-router-dom";
import SocialIcon from "./SocialIcon";


const Signup = () => {
    const [isChecked,setIsChecked]=useState(false);
console.log(isChecked);
    const handleChange=()=>{

        if(isChecked)return;
       setIsChecked(true);
    }
   
  return (
    <div>
<h3 className="flex ms-4 mt-[4.250rem] font-bold text-[1.6rem] text-[#2C2B2B] ">
        Create an account
      </h3>
      <form className="max-w-sm mx-auto flex flex-col  items-center justify-center">
<FormInput entry={'First Name'} inputType={'text'}/>
<FormInput entry={'Last Name'} inputType={'text'}/>
<FormInput entry={'Email'} inputType={'email'}/>
<FormInput entry={'Password'} inputType={'password'}/>


<div className="flex me-auto ms-3 mt-3">
    <div className="flex items-center justify-start h-5">
        <input  onChange={handleChange} disabled={isChecked}    type="checkbox" className={`${isChecked ?'accent-red-500' :'' } w-6 h-6 `}/>
    </div>
    <div className="ms-2 text-sm" >
        <label for="helper-checkbox" className="font-medium text-[.75rem] text-[#7F7F7F]">By proceeding, I agree to all  <span className="text-blue-500">T&C</span> and  <span className="text-blue-500 underline">Privacy Policy</span></label>
    </div>
</div>
<div className="mt-28 mb-4">
<button
  class="w-[21.438rem] align-middle  font-sans  text-center  transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gradient-to-r from-[#7B91FF] to-[#95BEFF] text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
  type="button"
>
 <Link to={'/goals'} className="text-[1rem]">Create an Account</Link> 
</button>
</div>
<SocialIcon/>
    <div className="mt-[1.625rem] flex ">
       <p>
       Already have an account? <span> <Link  to={'/login'} className="text-blue-500 underline">Login</Link></span>
       </p>
    </div>
      </form>
    </div>
  );
};

export default Signup;
