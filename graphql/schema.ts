import { gql } from "apollo-server-micro";

const typeDefs = gql`
  type Query {
    message: string;
  }
`