import React, { useState } from 'react'
import { useEffect,useMemo } from 'react'

function Example() {
    const[isdarkmode , setisdarkmode]=useState(false)

    const theme = useMemo(()=>{
        return  {
            backgroundColor : isdarkmode ? "black" : "white",
            color : isdarkmode ? "white" : "black"
    }
    },[isdarkmode])

  document.body.style.backgroundColor = theme.backgroundColor
  document.body.style.color = theme.color



  return (
    <div>
         <button onClick={()=>setisdarkmode(!isdarkmode)}>Dark & light</button>
         <h1>
            Mode Change
         </h1>

         <h1>
            Mode Change
         </h1>

         <h1>
            Mode Change
         </h1>

         <h1>
            Mode Change
         </h1>
    </div>
  )
}

export default Example