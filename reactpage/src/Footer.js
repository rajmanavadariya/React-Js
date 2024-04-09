import React from 'react'

function Footer() {
  return (
    <footer>
        <div class="footer">
            <div class="f2">
                <img src="img/footerimg.webp" alt=""/>
            </div>
            <div class="f3">
                <h2>About Me</h2>
                <p>I'm a paragraph. Click here to add your own text and edit<br/> me. It’s easy. Just click “Edit Text” or double click me to<br/> add your own content and make changes to the font.</p>
                <a href="">Read More</a>
            </div>
            <div class="f4">
                <p>Joining My Mailing List</p>
                <input type="email" placeholder="Enter your Email Here" id="email" size="34px" /><br/>
                <button>Subscribe now</button>
            </div>
        </div>

        <div class="ico">

        <i class="fa fa-facebook"></i>
        <i class="fa fa-instagram"></i>
        <i class="fa fa-twitter"></i>
        <i class="fa fa-address-book"></i>
    </div>
    </footer>


    
  )
}

export default Footer