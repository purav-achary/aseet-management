import React from 'react'
import Delete from './Delete';
import "./Articles.css"
import Update from './Update'

const Articles = ({articles,loading,searchTerm,isSearchActive,filterTerm,isFilterActive}) => {

  

  const displayArticles=(id,title,imageUrl,createdAt,tag)=>{
    if(isFilterActive){
      if(tag===filterTerm)
      {
        return <div className='' key={id}>
      
  <div className=''>
    <div className='content '>
      <img src = {imageUrl} alt = 'title' style={{ height: 250, width: 300 }}></img>
   </div>

        <div className='info'>
          <h2>{title}</h2>
          <p>{createdAt.toDate().toDateString()}</p>
          <h4>{tag}</h4>
          <Delete id={id} imageUrl={imageUrl}/>
        </div>

     </div>

   </div>;
      }

    }
    else{
 return <div className='line'  key={id}>
  <div className='elements'>
    <div className='content'>
    <img src = {imageUrl} alt = 'title' style={{ height: 250, width:350,}}></img>
    </div>

      <div className='info'>
          <h2>{title}</h2>
          <p>{createdAt.toDate().toDateString()}</p>
          <h4>{ tag}</h4>
          <Delete id={id} imageUrl={imageUrl}/>
      </div>
      
   </div>
   </div>;
    }
   }

   const displaySearchData=(id,title,imageUrl,createdAt,tag)=>{
     if(title.includes(searchTerm))
     return displayArticles(id,title,imageUrl,createdAt,tag)
   }
    
  return (
    <div className='invi'>
    
{loading?<center>
            <div/>
  </center>:articles.length === 0 ? (
<p>Files not uploaded yet!!</p>

        ):(
            articles.map(({id,title,imageUrl,createdAt,tag})=>{
               return<>{isSearchActive?displaySearchData(id,title,imageUrl,createdAt,tag):displayArticles(id,title,imageUrl,createdAt,tag)}
                 </> 
            })
        )}
        
    </div>
  )
}

export default Articles