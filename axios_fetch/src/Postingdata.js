import axios from 'axios'
import React from 'react'
import { useState } from 'react'


function Postingdata() {


    const[post,setposts] = useState({
        title : "",
        body : ""
    })

    const handlechange =(event)=>{
        setposts({...post , [event.target.name] : event.target.value})
    }

    const handlesubmit=(event)=>{
        event.preventDefault()
        axios.post('http://localhost:8000/posts',post)
        .then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
    }




  return (
    <div>
        <form onSubmit={handlesubmit}>
            Title : <input type="text" name='title' onChange={handlechange} value={post.title} />
            Posts : <input type="text" name='body' onChange={handlechange} value={post.body} />
            <button>Submit</button>
        </form>

    </div>
  )
}

export default Postingdata