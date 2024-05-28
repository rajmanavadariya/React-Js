import React from 'react'


function Salary(props) {

 
  return (
    <div className='main'>
    <table border={0}>
      <thead id='thead'>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Position</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tbody id='tb'>
        {props.Salary.map((p) => (
          <tr key={p.id}>
            <td>{p.id}</td>
            <td>{p.name}</td>
            <td>{p.position}</td>
            <td>{p.salary}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )

  
}

export default Salary








