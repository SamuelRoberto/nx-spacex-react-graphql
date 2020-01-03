import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { RouterPathEnum } from '../../shared/enums/RouterPathEnum';
import { Dragon } from '@nx-spacex-react-graphql/api-interfaces'

export const DragonBoxComponent = (props: { dragon: Dragon }) => {
  const { dragon }: { dragon: Dragon } = props;
  const history = useHistory();
  console.log(dragon)
  return (
    <>

    </>
  );
}

export default DragonBoxComponent;
