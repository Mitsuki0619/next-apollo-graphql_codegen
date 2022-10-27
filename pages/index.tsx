import type { NextPage } from "next";
import { useQuery } from "@apollo/client";
import { graphql } from "../graphql/__generated__";
import {
  GetAllTasksQuery,
  GetTaskQuery,
} from "../graphql/__generated__/graphql";
import { info } from "console";

const GET_TASK = graphql(`
  query getTask {
    task(id: 1) {
      id
      title
      done
    }
  }
`);

const GET_ALL_TASKS = graphql(`
  query getAllTasks {
    tasks {
      id
      title
      done
    }
  }
`);

const Home: NextPage = () => {
  const { loading, error, data } = useQuery(GET_TASK);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <>
      {/* {data?.tasks.map((elem) => (
        <div key={elem?.id}>
          <h3>{elem?.title}</h3>
        </div>
      ))} */}
      {data?.task?.title}
    </>
  );
};

export default Home;
