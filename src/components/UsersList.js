import React from "react";
import { NavLink } from "react-router-dom";

const UsersList = () => {
  const users = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <ul>
        {users.map((item) => (
          <li key={item}>
            <NavLink to={`/users/${item}`}> User {item}</NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UsersList;
