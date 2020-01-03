import React from 'react';
import { useParams } from "react-router-dom";
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Rocket } from '@nx-spacex-react-graphql/api-interfaces'
import RocketBoxComponent from '../components/RocketBox.component';
import { useDispatch } from 'react-redux';
import { setLoader, setError } from '../../store/common/common.action';

const ROCKET = gql(`
  query Rocket($id: String!) {
    rocket(rocket_id: $id) {
      id,
      rocket_name,
      rocket_type,
      description,
      wikipedia
    }
  }
`);

const GetRocket = (): Rocket => {
  const dispatch = useDispatch()
  const { id } = useParams();
  const { loading, error, data } = useQuery(ROCKET, {
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
  return data.rocket;
}

export const RocketContainer = () => {
  GetRocket();
  return (
    <>
      <RocketBoxComponent rocket={GetRocket()} />
    </>
  );
}

export default RocketContainer;
