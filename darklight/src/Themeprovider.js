import React, { useState } from "react";
import Themecontext from "./Themecontext";

function Themeprovider({children}){
    const[theme , settheme] = useState("light")

    const toggletheme =()=>{
        settheme(prevtheme => (prevtheme=== "light" ? "dark" : "light"))
    }

    return(
        <Themecontext.Provider value ={{theme,toggletheme}}>
            {children}
        </Themecontext.Provider>
    )
}

export default Themeprovider