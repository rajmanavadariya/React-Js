import React from 'react'
import { useState } from 'react'

function Crud() {
    const[inputvalue,setinputvalue] = useState('')
    const[todos,settodos] = useState([])
    const[editid,seteditid]=useState(null)
 
    localStorage.setItem("todo",JSON.stringify(todos))
 
    function add(){
        if(editid !== null){
            settodos(todos.map(todo=>{
                if(todo.id === editid){
                    return{...todo , text:inputvalue}
                }
                return todo
            }))

            seteditid(null)
            setinputvalue('')



        }else{
            let newtodos={
                id : new Date().getTime(),
                 text : inputvalue
             }
            
        
             settodos([...todos,newtodos])
             setinputvalue('')
            }
    }
    

    function del(id){
        settodos(todos.filter((todo)=>(
            todo.id !== id
        )))
    }

    function edit(id){
        const todotoedit = todos.find(todo => todo.id === id)
        setinputvalue(todotoedit.text)
        seteditid(id)
    }

  
 
 
 
 
   return (
    <center>
     <div>
         <h1>TO-DO LIST</h1>
 
         <input type='text' placeholder='Enter your task' value={inputvalue} onChange={(e)=>setinputvalue(e.target.value)}/>
        
         <button onClick={add} id='add'>Add</button>
    
    {
     todos.map((el,i)=>(
    
        <div key={i}>
          <p key={i}>{el.text}  <button onClick={()=>del(el.id)} id='del'>Delate</button>  <button onClick={()=>edit(el.id)}>Edit</button>   </p>
          <hr/>
         
         
         </div>
     ))
    }
     </div>
   </center>  
   )
 
}

export default Crud