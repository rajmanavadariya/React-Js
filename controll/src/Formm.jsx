import { useState , useRef} from "react"

function Form() {
    const inputref = useRef(null)

    function sub1(e){
        e.preventDefault()
        alert(`$Name : ${inputref.current.value}`)
    }

  return (
   <div>
    <form onSubmit={sub1}>
         <label>Enter Your Name :</label>  
         <input type="text" ref={inputref} />

         <button type="submit">Submit</button>
         
        
    </form> 
   </div>
  )
}

export default Form