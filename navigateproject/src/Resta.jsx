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
            <h2>{el.title}</h2>
            <p>{el.content}</p>
            <button onClick={()=>handleDelet(el.id)}>Delete</button>

            <Link to={`/edit/${el.id}`}>
              <button>Edit</button>
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