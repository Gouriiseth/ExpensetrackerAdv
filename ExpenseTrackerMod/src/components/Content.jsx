import React from 'react'
import { useState } from 'react'

const Content = () => {

    const [date, setDate] = useState('04/08/2023')
    const [amount, setAmount] = useState(0)
    const [category, setCategory] = useState('')
    const [account, setAccount] = useState('')
    const [note, setNote] = useState('')
    const [desc, setDesc] = useState('')
    const [saved, setSaved] = useState([])

    const handleSave=()=>{
        const newSave={date,amount,category,account,note,desc};

        if(date!=='' && amount!==0 && category!==' ' && account!==''){
            setSaved([...saved,newSave])
            console.log(saved);
        }

        setDate('');
        setAmount('');
        setCategory('');
        setAccount('');
        setNote('');
        setDesc ('');

    }




  return (
      <div className='flex flex-col '>
    <div className=' bg-gray-700 mb-5 h-max pb-7 rounded-lg '>

    <div className="flex  mt-4 mb-2 ">
        <label className="text-2xl text-white mx-6">Date</label>
        <input type="date" value={date} onChange={(e)=>setDate(e.target.value)} className="mx-12 w-1/2 border-b border-white bg-transparent text-2xl px-3 "/>
    </div>   

    <div className="flex  mt-4 mb-2 ">
        <label className="text-2xl text-white  mx-6">Amount</label>
                  <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} className="mx-3 w-1/2 border-b border-white bg-transparent text-2xl px-3"/>
    </div>

          <div className='flex mt-4 mb-2'>
        <label className="text-2xl text-white mx-6">Category</label>
                  <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} className="mx-1 w-1/2 border-b border-white bg-transparent text-2xl px-3"/>
     </div>

          <div className='flex mt-4 mb-2'>
        <label className="text-2xl text-white mx-6">Account</label>
                  <input type="text" value={account} onChange={(e) => setAccount(e.target.value)} className="mx-4 w-1/2 border-b border-white bg-transparent text-2xl px-3"/>
    </div>

      <div className='flex mt-4 mb-2 '>
        <label className="text-2xl text-white mx-6">Note</label>
                  <input type="text" value={note} onChange={(e) => setNote(e.target.value)} maxLength="50" className="mx-12 w-1/2 border-b border-white bg-transparent text-2xl px-3 "/>
    </div>

    </div>
    <div className="desc bg-gray-700 h-72 rounded-lg">
              <div className="flex ">
                  <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} placeholder='Description' max="300" className="ml-12 bg-transparent border-b border-white w-5/6 text-2xl pl-3 pb-3 pt-4" />
                  <div className='pt-4 border-b border-white pr-4'>
              <i className="fa-solid fa-camera text-4xl"></i>
            </div>
        </div>

        <div className="btnn flex justify-center  ">
            <button className="save mt-7 mx-4 rounded-lg bg-red-700 text-2xl text-white px-9 py-2 mx-4
            " onClick={handleSave}>Save</button>
            <button className="continue mt-7 mx-4 rounded-lg border-b border-2 border-white text-2xl text-white px-5 py-2">Continue</button>
        </div>
 </div>
    </div>
  )
}

export default Content