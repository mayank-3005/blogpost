
import React from 'react';
import { Link } from 'react-router-dom';

const BlogDetails = ({ post }) => {
  return (
    <div className='blog-detalis-page'>
    <img src= {post.image} alt="card__image" class="card__image" width="600"></img>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <button className='back-btn'>
      <Link to='/'> Back to blog post</Link>
      </button>
      
    </div>
  );
};

export default BlogDetails;
