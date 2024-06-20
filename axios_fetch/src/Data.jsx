import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios'

export const Data = () => {
    const [data, setdata] = useState([])
    const [loading, setLoading] = useState(true)
 useEffect(()=>{

     const fatchingdata = async()=>{
        try{
            let response = await axios.get('http://localhost:8000/posts')
            setdata(response.data)
            setLoading(false)
        }
        catch(err){
            console.log("Eroor")
            setLoading(false)
        }
       
     }
fatchingdata()

 })
   
    return (
        <>
        <div className='main'>
            {loading ? (
          <div class="loader-container">
          <div class="loader"></div>
          <div>Loading...</div>
      </div>
            ) : (
                data && data.map((el) => (
                    <div className='mp' key={el.id}>
                          <p>{el.id}</p>
                        <h3>{el.title}</h3>
                        <h4>{el.body}</h4>
        
                    </div>
                ))
            )}
        </div>
    </>

    );
}
