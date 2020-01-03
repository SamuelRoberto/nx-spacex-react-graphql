import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import RocketTableComponent from '../components/RocketTable.component';
import { Rocket } from '@nx-spacex-react-graphql/api-interfaces';
import { useDispatch } from 'react-redux';
import { setLoader, setError } from '../../store/common/common.action';

const ROCKETS = gql`
  {
    rockets {
      id,
      rocket_name,
      company,
      success_rate_pct,
      rocket_id
    }
  }
`;

const GetRockets = (): Rocket[] => {
  const dispatch = useDispatch()
  const { loading, error, data } = useQuery(ROCKETS);

  if (loading) {
    dispatch(setLoader(true));
    return null;
  }
  dispatch(setLoader(false));

  if (error) {
    dispatch(setError(true));
    return null
  } ;
  dispatch(setError(false));
  return data.rockets;
}

export const RocketsContainer = () => {
  return (
    <>
      <RocketTableComponent rockets={GetRockets()} />
    </>
  );
}

export default RocketsContainer;
