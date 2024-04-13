// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogList from './components/bloglist';
import { posts } from './components/blogData';
import './App.css'; 
import BlogDetails from './components/blogDetailspage';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<BlogList />} />
          {posts.map((post, index) => (
            <Route key={index} path={`/blog/${index}`} element={<BlogDetails post={post} />} />
          ))}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
