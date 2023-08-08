import React from 'react'
import { useState } from 'react'
// import CategoryData from './CategoryData';
const EditMenu = ({setIsEdit,setEditItem,categoryData,setCategoryData}) => {

    const [added, setAdded] = useState('')

    const del=(editData)=>{
          
            const filteredData = categoryData.filter((data)=>data!=editData);
            
            setCategoryData(filteredData);
            // console.log(filteredData);
            // console.log(categoryData);
          
    }

    const add=()=>{
      setCategoryData([...categoryData,added]);
      setAdded('');
    }

    const handleBack=()=>{
      setIsEdit(false)
    }
  return (
      <div className='w-72 px-4 py-2 flex flex-col h-full bg-gray-800 absolute top-0 right-0 overflow-y-auto text-center'>
          <div className='flex flex-col'>
        {categoryData.map((editData)=>
            <div className="flex justify-evenly ">
            <div className="text-white px-5 py-2 cursor-pointer mb-1 w-1/2 " onClick={(e) => { setEditItem(editData); setIsEdit(false) }}>{editData}</div>
            <button className="delete w-1/2 text-white " onClick={()=>del(editData)}>delete</button>
            </div>
        )}
    </div> 
    <div className="footer flex">
    <input type="text" id='addEdit' className='' placeholder='add expense category' value={added} onChange={(e)=>setAdded(e.target.value)} />
    <button className='m-3 bg-red-500 p-3 text-2xl' onClick={()=>add()}>add</button>
      </div>

      <button className="back mt-10 bg-red-500 text-1xl  w-fit p-3 rounded-md" onClick={handleBack}>BACK</button>
      </div>
  )
}

export default EditMenu