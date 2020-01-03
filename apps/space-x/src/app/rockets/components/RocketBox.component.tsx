import React from 'react';
import { Rocket } from '@nx-spacex-react-graphql/api-interfaces'
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

export const RocketBoxComponent = (props: { rocket: Rocket }) => {
  const { rocket }: { rocket: Rocket } = props;
  return (
    <>
      {rocket ? <Card>
        <CardBody>
          <CardTitle>{rocket.rocket_name}</CardTitle>
          <CardSubtitle>Type: {rocket.rocket_type}</CardSubtitle>
          <CardText>{rocket.description}</CardText>

          <Button onClick={() => window.open(rocket.wikipedia)}>Wikipedia</Button>
        </CardBody>
      </Card> : null}
    </>
  );
}

export default RocketBoxComponent;
