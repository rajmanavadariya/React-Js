import React,{useState} from 'react'
import { useEffect } from 'react'

export default function Fetchdata() {

    const [data, setdata] = useState([])
    useEffect(()=>{

        const fetchaingdata = async () =>{

                try{
                    const res = await fetch("https://fakestoreapi.com/products")
                    const jsondata = await res.json()
                    console.log(jsondata)
                    // .then(jsondata => setdata(jsondata.data))
                    setdata(jsondata)
                }
                catch(err){
                    console.log(err)
                }

        }

        fetchaingdata()

    },[])


  return (
    <>

        <h1>Raj <span>Enterprise</span></h1>

       <div className="container">

            {
                data.map((el,index)=>(
                    <div key={index} className="box">
                        <img src={el.image} alt={el.image} />
                        <p>{el.title}</p>
                        <h3> $ : {el.price}</h3>
                    </div>
                )
                    
                )
            }

       </div>
    
    </>
  )
}
