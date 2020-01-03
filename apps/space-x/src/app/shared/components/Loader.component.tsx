import React from 'react';

export const LoaderComponent = () => {
  return (
    <>
      <div id="overlay">
        <div className="spinner"></div>
        Loading...
      </div>
    </>
  );
}

export default LoaderComponent;
