import React from 'react';

const Blog = ({ post }) => {
  return (
    <div className="blog-post">
    <div class="container">
  <div class="card">
    <div class="card__header">
      <img src= {post.image} alt="card__image" class="card__image" width="600"></img>
    </div>
    <div class="card__body">
      <h4>{post.title}</h4>
      <p>{post.content.substring(0, 100)}...</p>
    </div>
    <div class="card__footer">
      <div class="user">
        <div class="user__info">
          <h5>{post.author}</h5>
          <small>Date :{post.date} </small>
        </div>
      </div>
    </div>
  </div>
  
</div>
    </div>
  );
};

export default Blog;
