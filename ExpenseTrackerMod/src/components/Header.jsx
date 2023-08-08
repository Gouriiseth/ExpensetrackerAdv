import React from 'react'
import { useState } from 'react'
import Wrapper from './Wrapper'
const Header = ({saved}) => {

    // const [income, setIncome] = useState([])
    // const [expense, setExpense] = useState([])

    const [isIncome, setIsIncome] = useState(false)
    const [isExpense, setIsExpense] = useState(false)

    const handleIncome=()=>{
        const incomee=saved.filter((save)=>save.category==='income')
        setIncome(incomee)
        console.log(incomee);
    }
    const handleExpense=()=>{
        const expensee=saved.filter((save)=>save.category==='expense')

        console.log(expensee);

    }

    return (
        <>
        <div className="body">
      <div className="flex flex-row justify-center bg-gray-700">
        <button className='bg-gray-900 mt-3 text-white rounded-lg py-2 px-9 mx-4 border-2 border-transparent  text-2xl hover:text-green-500 hover:border-solid hover:border-2 hover:border-green-600' onClick={()=>setIsIncome(p=>p=!p)}>Income</button>
      <button className='bg-gray-900 mt-3 text-white rounded-lg py-2 px-9 mx-4 border-2 border-transparent text-2xl hover:text-red-500 hover:border-solid hover:border-2 hover:border-red-600' onClick={() => setIsExpense(q => q = !q) }>Expense</button>
    </div>
    <Wrapper
      isIncome={isIncome}
      isExpense={isExpense}
    />
        </div>
  </>
  )
}

export default Header