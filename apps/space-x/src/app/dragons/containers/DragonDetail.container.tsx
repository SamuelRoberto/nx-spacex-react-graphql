import React from 'react';
import { useParams } from "react-router-dom";
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Dragon } from '@nx-spacex-react-graphql/api-interfaces'
import DragonBoxComponent from '../components/DragonBox.component';
import { useDispatch } from 'react-redux';
import { setLoader, setError } from '../../store/common/common.action';

const DRAGON = gql(`
  query Dragon($id: String!) {
    dragon(id: $id) {
      id,
      name,
      type,
      description,
      wikipedia
    }
  }
`);

const GetDragon = (): Dragon => {
  const dispatch = useDispatch()
  const { id } = useParams();
  const { loading, error, data } = useQuery(DRAGON, {
    variables: { id },
  });

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
  return data.dragon;
}

export const DragonContainer = () => {
  return (
    <>
      <DragonBoxComponent dragon={GetDragon()} />
    </>
  );
}

export default DragonContainer;
