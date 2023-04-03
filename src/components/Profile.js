import React from "react";
import { NavLink, useParams } from "react-router-dom";

const Profile = () => {
  const { userId } = useParams();

  return (
    <>
      <h2>User info</h2>
      <p>User id: {userId}</p>
      <ul>
        <li>
          <NavLink to="/users">Users List</NavLink>
        </li>
        <li>
          <NavLink to={`/users/${userId}/edit`}>User Edit Page</NavLink>
        </li>
      </ul>
    </>
  );
};

export default Profile;
