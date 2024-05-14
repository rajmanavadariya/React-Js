import React from 'react'
import { Link } from 'react-router-dom'

function Blog({posts,deletepost}) {
  function handledelete(id){
    deletepost(id)
  }
  return (
    <div>
         <h1>Wel Come to Our page</h1> 

         {
            posts.map((el,i)=>(
                
                <div key={i}>
                   <h2>{el.title}</h2>
                   <p>{el.content}</p>
                   <button onClick={()=>handledelete(el.id)}>delete</button>
                  <Link to={`/edit/:${el.id}`}>
                    <button>edit</button>
                  </Link>
                   </div>
                
            ))
         }
         <Link to ="/add">Add Blog</Link>

    </div>
  )
}

export default Blog