import React from 'react'

const Tabt = (clickTabt) => {
    return (
        <>

            {clickTabt && (
                <div className='text-white'>
                    Tab 3 Opened
                </div>
            )
            }
        </>
    )
}

export default Tabt