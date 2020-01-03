import React from 'react';
import { Dragon } from '@nx-spacex-react-graphql/api-interfaces'
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

export const DragonBoxComponent = (props: { dragon: Dragon }) => {
  const { dragon }: { dragon: Dragon } = props;
  return (
    <>
      {dragon ? <Card>
        <CardBody>
          <CardTitle>{dragon.name}</CardTitle>
          <CardSubtitle>Type: {dragon.type}</CardSubtitle>
          <CardText>{dragon.description}</CardText>

          <Button onClick={() => window.open(dragon.wikipedia)}>Wikipedia</Button>
        </CardBody>
      </Card> : null}
    </>
  );
}

export default DragonBoxComponent;
