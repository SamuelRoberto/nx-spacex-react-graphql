import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { RouterPathEnum } from '../enums/RouterPathEnum';

export const HeaderComponent = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <span className="navbar-brand">SpaceX</span>
        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li>
              <NavLink exact={true} activeClassName="active" to={RouterPathEnum.HOME}>
                <span className="nav-link">Home</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="active" to={RouterPathEnum.ROCKETS}>
                <span className="nav-link">Rockets</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="active" to={RouterPathEnum.DRAGONS}>
                <span className="nav-link">Dragons</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default HeaderComponent;
