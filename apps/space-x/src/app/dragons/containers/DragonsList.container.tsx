import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import DragonTableComponent from '../components/DragonTable.component';
import { Dragon } from '@nx-spacex-react-graphql/api-interfaces'
import { useDispatch } from 'react-redux';
import { setLoader, setError } from '../../store/common/common.action';

const DRAGONS = gql`
  {
    dragons {
      id,
      name,
      type,
      description
    }
  }
`;

const GetDragons = (): Dragon[] => {
  const dispatch = useDispatch()
  const { loading, error, data } = useQuery(DRAGONS);

  if (loading) {
    dispatch(setLoader(true));
    return null;
  }
  dispatch(setLoader(false));

  if (error) {
    dispatch(setError(true));
    return null
  };
  dispatch(setError(false));
  return data.dragons;
}

export const DragonsContainer = () => {
  return (
    <>
      <DragonTableComponent dragons={GetDragons()} />
    </>
  );
}

export default DragonsContainer;
