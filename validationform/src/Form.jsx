import React from 'react'
import { useState } from 'react'

function Form() {
    const[formdata , setformdata] = useState({
        username : "",
        email : "",
        password : ""
    })
    const[errors , setErrors] = useState({})

    function handleInput(e){
        const{name , value} = e.target
        
        setformdata({
            ...formdata,
            [name] : value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(formdata);

        let errors = validate(formdata)
        if(Object.keys(errors).length === 0){
            alert("Submited")
        } else{
            setErrors(errors)
        }

        function validate(values){
            let errors = {}
            let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

            if(!values.username){
                errors.username = "Username Is Required"
            }

            if(!regex.test(values.email)){
                errors.email = "Email Is Required"
            }

            if(!values.password){
                errors.password = "Password Is Required"
            } else if(values.password.length < 8){
                errors.password = "Minimum 8 Characters Are Required"
            }
            return errors
        }
    }
  return (
    <div className='cen'>
        <form onSubmit={handleSubmit}>
        <label>Enter Username :</label>
        <input type="text" name="username" id='in1' placeholder='Enter Username' value={formdata.username} onChange={handleInput} />
        <p style={{color : "red"}}>{errors.username}</p>
        <br /><br />
        <label>Enter Email :</label>
        <input type="text" name="email" id='in2' placeholder='Enter Email' value={formdata.email} onChange={handleInput} />
        <p style={{color : "red"}}>{errors.email}</p>
        <br /><br />
        <label>Enter Password :</label>
        <input type="text" name="password" id='in3' placeholder='Enter Password' value={formdata.password} onChange={handleInput} />
        <p style={{color : "red"}}>{errors.password}</p>
        <br /><br />
        <button type='submit'>Submit</button>
    </form>
    </div>
  )
}

export default Form