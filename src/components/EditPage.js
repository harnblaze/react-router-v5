import React from "react";
import { NavLink, useParams } from "react-router-dom";

const EditPage = () => {
  const { userId } = useParams();
  const nextPage = Number(userId) + 1;
  return (
    <>
      <h2>Edit User info</h2>
      <ul>
        <li>
          <NavLink to={`/users/${userId}`}>User Profile Page</NavLink>
        </li>
        <li>
          <NavLink to={`/users/${nextPage}`}>User Another Page</NavLink>
        </li>
        <li>
          <NavLink to="/users">Users List</NavLink>
        </li>
      </ul>
    </>
  );
};

export default EditPage;
