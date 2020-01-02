import * as express from 'express';
import { Message } from '@nx-spacex-react-graphql/api-interfaces';

const app = express();

const greeting: Message = { message: 'Welcome to api!' };

app.get('/api', (req, res) => {
  res.send(greeting);
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);

// const { ApolloServer } = require('apollo-server');
// const { typeDefs, resolvers } = require('./schema');

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   introspection: true,
//   playground: true,
// });


// server.listen().then(({ url }) => {
//   console.log(`🚀 Server ready at ${url}`);
// });
