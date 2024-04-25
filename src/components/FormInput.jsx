import React from 'react'

const FormInput = ({entry,inputType}) => {
  return (
   <div className='my-5'>
      <input type={inputType} placeholder={entry} disabled class="block w-[21.438rem] placeholder:[#7F7F7F] p-4 text-gray-900 border border-gray-300 rounded-lg bg-[#F1F1F1] text-base focus:ring-blue-500 focus:border-blue-600 dark:bg-blue-700 dark:border-blue-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>  
      
   </div>
 
  

   
  )
}

export default FormInput