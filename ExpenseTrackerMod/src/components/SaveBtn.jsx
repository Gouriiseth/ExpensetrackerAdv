import React from 'react'
import { useState } from 'react'
const SaveBtn = ({saved}) => {
    const [saveItem, setSaveItem] = useState('')

  return (
    <div>
      <button className="save mt-7 mx-4 rounded-lg bg-red-700 text-2xl text-white px-9 py-2 mx-4" onClick={()=>setSaveItem(saved)}>Save</button>
      </div>  
  )
}

export default SaveBtn