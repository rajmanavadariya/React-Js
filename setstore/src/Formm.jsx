import React from 'react'
import { useState } from 'react'

function Formm() {
    
        const[formdata,setformdata] = useState({
         
           username : "",
           email : "",
           password : ""
        })
   
   function handin(e){
       const{name,value}=e.target
   
       setformdata({
           ...formdata,
           [name] : value
       })
   }
   
   function handlesub(e){
       e.preventDefault()
       console.log(formdata)
   }
   
   
  return (
    <div className='cen'>
    <form onSubmit={handlesub}>
        <label>Enter Your Name :</label>
        <input name='username' value={formdata.username} onChange={handin}/><br/><br/><br/>

        <label>Enter Your Email :</label>
        <input name='email' value={formdata.email} onChange={handin}/><br/><br/><br/>

        <label>Enter Your Pass :</label>
        <input name='password' value={formdata.password} onChange={handin}/><br/><br/><br/>

        <button type='submit'>Submit</button>
    </form>
</div>
  )
}

export default Formm