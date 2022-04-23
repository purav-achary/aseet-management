import React ,{useState,useEffect}from 'react'
import Articles from '../Components/Articles'
import AddArticle from '../Components/AddArticle'
import { db } from '../firebaseConfig'
import { onSnapshot } from 'firebase/firestore';
import Header from '../Components/Header';
import Filter from "../Components/Filter";
import { collection, orderBy, query } from "firebase/firestore";
import "./Home.css"
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Update from './../Components/Update';
import img11 from '../assets/Search.png'


const Home = () => {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchActive, setSearchActive] = useState(false);
  const [filterTerm, setFilterTerm] = useState("");
  const [isFilterActive, setFilterActive] = useState(false);



useEffect(() => {
  try{
  const articleRef = collection(db, "Articles");
  const q = query(articleRef, orderBy("createdAt", "desc"));
  onSnapshot(q, (snapshot) => {
    const articles = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setArticles(articles);
    setLoading(false);
    console.log(articles);
  });}
  catch{
  setLoading(false);
  }
}, []);


const [search, setSearch] = useState("");
   
  
    const handleSubmit = (e) => {
        e.preventDefault();
       if(search.length>1)
       {
        setSearchTerm(search);
        setSearchActive(true);
       }else{
        setSearchActive(false);
       }
    }


  return (
      
    <div>
      <Header setSearchTerm={setSearchTerm} setSearchActive={setSearchActive}/> 

      <div className='Search'>

      <form onSubmit={handleSubmit}>

      

          <input 
          value={search}
          type = "text"
          placeholder='Search...'
          onChange={(e) => setSearch(e.target.value)}
>         
              
          </input>
        
        </form> 

      </div>

      <div className='add'>
      <div className="col-md-6">
                  <AddArticle /> 
                  <div style={{margin:"5vh"}}>
                  </div>
        </div>
      
        
      </div>

      <div className='filter'>
        <div className='col-md-6'>
        <p>Files</p>
                  <Filter 
                  setFilterActive={setFilterActive} 
                  setFilterTerm={setFilterTerm}/>
          </div>          
         </div>        

        
         
    <div className="articles">
                
                <div className="artifo">
                <div className='art' 
                >
                  <Articles 
                  articles={articles} 
                  loading={loading} 
                  isSearchActive={isSearchActive} 
                  searchTerm={searchTerm} 
                  filterTerm={filterTerm}
                  isFilterActive={isFilterActive}  
                  />
                  
                  </div>
                </div>
                <BrowserRouter>
                    <Switch>
                    <Route  path="/addarticle" component={AddArticle}/>
                    </Switch>
                </BrowserRouter>
              </div>


              

             

    </div>
  )
}

export default Home