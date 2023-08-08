import React from 'react'
import Content from './Content'
import Category from './Category'
// import Header from './Header'
import Account from './Account'
import { useState } from 'react'

const Wrapper = ({isIncome,isExpense}) => {
    const [isAcc, setIsAcc] = useState(false)
    const [isCat, setIsCat] = useState(false)
    const [catItem, setCatItem] = useState('')
    const [accItem, setAccItem] = useState('')
    const [categoryData, setCategoryData] = useState([
        'food',
        'movie',
        'travel',
        'rent',
        'shopping',
        'hospital',
        'fees',
        'other',
    ])

    // const CategoryData = [
    //     'food',
    //     'movie',
    //     'travel',
    //     'rent',
    //     'shopping',
    //     'hospital',
    //     'fees',
    //     'other',
    // ]
    return (
        <>
                {/* <Header
                /> */}
            <div className="flex justify-between">
               {/* <div> */}
                <Content 
                    setIsAcc={setIsAcc}
                    setIsCat={setIsCat}
                    catItem={catItem}
                    accItem={accItem}
                    setCatItem={setCatItem}
                    setAccItem={setAccItem}
                    isIncome={isIncome}
                    isExpense={isExpense}
                />
                {/* </div> */}

                
                {isCat && (
                <Category 
                    setCatItem={setCatItem}
                    setIsCat={setIsCat}
                    categoryData={categoryData}
                    setCategoryData={setCategoryData}
                />
                )}
                {isAcc && ( 
                <Account 
                    setAccItem={setAccItem}
                    setIsAcc={setIsAcc}
                />
            )}
            </div>
        </>
    )
}

export default Wrapper