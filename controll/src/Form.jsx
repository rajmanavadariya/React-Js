import { useState } from "react"

function Form() {
    const[inputValue,setinputValue]=useState("")

    function sub(e){
        e.preventDefault()
        alert(`${inputValue}`)
    }

  return (
   <div>
    <form onSubmit={sub}>
         <label>Enter Your Name :</label>  
         <input type="text" value={inputValue} onChange={(e)=>setinputValue(e.target.value)}/>

         <button type="submit">Submit</button>
         
        
    </form> 
   </div>
  )
}

export default Form