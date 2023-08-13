import React from 'react'
import { SavedContext } from './SavedContext'
import { useContext} from 'react'

const SavedContent = () => {
    // console.log(data);
    // setSaved(false)
    const [dataArr]= useContext(SavedContext);
    return (
      <div>
        {  dataArr.map((itemData) => (
          <div className='bg-blue-200'>
            <p> {itemData.date}</p>
            <p> {itemData.amount}</p>
            <p> {itemData.catItem}</p>
            <p> {itemData.accItem}</p>
            <p> {itemData.note}</p>
            <p> {itemData.desc}</p>
            </div>
           ))
      } 
      </div>
  )
}

export default SavedContent