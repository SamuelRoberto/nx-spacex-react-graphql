import React from 'react';
import { useParams } from "react-router-dom";
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Rocket } from '@nx-spacex-react-graphql/api-interfaces'
import RocketBoxComponent from '../components/RocketBox.component';

const ROCKET = gql(`
  query Rocket($id: String!) {
    rocket(id: $id) {
      id,
      name,
      type
    }
  }
`);

const GetRocket = (): Rocket => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(ROCKET, {
    variables: { id },
  });

  if (loading) return null;
  if (error) return null;
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
