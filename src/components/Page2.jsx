import React, { useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {  Circle } from 'rc-progress';
import { FaGreaterThan } from 'react-icons/fa6';
import { useProgress } from '../context/Progress';

const Page2 = () => {
    const linkRef = useRef(null); // Create a reference for the link

    const focusLink = () => {
      if (linkRef.current) {
        linkRef.current.focus(); // Set focus to the link
      }
    };
    const {progress,setProgress}=useProgress();
    const navigate=useNavigate();
    useEffect(()=>{
      
      
            const timeoutId = setTimeout(() => {
                setProgress(70); 
              }, 300); 
          
              return () => clearTimeout(timeoutId);
        
      

    },[progress,setProgress])
   
  return (
    <div className=''>
        
        <Link  ref={linkRef} to={'/sign-up'} className='text-[#9FB2FF] flex justify-end me-4 underline mt-[2.75rem] '   >Skip</Link>
        <img
        className="w-[22rem] content mx-auto h-[14.663rem] flex justify-center  mt-[5.75rem] "
        src="../images/image2.png"
        alt="image2"
      />
       <div className="ml-4 mt-[5.313rem] flex flex-col">
        <h2 className="h-6 w-64 text-xl font-semibold leading-[1.524rem] text-[#2C2B2B]">
        Get Burn
        </h2>
        <p className="text-[#787878] text-base font-medium mt-[.938rem] h-[3.75rem] w-[19rem]">
        Let’s keep burning to achieve your goals, it hurts only temporarily, if you give up now you will be in pain forever
        </p>
      </div>
      
      <div className='mt-[6.125rem] mb-[2.75rem]'>
       
       <Circle className='h-[4.5rem] w-[4.5rem] ms-auto me-[.59rem] mb-[-4.2rem] transition  ' value={progress}   percent={progress} strokeWidth={2} strokeColor="#809AFF" trailColor='transparent' trailWidth={4} strokeLinecap='round' /> 
     
       <Link  className="flex justify-center ms-auto   items-center me-4 w-[3.75rem] h-[3.75rem]   text-blue-600 rounded-full  bg-gradient-to-r from-[#DEE5FF] to-[#809AFF]">
       <button className='align-right ' onClick={focusLink}>
         <FaGreaterThan className='text-white '/>
         </button> 
        
       </Link>
   
       </div>
     
    </div>

  )
}

export default Page2