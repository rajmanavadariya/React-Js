import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router ,Routes , Route } from 'react-router-dom';
import Blog from './Blog'
import Addblog from './Addblog'

function App() {

       const[posts , setposts] = useState([])

       function addnewpost(title,content){
        let newpost ={
          id : new Date().getTime(),
          title : title,
          content : content

        }
        setposts([...posts , newpost])
       }


  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element = {<Blog posts = {posts}/>}></Route>
          <Route path='/add' element = {<Addblog addnewpost = {addnewpost}/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
