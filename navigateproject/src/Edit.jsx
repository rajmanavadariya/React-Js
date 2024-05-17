import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import './Resta.css'


function Edit({ posts, updatePost }) {
  const { id } = useParams();
  let ans = posts.find(post => post.id === parseInt(id));
  const [title, setTitle] = useState(ans.title);
  const [content, setContent] = useState(ans.content);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    updatePost(ans.id, title, content);
    navigate('/');
  }

  return (
    <center>
    <div className="add-post-container">
      <h1>Edit Page</h1>
      <form onSubmit={handleSubmit}>
        <h1>Food:</h1>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <br /><br /><br />
        <h1>Taste:</h1>
        <input value={content} onChange={(e) => setContent(e.target.value)}/>
        <br /><br /><br />
        <button type='submit'>UPDATE MENU</button>
        <br /><br /><br />
      </form>
      <Link to="/" id='link'>Back To Reastaurant Page</Link>
    </div>
    </center>
  );
}

export default Edit;