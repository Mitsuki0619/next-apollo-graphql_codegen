import { gql, Config } from "apollo-server-micro";

export const typeDefs: Config["typeDefs"] = gql`
  type Task {
    id: Int
    title: String
    done: Boolean
  }

  type Query {
    tasks: [Task]!
    task(id: Int): Task
  }
`;
