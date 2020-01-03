import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { RouterPathEnum } from '../../shared/enums/RouterPathEnum';
import { Dragon } from '@nx-spacex-react-graphql/api-interfaces'

export const DragonTableComponent = (props: { dragons: Dragon[] }) => {
  const { dragons }: { dragons: Dragon[] } = props;
  const history = useHistory();
  return (
    <>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Type</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          {dragons ? dragons.map(({ id, name, type, description }) => (
            <tr key={id} onClick={() => history.push(RouterPathEnum.DRAGON.replace(':id', id))}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{type}</td>
              <td>{description}</td>
            </tr>
          )) : null}
        </tbody>
      </table>
    </>
  );
}

export default DragonTableComponent;
