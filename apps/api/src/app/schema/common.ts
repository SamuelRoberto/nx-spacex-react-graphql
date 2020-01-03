import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Diameter {
    meters: Float!
    feet: Float!
  }

  type Thrust {
    kN: Float!
    lbf: Float!
  }
`;

export const resolvers = {};
