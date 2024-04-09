import React from 'react'

function Main1() {
  return (
    <div className="main">
        <div className="s1">
            <img src="img/cos1.webp" alt=""/>
        </div>
        
        <div className="s2">
            <p><i className="fa fa-user-circle" id="i"></i>Admin <i className="fa fa-diamond"></i><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;March 25.1 min</p>
            <h2>The Girl from Ipanema</h2>
            <p id="p1">Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</p>

        </div><hr/>

        <div className="like">
              <i className="fa fa-eye">940</i>&nbsp;&nbsp;&nbsp;
              <i className="fa fa-inbox">44</i>

              <i className="fa fa-heart-o" id="heart">78</i>
        </div>
    </div>
  )
}

export default Main1