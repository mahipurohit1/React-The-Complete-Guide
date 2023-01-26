import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <h1 style={{ color: "red" }}>home page !!!!!</h1>
      <h3>
        go to About section click here :- <Link to={"About"}> About</Link>{" "}
      </h3>
    </div>
  );
}

export default Home;
