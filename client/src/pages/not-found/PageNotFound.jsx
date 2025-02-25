import React from 'react';
import pagenotfound from '../../assets/pagenotfound.jpg';

function NotFound() {
  return (
    <div className="relative w-full h-full">
      <img src={pagenotfound} alt="Page Not Found" className="w-full h-full object-cover" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl">Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
      </div>
    </div>
  );
}

export default NotFound;