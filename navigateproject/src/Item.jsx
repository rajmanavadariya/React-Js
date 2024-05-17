import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
 

function Item({ addnewPost }) {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        addnewPost(title, content)
        navigate('/')
    }

    return (
        <center>
            <div className="add-post-container">
                <h2>ADD MENU</h2>
                <form onSubmit={handleSubmit}>
                    <h1>Food:</h1>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} /> <br/><br/><br/>

                    <h1>Taste:</h1>
                    <input value={content} onChange={(e) => setContent(e.target.value)}/> <br/><br/><br/>

                    <button type='submit'>ADD RECIPE</button><br/><br/><br/>
                </form>

                <Link to="/" id='link'>Back TO Restaurant</Link>
            </div>
        </center>
    )
}

export default Item;