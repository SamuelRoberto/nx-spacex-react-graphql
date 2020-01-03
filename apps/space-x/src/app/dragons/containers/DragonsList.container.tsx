import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import DragonTableComponent from '../components/DragonTable.component';
import { Dragon } from '@nx-spacex-react-graphql/api-interfaces'

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
  const { loading, error, data } = useQuery(DRAGONS);

  if (loading) return null;
  if (error) return null;
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
