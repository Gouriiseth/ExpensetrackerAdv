import React from 'react'
import AccountData from './AccountData';

const Account = ({setAccItem,setIsAcc}) => {
  return (
      <>
          <div className='w-[45%] p-10 bg-gray-700'>
              <div className="grid grid-cols-3 gap-4">
                {AccountData.map((accData)=>(
                  <div className="bg-fuchsia-200 hover:bg-fuchsia-400 rounded-md px-5 py-2 cursor-pointer" onClick={(e)=>{setAccItem(accData); setIsAcc(false)}}>{accData}</div>
                ))}
              </div>


          </div>
      </>
  )
}

export default Account