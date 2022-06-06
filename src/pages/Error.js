import React from 'react';
import { Link } from 'react-router-dom';
const Error = () => {
  return (
    <div className="section error-page">
      <div className="error-container">
        <h1>404</h1>
        <h2>Page not found</h2>
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
