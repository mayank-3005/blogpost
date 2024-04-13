import React from 'react';
import { posts } from './blogData';
import Blog from './blog';
import { Link } from 'react-router-dom';
const BlogList = () => {
  return (
    <div className='blog-heading'>
      <h2>Blog Posts</h2>
      <ul className='list'>
        {posts.map((post, index) => (
          <Link to={`/blog/${index}`}>
          <Blog key={index} post={post} />
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
