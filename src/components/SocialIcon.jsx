import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { GrFacebookOption } from "react-icons/gr";
const SocialIcon = () => {
  return (
    <>
    <div class="inline-flex items-center justify-center w-full">
    <hr class="w-[20rem] h-px my-5 bg-gray-300 border-0 dark:bg-gray-700"/>
    <span class="absolute px-3 text-xs font-medium text-[#2C2B2B] -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">Or</span>
</div>
      
    <div  className="flex text-[1.75rem]  mt-4  ">
         <div className=" border-2 h-[2.75rem] w-[2.75rem] mx-2 border-[#7F7F7F]  rounded-lg p-[.45rem]">
        < FcGoogle/>
         </div> 
         <div className="border-2 h-[2.75rem] w-[2.75rem] mx-2 border-[#7F7F7F]  rounded-lg  p-[.45rem]">
        < GrFacebookOption className="text-blue-500"/>
         </div> 
         
    </div>
    </>
  )
}

export default SocialIcon