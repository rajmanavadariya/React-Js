import React from 'react'
import { useState , useEffect } from 'react';

function Data() {
    const [details, setDetails] = useState([]);
    const [newDetails, setNewDetails] = useState({ name: '', age: '', occupation: '' });
    const [isEditing, setIsEditing] = useState(false);
    const [editingIndex, setEditingIndex] = useState(-1);
    
    useEffect(() => {
      const savedDetails = JSON.parse(localStorage.getItem('details')) || [];
      setDetails(savedDetails);
    }, []);         
    
    useEffect(() => {
      localStorage.setItem('details', JSON.stringify(details));
    }, [details]);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setNewDetails({ ...newDetails, [name]: value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      if (isEditing) {             
        const updatedDetails = [...details];
        updatedDetails[editingIndex] = newDetails;
        setDetails(updatedDetails);
        setIsEditing(false);
      } else {
        setDetails([...details, newDetails]);
      }
      setNewDetails({ name: '', age: '', occupation: '' });
      setEditingIndex(-1);
    };

    const handleEdit = (index) => {
      setNewDetails(details[index]);
      setIsEditing(true);
      setEditingIndex(index);
    };

    const handleDelete = (index) => {
      const filteredDetails = details.filter((_, i) => i !== index);
      setDetails(filteredDetails);
    };

    return (
      <center>
        <div>
          <h1 id='head'>Details App</h1>
          <form onSubmit={handleSubmit}>
            <label>
              <b >Name :</b><br/>
              <input type="text" name="name" value={newDetails.name} onChange={handleChange} placeholder='Enter your Name' />
            </label><br/>
            <label>
              <b>Age :</b><br/>
              <input type="text" name="age" value={newDetails.age} onChange={handleChange} placeholder='Enter your Age'/>
            </label><br/>
            <label>
              <b id='bol'>Occupation :</b><br/>
              <input type="text" name="occupation" value={newDetails.occupation} onChange={handleChange} placeholder='Enter your occupation'/>
            </label><br/>
            <br/>
            <button type="submit" id='sub'>{isEditing ? 'Update Details' : 'Add Details'}</button>
          </form>
        
          <div className='main'>
            <table border={1}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Occupation</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {details.map((detail, index) => (
                  <tr key={index}>
                    <td id='name'>{detail.name}</td>
                    <td>{detail.age}</td>
                    <td>{detail.occupation}</td>
                    <td>
                      <button onClick={() => handleEdit(index)} id='edit'>Edit</button>
                      <button onClick={() => handleDelete(index)} id='del'>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </center>
    );
}

export default Data