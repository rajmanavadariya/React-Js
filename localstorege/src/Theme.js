import React from 'react'
import { useState,useEffect } from 'react';

function Theme() {
    const [det, setdet] = useState([])
    const [newdetails, setnewdetails] = useState({ name: '', age: '', occupation: '' })
  
    
    useEffect(() => {
      const saveddet = JSON.parse(localStorage.getItem('det')) || []
      setdet(saveddet)
    }, [])
  
    
    useEffect(() => {
      localStorage.setItem('det', JSON.stringify(det))
    }, [det])
  
    const handleChange = (e) => {
      const { name, value } = e.target
      setnewdetails({ ...newdetails, [name]: value })
    }
  
    const handleSubmit = (e) => {
      e.preventDefault()
      setdet([...det, newdetails])
      setnewdetails({ name: '', age: '', occupation: '' })
    }
  
    return (
      <center>
          <div>
        <h1>Details App</h1>
        <form onSubmit={handleSubmit}>
          <label>
             Name<br/>
            <input type="text" name="title" value={newdetails.title} onChange={handleChange} />
          </label><br/>
          <label>
            Age<br/>
           <input type="text" name="ingredients" value={newdetails.ingredients} onChange={handleChange} />
          </label><br/>
          <label>
            occupation<br/>
            <input type="text"  name="occupation" value={newdetails.occupation} onChange={handleChange} />
          </label><br/>
          <br/>
          <button type="submit">Add Details</button>
        </form>
      
        <div className='main'>
        <table border={3}>
          <thead>
            
            <tr>
             <th>Name :</th>
              <th>Age :</th>
              <th>Occupation :</th>
              
            </tr>
          </thead>
          <tbody>
            {det.map((dl, index) => (
              <tr key={index}>
                  <td><h3>{dl.title}</h3></td>
                <td>{dl.ingredients}</td>
                <td>{dl.occupation}</td>
  
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
      </center>
    )
}

export default Theme





