import "reflect-metadata";
import { CategoryResolver } from "./resolvers/categoryResolver";
import { ApolloServer } from "apollo-server";
import { AnimalResolver } from "./resolvers/animalsResolver";
import { buildSchema } from "type-graphql";

const main = async () => {
  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [AnimalResolver, CategoryResolver],
      validate: false,
    }),
  });

  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
};

main();
