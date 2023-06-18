import React from 'react';

const ComingSoon = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Coming Soon</h1>
      <p className="text-gray-600 text-lg mb-8">Stay tuned for our awesome new feature!</p>
      <div className="bg-white p-6 rounded-md shadow-md">
        <p className="text-gray-600">We have something exciting in the works. Check back soon!</p>
      </div>
    </div>
  );
};

export default ComingSoon;

