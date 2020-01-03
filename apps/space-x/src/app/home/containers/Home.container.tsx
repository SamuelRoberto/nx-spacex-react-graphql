import React from 'react';
export const HomeContainer = () => {
    return (
      <div className="jumbotron">
        <h1 className="display-3">Space X Sample-Project!</h1>
        <p className="lead">This is a simple projects based on Space-X public API that is started using NX Boilerplate by NRWL.</p>
        <hr className="my-4" />
        <p>It uses React with Hook, NodeJS with Express Framework and GraphQL.</p>
        <p className="lead">
          <button className="btn btn-primary btn-lg">SpaceX</button>
        </p>
      </div>
    );
}

export default HomeContainer;
