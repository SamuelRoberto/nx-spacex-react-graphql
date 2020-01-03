import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { Rocket } from '@nx-spacex-react-graphql/api-interfaces'

export const RocketBoxComponent = (props: { rocket: Rocket }) => {
  const { rocket }: { rocket: Rocket } = props;
  const history = useHistory();
  console.log(rocket)
  return (
    <>

    </>
  );
}

export default RocketBoxComponent;
