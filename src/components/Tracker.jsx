import React from 'react'
import Graph from './Graph'
import { Link } from 'react-router-dom'
import { IoWarningOutline } from "react-icons/io5";
import { FaGreaterThan } from 'react-icons/fa6';
import { CiSearch } from "react-icons/ci";

const Tracker = () => {
  return (
    <div>
        <h3 className="flex  flex-col ms-4 mt-[4.250rem] justify-center items-center font-bold text-[1.6rem] text-[#2C2B2B] ">
       Workout Tracker
      </h3>
      <div>
        <Link to={'/calender'}  >
        <Graph/>
        </Link>
       
      </div>
     
      <div className='my-2 flex justify-center  '>
      <div class="text-blue-500 ms-4    mt-[14rem] text-[2.5rem] absolute inset-y-0 start-0 flex items-center pe-3.5 pointer-events-none">
      <IoWarningOutline/>
 <p className='mt-[.6rem] ms-4 text-[1rem] text-[black] font-semibold'>You've burned fewer calories than yesterday. Time to get moving! </p>
  </div>
      
 <div   class="block text-[#2C2B2B] w-[21.438rem]  mt-[2rem] p-[4rem]  bg-gradient-to-r from-[#819DFF47] to-[#10101000] border border-gray-300 rounded-lg font-semibold bg-[#F1F1F1] text-[1.15rem] focus:ring-blue-500 focus:border-blue-600 dark:bg-blue-700 dark:border-blue-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">  




</div>
      </div>
      <div className="ml-4 mt-[5.313rem] flex flex-col">
        <div className='flex '>
        <h2 className="h-6 w-64 text-2xl font-bold leading-[1.524rem] text-[#2C2B2B]">
        Upcoming Workout
        </h2>
        <Link className='text-[gray]'>See more</Link>
        </div>
       
        
      </div>
      <div className='my-2 flex justify-center  '>
      <div class="text-blue-500 ms-4  mt-[48rem]   text-[2.5rem]  inset-y-0 absolute start-0 flex items-center pe-3.5 pointer-events-none">
  <img src="../../images/workOutImage1.png" alt="" className='rounded-full w-[6rem] h-[6rem]  bg-[#819AFF26] '/>
<div className='flex flex-col'>
    <p className='text-2xl text-[black] mt-[-2rem] ms-2'>Full Body Workout</p>
    <p className='text-[#7F7F7F] text-xl ms-2'>Today 3px</p>
    <label class="inline-flex items-center cursor-pointer ms-auto ">
  <input type="checkbox" value="" class="sr-only peer"/>
  <div class="relative   w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
</label>
</div>

  </div>
      

      </div>
      <div className='my-2 flex justify-center  '>
      <div class="text-blue-500 ms-4 border-gray-200  mt-[58rem]   text-[2.5rem]  inset-y-0 absolute start-0 flex items-center pe-3.5 pointer-events-none">
  <img src="../../images/workOutImage2.png" alt="" className='rounded-full w-[6rem] h-[6rem]  bg-[#819AFF26] '/>
<div className='flex flex-col'>
    <p className='text-2xl text-[black] mt-[-2rem] ms-2'>Upper Body Workout</p>
    <p className='text-[#7F7F7F] text-base ms-2'>4 Feb,3.30 pm</p>
    <label class="inline-flex items-center cursor-pointer ms-auto ">
  <input type="checkbox" value="" class="sr-only peer"/>
  <div class="relative   w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
</label>
</div>

  </div>
      

      </div>

<div className='flex flex-col items-cente'>
<h3 className=" ms-4 mt-[20rem] font-bold text-[1.6rem] text-[#2C2B2B] ">
      What Do You Want to Train
      </h3>
      
   
      
 <div   class="block flex-col  mx-auto rounded-2xl justify-start text-[#2C2B2B] w-[21.438rem]  mt-[2rem] p-[4rem]  bg-gradient-to-r from-[#8CB1FF99] to-[#10101000] border border-gray-300 font-semibold bg-[#F1F1F1] text-[1.15rem] focus:ring-blue-500 focus:border-blue-600 dark:bg-blue-700 dark:border-blue-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">  
<p className='ms-[-2rem] mt-[-2rem]'>Full Body Workout</p>
<p className='ms-[-2rem] mt-[-.2rem]'>Arms</p>
<p className='ms-[-2rem] mt-[-.098rem]'>Chest</p>



</div>
     
</div>
<div className=' mb-[9.75rem] '>
       
     
       <Link  className="flex mt-[-2rem]  justify-center mx-auto   items-center  w-[3.75rem] h-[3.75rem]   text-blue-600 rounded-full  bg-gradient-to-r from-[#DEE5FF] to-[#809AFF]">
       <button className='align-center  '  >
         <CiSearch className='text-white  '/>
         </button> 
        
       </Link>
   
       </div>
    </div>
  )
}

export default Tracker

    
 