import React from 'react'
import "./Filter.css"
import img10 from "../assets/folder.png"
import img11 from "../assets/image.png"
import img12 from "../assets/video.png"
import img13 from "../assets/audio.png"




const Filter = ({setFilterActive,setFilterTerm}) => {

const setFilter=(e)=>{
    if(e.target.value!=="files")
    {
setFilterTerm(e.target.value);
setFilterActive(true);
    }
    else{
        setFilterActive(false);
        setFilterTerm("");
    }
}



  return (

  <div className='sort'>
          

          <div className='files'>
          <img src={img10}
            style={{height: "202px",
              left: "-34px",
              top: "-5px",
              position: "absolute"}}
                    />
          <button className='btn btn-inactive' value="files" onClick={(e)=>setFilter(e)}>All Files</button>
          
          </div>


          <div className='image'>
          <img src={img11}
            style={{height: "160px",
              left: "34px",
              top: "12px",
              position: "absolute"}}
                    />
          <button className='btn btn-active' value="Image" onClick={(e)=>setFilter(e)}>Image</button>
          </div>
          
          <div className='video'>
          <img src={img12}
            style={{height: "160px",
              left: "-40px",
              top: "12px",
              position: "absolute"}}
                    />
          <button className='btn btn-inactive' value="Video" onClick={(e)=>setFilter(e)}>Video</button>
          </div>

          <div className='audio'>
          <img src={img13}
            style={{height: "160px",
              left: "30px",
              top: "12px",
              position: "absolute"}}
                    />
          <button className='btn btn-inactive' value="Audio" onClick={(e)=>setFilter(e)}>Audio</button>
          </div>

          <p >Files</p>
          <br></br>

  </div> 
  )
}

export default Filter