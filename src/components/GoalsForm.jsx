import React from 'react'

const GoalsForm = ({label}) => {
  return (
    <div className='mt-4'>
    <form className="max-w-sm mx-auto flex flex-col  items-center justify-center">

<div className='my-2 relative'>
 <div   class="block text-[#2C2B2B] w-[21.438rem]  p-6  border border-gray-300 rounded-lg font-semibold bg-[#F1F1F1] text-[1.15rem] focus:ring-blue-500 focus:border-blue-600 dark:bg-blue-700 dark:border-blue-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">  
{label}
<input type='checkbox'  className='h-7 w-7 float-end border-blue-500'/> 

</div>

</div>

 </form>
</div>
  )
}

export default GoalsForm