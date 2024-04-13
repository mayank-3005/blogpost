import React from 'react';

const Blog = ({ post }) => {
  return (
    <div className="blog-post">
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}...</p>
    </div>
  );
};

export default Blog;
