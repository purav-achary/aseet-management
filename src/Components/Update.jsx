import React from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Update = () => {
  

  const {id}=useParams();
  return (
    <div>
      <button
          className="update"
          
          style={{ cursor: "pointer" }}
          
        ><Link to={`/addarticle/${id}`}>Update</Link></button>
    </div>
  )
}

export default Update


