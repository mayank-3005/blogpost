// BlogDetails.js
import React from 'react';

const BlogDetails = ({ post }) => {
  return (
    <div className='blog-detalis-page'>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogDetails;
