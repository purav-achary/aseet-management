import React from 'react'

const Download = ({ files = [], remove }) => {
  return (
    <div>
        <button
          className="btn btn-danger"
          
          style={{ cursor: "pointer" }}
          
        >Delete</button>
    </div>
  )
}

export default Download