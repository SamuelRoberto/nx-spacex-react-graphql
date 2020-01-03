import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import { Alert } from 'reactstrap';

export const ErrorComponent = () => {
  const selectIsError = (state: RootState) => state.common.isError
  const isError = useSelector(selectIsError)

  return (
    <>
      {isError &&
        <Alert color="danger">
          Generical error as triggered
       </Alert>
      }
    </>
  );
}

export default ErrorComponent;
