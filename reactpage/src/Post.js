import React from 'react'

function Post() {
  return (
    <div className="container">
    <div className="main1">
        <div className="ad1">
            <div className="det1">
                <img src="images/a27d24_77c3bdd084c14f50a13aa9b44485c2e3~mv2.webp" alt=""/>
            </div>
            <div className="det2">
                <h1>Transform your<br/> winter blues into<br/> winter creativity</h1><br/>
                <p>Create a blog post subtitle <br/> summarizes your post in a few<br/> short, punchy sentences and...</p>
            </div>
        </div>
        <div className="ad2">
            <div className="det3">
                <img src="images/75059a_19d50c96541b4b1aa915d498b351bd17~mv2.webp" alt=""/>
            </div>
            <div className="det4">
                <h1>5 reasons to wake<br/> at 5am</h1>
                <p>Create a blog post subtitle<br/> summarizes your post in a few<br/> short, punchy sentences and</p>
            </div>
        </div>
        <div className="ad3">
            <div className="det5">
                <img src="images/75059a_a28bb23346c740cfa809bb26a81ce414~mv2.webp" alt=""/>
            </div>
            <div className="det6">
                <h1>How decluttering<br/> changed my life</h1>
                <p>Create a blog post subtitle<br/> summarizes your post in a few<br/> short, punchy sentences and</p>

               
            </div>
        </div>

        <button>ALL POST</button>
    </div>
    
    
    


    <div className="main2">
    <div className="sec1">
        <h1>Let the posts<br/>
            come to you.</h1>

            <form>
                <label>Email*:</label><br/><br/>
                <input type="email" size="40px" id="inp"/><br/><br/>
                <input type="submit" value="Subscribe" id="sub"/>
            </form>
    </div>
    <div className="sec2">
        <h1 id="ab">
            Find Me On Instagram
        </h1>

        <img src="images/01.jpg" alt=""/>
        <img src="images/02.jpg" alt=""/>
        <img src="images/03.jpg" alt=""/>
        <img src="images/04.jpg" alt=""/>
        <img src="images/05.jpg" alt=""/>
        <img src="images/06.jpg" alt=""/><br/>
 <div className="fa1">
        <i className="fa fa-facebook"></i>
        <i className="fa fa-instagram"></i>
        <i className="fa fa-twitter"></i>
        <i className="fa fa-whatsapp"></i>
</div>
    </div>
</div>
    </div>






  )
}

export default Post