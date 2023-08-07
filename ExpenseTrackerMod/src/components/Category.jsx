import React from 'react'
import CategoryData from './CategoryData'

const Category = ({setCatItem,setIsCat}) => {

  return (
    <>
    <div className='w-[45%] p-10 bg-gray-700'>
        <div className="grid grid-cols-3 gap-4">
          {CategoryData.map((categoryData,index)=>(
              <div 
              key='index'
              className="bg-fuchsia-200 hover:bg-fuchsia-400 rounded-md px-5 py-2 cursor-pointer" onClick={(e)=>{setCatItem(categoryData); setIsCat(false)}}>{categoryData}</div> 
          ))}
        </div>

    </div>
      </>
  )
}

export default Category