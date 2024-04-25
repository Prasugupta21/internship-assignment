import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

import { Circle } from 'rc-progress';
import { FaGreaterThan } from 'react-icons/fa6';
import { useProgress } from '../context/Progress';
const Page1 = () => {
    const {progress,setProgress}=useProgress();
    useEffect(()=>{
        setProgress(30);
    },[setProgress])
  return (
    <div className="">
        
        <Link to={'/sign-up'} className='text-[#9FB2FF] flex justify-end me-4 underline mt-[2.75rem]'>Skip</Link>

        
      <img
        className="max-w-full content mx-auto h-[17.625rem] flex justify-center  mt-[4.25rem] "
        src="../images/image1.png"
        alt="image1"
      />

      <div className="ml-4 mt-[5.313rem] flex flex-col">
        <h2 className="h-6 w-64 text-xl font-semibold leading-[1.524rem] text-[#2C2B2B]">
          Track Your Goal
        </h2>
        <p className="text-[#787878] text-base font-medium mt-[.938rem] h-[3.75rem] w-80">
          Don’t worry if you have trouble determining your goals, We can help
          you determine your goals and track your goals
        </p>
      </div>
      
    
      <div className='mt-[6.125rem] mb-[2.75rem]'>
       
       <Circle className='h-[4.5rem] w-[4.5rem] ms-auto me-[.59rem] mb-[-4.2rem] transition '   percent={progress} strokeWidth={2} strokeColor="#809AFF" trailColor='transparent' trailWidth={4} strokeLinecap='round' /> 
     
       <Link to={'/page-2'} className="flex justify-center ms-auto   items-center me-4 w-[3.75rem] h-[3.75rem]   text-blue-600 rounded-full  bg-gradient-to-r from-[#DEE5FF] to-[#809AFF]">
       <button className='align-right '  >
         <FaGreaterThan className='text-white '/>
         </button> 
        
       </Link>
   
       </div>
    </div>
  )
}

export default Page1