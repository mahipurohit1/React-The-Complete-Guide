import React from "react";
import { useNavigate, Link } from "react-router-dom";
const DUMMY_DATA = [
  { id: "p1", name: " p1 id hai " },
  { id: "p2", name: "p2 id hai " },
];
function About() {
  const navigate = useNavigate();
  function navigateHandler() {
    navigate("/");
  }
  return (
    <div>
      <h1>About page.......</h1>
      <ul>
        {DUMMY_DATA.map((item) => {
          return (
            <li key={item.id}>
              <Link to={item.id}> {item.name}</Link>
            </li>
          );
        })}
      </ul>
      <button onClick={navigateHandler}>Home page</button>
    </div>
  );
}

export default About;
