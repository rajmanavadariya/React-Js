import React from 'react'

function Footer() {
  return (
    <footer>
        <div className="footer">
            <div className="f2">
                <img src="img/footerimg.webp" alt=""/>
            </div>
            <div className="f3">
                <h2>About Me</h2>
                <p>I'm a paragraph. Click here to add your own text and edit<br/> me. It’s easy. Just click “Edit Text” or double click me to<br/> add your own content and make changes to the font.</p>
                <a href="">Read More</a>
            </div>
            <div className="f4">
                <p>Joining My Mailing List</p>
                <input type="email" placeholder="Enter your Email Here" id="email" size="34px" /><br/>
                <button>Subscribe now</button>
            </div>
        </div>

       
    </footer>
  )
}

export default Footer