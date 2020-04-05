import { GraphQLServer } from 'graphql-yoga'
import { importSchema } from "graphql-import";
import { resolvers } from "./resolvers";
import { createConnection } from "typeorm";
import { createTypeormConnection } from "./utils/createTypeormConnection";

const typeDefs = importSchema(__dirname+"/schema.graphql")

export const startServer = async() => {
    const server = new GraphQLServer({ typeDefs, resolvers });
    await createTypeormConnection();
    const app = await server.start({port: process.env.NODE_ENV === 'test'? 0: 4000});
    console.log('Server is running on localhost:4000');
    return app;
}
