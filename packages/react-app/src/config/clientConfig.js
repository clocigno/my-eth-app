import { ApolloClient, InMemoryCache } from "@apollo/client";

// You should replace this url with your own and put it into a .env file
// See all subgraphs: https://thegraph.com/explorer/
export const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: process.env.GRAPH_URI,
  });