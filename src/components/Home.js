import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h2>Home page</h2>
      <ul>
        <li>
          <NavLink to="/users">Users List</NavLink>
        </li>
      </ul>
    </>
  );
};

export default Home;
