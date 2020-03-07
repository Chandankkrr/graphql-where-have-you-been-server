import express from 'express';
import expressGraphQL from 'express-graphql';
import {
    GraphQLObjectType, GraphQLSchema, GraphQLString
} from 'graphql';

const app = express();
const port = 3000;

app.get("/", (_, response) => response.send('Hi there 🤸, to view graphiql interface navigate to /graphql'));

const RootQueryType = new GraphQLObjectType({
    name: 'Query',
    description: 'Root Query',
    fields: () => ({
        greet: {
            type: GraphQLString,
            description: 'Greeting message',
            resolve: () => 'Hello from 🚀 server'
        },
    })
});

const schema = new GraphQLSchema({
    query: RootQueryType,
});

app.use('/graphql', expressGraphQL({
    schema: schema,
    graphiql: true
}));

app.listen(port, () => console.log(`Server Running 🚀 at http://localhost:${port}`));
