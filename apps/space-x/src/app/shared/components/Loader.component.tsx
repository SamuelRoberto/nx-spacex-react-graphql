import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';

export const LoaderComponent = () => {
  const selectIsLoading = (state: RootState) => state.common.isLoading
  const isLoading = useSelector(selectIsLoading)

  return (
    <>
      {isLoading &&
        <div id="overlay">
          <div className="spinner"></div>
          Loading...
      </div>}
    </>
  );
}

export default LoaderComponent;
