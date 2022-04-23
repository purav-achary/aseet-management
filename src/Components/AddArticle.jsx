import React from 'react'
import { Timestamp, collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db } from "./../firebaseConfig";
import { toast } from "react-toastify";
import { useState } from 'react';
import "./AddArticle.css"
import img7 from '../assets/db.png'

const AddArticle = () => {

      const [formData, setFormData] = useState({
             title: "",
             tag: "",
             image: "",
             createdAt: Timestamp.now().toDate(),
        });
    
      const [progress, setProgress] = useState(0);

      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleImageChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
      };
    
      const handlePublish = () => {
        if (!formData.title || !formData.tag || !formData.image) {
          alert("Please fill all the fields");
          return;
        }
    
        const storageRef = ref(
          storage,
          `/images/${Date.now()}${formData.image.name}`
        );
    
        const uploadImage = uploadBytesResumable(storageRef, formData.image);
    
        uploadImage.on("state_changed",
          (snapshot) => {
            const progressPercent = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(progressPercent);
          },
          (err) => {
            console.log(err);
          },
          () => {
            setFormData({
              title: "",
              tag: "",
              image: "",
            });
    
            getDownloadURL(uploadImage.snapshot.ref).then((url) => {
              const articleRef = collection(db, "Articles");
              addDoc(articleRef, {
                title: formData.title,
                tag: formData.tag,
                imageUrl: url,
                createdAt: Timestamp.now().toDate(),
                
                
              })
                .then(() => {
                  toast("Article added successfully", { type: "success" });
                  setProgress(0);
                })
                .catch((err) => {
                  toast("Error adding article", { type: "error" });
                });
            });
          }
        );
      };



  return (





    <div className='Addform'>
        <h2>Create article</h2>
          <div className="form">
            <div className='title'>
            
            <input
              placeholder='Title'
              style={{ position: "absolute", top: "4px",}}
              type="text"
              name="title"
              className="form-control"
              value={formData.title}
              onChange={(e) => handleChange(e)}
            />

            </div>
          </div>

          {/* tag */}
  <div className='tag'>   
      <select className='dropdown'  value={formData.tag} name="tag" onChange={(e) => handleChange(e)} style={{position:"absolute"}}>
        <option value="Audio">Audio</option>
        <option value="Image">Image</option>
        <option value="Video">Video</option>
        <option value="File">File</option>
      </select>
   
              
  </div>       

  <div className='img'>
          <img src={img7}    
          style={{height: "200px",
          left: "300px",
          position: "absolute",
          top: "15px",}}>
          </img>


          {/* image */}
          <label htmlFor=""></label>
          <input  
          style={{
            top: "146px",
            opacity: "0%",
            left: "294px",
            position: "absolute",
          }}
            type="file"
            name="image"
            className="form-control"
            onChange={(e) => handleImageChange(e)}
          />

        <h3 style={{
            left: "370px",
            position: "absolute",
            top: "170px",
            fontsize: "large"
          }}>
          Upload File
        </h3>

          {progress === 0 ? null : (
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped mt-2"
                style={{ width: `${progress}%` }}
              >
                {`uploading image ${progress}%`}
              </div>
            </div>
          )}
      <div className='upload'>
          <button
            className="form-control btn-primary mt-2"
            onClick={handlePublish}
          >
            Upload
          </button>
      </div>
    </div>
    </div>
  )
}

export default AddArticle