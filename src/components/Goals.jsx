import React from 'react'
import FormInput from './FormInput'
import GoalsForm from './GoalsForm'
import { FaGreaterThan } from 'react-icons/fa6';

import { Link } from 'react-router-dom'

const Goals = () => {
  return (
    <div className=''>
        <Link to={'/tracker'} className='flex ms-4 my-4'><FaGreaterThan /></Link>
        <h3 className="flex justify-center mx-auto mt-[4.250rem] mb-[2.688rem] font-bold text-[1.6rem] text-[#2C2B2B] ">
       What are your goals?
      </h3>
<GoalsForm  label={'Weight Loss'}/>
<GoalsForm  label={'Musical Gain'}/>
<GoalsForm  label={'Flexibility and Mobality'}/>
<GoalsForm  label={'General Fitness'}/>
<GoalsForm  label={'Even-specific training'}/>
<GoalsForm  label={'Minfulness and Mental Health'}/>
<div className="mt-[9.375rem] mb-[5.313rem] flex justify-center">
<button
  class="w-[21.438rem] align-middle  font-sans  text-center  transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gradient-to-r from-[#7B91FF] to-[#95BEFF] text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
  type="button"
>
 <Link   className="text-[1rem]">Confirm</Link> 
</button>
</div>
    </div>
  )
}

export default Goals