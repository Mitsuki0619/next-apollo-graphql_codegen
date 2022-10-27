import type { NextPage } from "next";
import { useQuery, gql } from "@apollo/client";
import {
  GetAllTasksQuery,
  GetTaskQuery,
} from "../graphql/__generated__/graphql";
import { info } from "console";

const GET_TASK = gql`
  query getTask {
    task(id: 1) {
      id
      title
      done
    }
  }
`;
const GET_ALL_TASKS = gql`
  query getAllTasks {
    tasks {
      id
      title
      done
    }
  }
`;

const Home: NextPage = () => {
  const { loading, error, data } = useQuery<GetAllTasksQuery>(GET_ALL_TASKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      {data?.tasks.map((elem) => (
        <div key={elem?.id}>
          <h3>{elem?.title}</h3>
        </div>
      ))}
    </>
  );
};

export default Home;
