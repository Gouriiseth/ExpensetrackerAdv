import React from 'react'

const Edit = ({setIsEdit,}) => {
  return (
      <button className="edit" onClick={() => {setIsEdit(p => p = !p);}}>Edit</button>
  )
}

export default Edit;