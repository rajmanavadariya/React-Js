import React,{useContext} from 'react'
import Themecontext from './Themecontext'

function Themecomponent() {
      
      const{theme} = useContext(Themecontext)
  return (
    <div
       style={{
        background : theme === "light" ? "White" : "black",
        color : theme === "light" ? "black" : "white",
        height : "100vh"
       }}
    >   
        <h1>Theme</h1>
    </div>
  )
}

export default Themecomponent