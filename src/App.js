
import './App.css';
import Home from './Views/Home';
import Articles from './Components/Articles';
import AddArticle from "./Components/AddArticle"
import Header from './Components/Header';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Login from './Components/Login';

function App() {

  return (
      <div className='App'>  
      
      <BrowserRouter>
      <div className='components'>
      
      
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route  path="/addarticle" component={AddArticle}/>
        <Route  path="/articles" component={Articles}/>
        <Route  path="/login" component={Login}/>
      </Switch>
      </div>
    </BrowserRouter>
      </div>
  );
}

export default App;
