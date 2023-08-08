import React from 'react'
import { useState } from 'react'
// import CategoryData from './CategoryData'
import Edit from './Edit'
import EditMenu from './EditMenu'

const Category = ({setCatItem,setIsCat,categoryData,setCategoryData}) => {
    // const [isCatActive, setIsCatActive] = useState(false)
    const [isEdit, setIsEdit] = useState(false)
    const [editItem, setEditItem] = useState('')


  return (
    <>
    <div className='w-[45%] p-10 bg-gray-700 flex flex-col'>
      <div className="edit text-end">

      <Edit
          setIsEdit={setIsEdit}
        />

        {isEdit && (
        <EditMenu
          setIsEdit={setIsEdit}
          setEditItem={setEditItem}
          categoryData={categoryData}
          setCategoryData={setCategoryData}

        />
      )}
      </div>
  
        <div className="grid grid-cols-3 gap-4">

          {categoryData.map((catData)=>
        
        <div className="border-2 border-red-400 hover:border-b-1 hover:border-white px-3 py-2 cursor-pointer text-center" onClick={()=>{setCatItem(catData); setIsCat(false)}}>{catData}</div>
        
        )}
      </div>
        </div>

      </>
  )
}

export default Category