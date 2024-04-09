import React from 'react'

function Contact() {
  return (
    <div class="abc">
    <h1>Let me know what's on your mind</h1>
    <div class="form">

        <div class="a1">
          
                
                <label id="f1">First Name:</label><br/><br/>
                <input type="text" size="30px" id="f2"/><br/><br/><br/><br/>
                <label id="f1">Last Name:</label><br/><br/>
                <input type="text" size="30px" id="f2"/><br/><br/>
            </div>
            <div class="a2">
                <label id="f1">Email*:</label><br/><br/>
                <input type="email" size="30px" id="f2"/><br/><br/><br/><br/>
                <label id="f1">Leave a Messege</label><br/><br/>
                <textarea cols="30" rows="1" id="f2"></textarea>
               
            </div>
            <input type="submit" value="submit" id="sub"/>
          
            
    </div>
</div>
 
  )
}

export default Contact