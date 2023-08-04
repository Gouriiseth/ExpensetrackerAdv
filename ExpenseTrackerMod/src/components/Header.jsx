import React from 'react'
import { useState } from 'react'
const Header = () => {
    const [activeBtn, setActiveBtn] = useState("income")
    const handleActive=(btnType)=>{
            setActiveBtn(btnType)
    }

  return (
    <div className="flex flex-row justify-center bg-gray-700">
        <div>
        <button className={`${activeBtn==='income' ? 'text-blue-500 border-solid border-2 border-blue-600' :'bg-gray-900' }mt-3 text-white rounded-lg py-2 px-9 mx-4 text-2xl `} onClick={()=>handleActive('income')}>Income</button>

        <button className='bg-gray-900 mt-3 text-white rounded-lg py-2 px-9 mx-4   text-2xl hover:text-red-500 hover:border-solid hover:border-2 hover:border-red-600'>Expense</button>
    </div>
    </div>
  )
}

export default Header