import { useQuery, gql } from "@apollo/client";
import { appsignal } from "src/appsignalClient";
import styles from "../styles/Home.module.css";

const HOME_QUERY = gql`
  query HomeQuery {
    name
    website
  }
`;

export default function Home() {
  const { data, loading } = useQuery(HOME_QUERY);

  if (!data || loading) return <span>loading...</span>;

  return (
    <div className={styles.container}>
      <pre>{JSON.stringify(data, null, 2)}</pre>

      <button
        onClick={() => {
          try {
            throw new Error("Throwing this guy");
          } catch (error) {
            appsignal.sendError(error);
          }
        }}
      >
        Error!
      </button>
    </div>
  );
}
