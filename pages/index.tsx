import type { NextPage } from "next";
import { useQuery, gql } from "@apollo/client";

const GET_TASKS = gql`
  query getTasks {
    tasks {
      id
      title
      done
    }
  }
`;

const Home: NextPage = () => {
  const { loading, error, data } = useQuery(GET_TASKS);
  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.tasks.map(({ id, title, done }) => (
    <div key={id}>
      <h3>{title}</h3>
    </div>
  ));
};

export default Home;
