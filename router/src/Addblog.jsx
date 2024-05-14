import React from 'react'
import { useState } from 'react'
import { Link , useNavigate } from 'react-router-dom'



 
function Addblog({addnewpost}) {
     
        const[title , settitle]=useState('')
        const[content , setcontent]=useState('')
        const navigate = useNavigate()

        function handlesubmit(e){
          e.preventDefault()
          addnewpost(title,content)
          navigate('/')
        }

  return (
    <>
       <h1>Add Post Page</h1>

      <form onSubmit={handlesubmit}>
        <h3>Title :</h3>
        <input type="text" value={title} onChange={(e)=>settitle(e.target.value)} />

        <br/><br/>

        <h3>Content :</h3>
        <textarea value={content} onChange={(e)=>setcontent(e.target.value)}></textarea>

        <br/><br/>

        <button type='submit'>Add Blog</button>
      </form>










       <Link to="/"> Back To Home</Link>
    

    </>
  )
}

export default Addblog