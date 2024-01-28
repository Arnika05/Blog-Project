
import React from 'react';

function Container({ children }) {
  return (
    <div className='bg-gray-900 text-white dark:bg-gray-800 dark:text-gray-100 w-full max-w-7xl mx-auto px-4'>
      {children}
    </div>
  );
}

export default Container;
