import React from "react";
import { useFetch } from "../hooks/useFetch";

const ServerChecker = () => {
  const { data, error, loading, refetch } = useFetch("https://jsonplaceholder.typicode.com/posts/1");

  return (
    <div>
      <h2>Server Checker</h2>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {data && (
        <div>
          <h3>{data.title}</h3>
          <p>{data.body}</p>
        </div>
      )}
      <button onClick={refetch}>Refetch</button>
    </div>
  );
};

export default ServerChecker;
