import React from 'react';
import { useHistory } from "react-router-dom";
import { RouterPathEnum } from '../../shared/enums/RouterPathEnum';
import { Rocket } from '@nx-spacex-react-graphql/api-interfaces'
import { Table } from 'reactstrap';

export const RocketTableComponent = (props: { rockets: Rocket[] }) => {
  const { rockets }: { rockets: Rocket[] } = props;
  const history = useHistory();
  return (
    <>
      <Table hover={true}>
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Rocket Name</th>
            <th scope="col">Company</th>
            <th scope="col">Success Rate</th>
          </tr>
        </thead>
        <tbody>
          {rockets ? rockets.map(({ id, rocket_name, company, success_rate_pct, rocket_id }) => (
            <tr key={id} onClick={() => history.push(RouterPathEnum.ROCKET.replace(':id', rocket_id.toString()))}>
              <td>{id}</td>
              <td>{rocket_name}</td>
              <td>{company}</td>
              <td>{success_rate_pct}</td>
            </tr>
          )) : null}
        </tbody>
      </Table>
    </>
  );
}

export default RocketTableComponent;
