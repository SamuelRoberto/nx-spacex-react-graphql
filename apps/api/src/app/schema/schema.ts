import { makeExecutableSchema } from 'apollo-server';
import { merge } from 'lodash';
import {
  typeDefs as Rocket,
  resolvers as rocketResolvers
} from './rocket';
import {
  typeDefs as Dragon,
  resolvers as dragonResolvers
} from './dragon';
import {
  typeDefs as Common,
  resolvers as commonResolvers
} from './common';
import { gql } from 'apollo-server';

const Query = gql`
  type Query {
    dragons: [Dragon]
    dragon(id: String!): Dragon
    rockets: [Rocket]
    rocket(rocket_id: String!): Rocket
  }
`;

const schema = makeExecutableSchema({
  typeDefs: [ Query, Common, Rocket, Dragon ],
  resolvers: merge(commonResolvers, rocketResolvers, dragonResolvers),
});

export default schema;
