import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router ,Routes , Route } from 'react-router-dom';
import Blog from './Blog'
import Addblog from './Addblog'
import Editpage from './Editpage';

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

       function deletepost(id){
        setposts(posts.filter((el)=>(
          el.id !== id
        )))
       }


  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element = {<Blog posts = {posts} deletepost={deletepost}/>}></Route>
          <Route path='/add' element = {<Addblog addnewpost = {addnewpost}/>}></Route>
          <Route path='/edit/:id' element = {<Editpage/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
