import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import RocketTableComponent from '../components/RocketTable.component';
import { Rocket } from '@nx-spacex-react-graphql/api-interfaces';

const ROCKETS = gql`
  {
    rockets {
      id,
      rocket_name,
      company,
      success_rate_pct
    }
  }
`;

const GetRockets = (): Rocket[] => {
  const { loading, error, data } = useQuery(ROCKETS);

  if (loading) return null;
  if (error) return null;
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
