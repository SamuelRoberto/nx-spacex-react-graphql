import { ApolloServer } from 'apollo-server-express';
import Schema from './app/schema/schema';
import * as express from 'express';

const app = express();
const port = process.env.port || 3333;
const serverApollo = new ApolloServer({
  schema: Schema,
  introspection: true,
  playground: true,
});

serverApollo.applyMiddleware({app, path: "/api/graphql"});
const server = app.listen(port, () => {
  console.log(`🚀 Server http://localhost:${port}`);
});
server.on('error', console.error);
