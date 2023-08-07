import React from 'react'
import Content from './Content'
import Category from './Category'
import Header from './Header'
import Account from './Account'
import { useState } from 'react'

const Wrapper = () => {
    const [isAcc, setIsAcc] = useState(false)
    const [isCat, setIsCat] = useState(false)
    const [catItem, setCatItem] = useState('')
    const [accItem, setAccItem] = useState('')
    return (
        <>
                <Header
                />
            <div className="flex justify-between">
               {/* <div> */}
                <Content 
                    setIsAcc={setIsAcc}
                    setIsCat={setIsCat}
                    catItem={catItem}
                    accItem={accItem}
                />
                {/* </div> */}

                
                {isCat && (
                <Category 
                    setCatItem={setCatItem}
                    setIsCat={setIsCat}
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