import React from 'react'
import { useState } from 'react'
import { SavedContext } from './SavedContext'

const Tabsec = (clickTab) => {

  const [isIncome, setIsIncome] = useState(true)
  return (
    <>

    {clickTab && (
      <div className="all flex mt-10 ">
        <div className='left flex flex-col mt-6 w-80'>
          <button className="Income w-fit mb-3 mx-3 rounded-lg text-xl p-3 bg-pink-300" onClick={()=>setIsIncome(true)}>Income</button>
          <button className="Expense w-fit mt-3 mx-3 rounded-lg text-xl p-3 bg-pink-300" onClick={()=>setIsIncome(false)}>Expense</button>
        </div>
        
        <div className="right bg-red-300 px-4 py-2">
          {isIncome ? (<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, laudantium?</p>):(<p>heloedjndudjnjbk</p>)}
        
        
        
        </div>
      </div>
    ) 
}   
    </>
  )
}

export default Tabsec