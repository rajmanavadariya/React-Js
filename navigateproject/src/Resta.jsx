import React from 'react';
import { Link } from 'react-router-dom';
import './Resta.css'


function Resta({ posts , deletPost }) { 
function handleDelet(id){
  deletPost(id)
}
  return (
    <center>
      <div>
      <h1 className='suphed'>Welcome To our Restaurant</h1>
      {
        posts.map((el) => (
          <div key={el.id}> 
            <h2 id='head'>{el.title}</h2>
            <p id='para'>{el.content}</p>
            <button onClick={()=>handleDelet(el.id)} id='btndel'>Delete</button>

            <Link to={`/edit/${el.id}`}>
              <button id='edit'>Edit</button>
            </Link>
          </div>
        ))
      }
      <Link to="/add" id='link'>ADD MENU</Link>
    </div>
    </center>
  );
}

export default Resta;