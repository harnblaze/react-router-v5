import React from "react";
import { NavLink, Route, Switch, useRouteMatch } from "react-router-dom";
import ProfileLayout from "./ProfileLayout";
import UsersList from "./UsersList";

const UsersListLayout = () => {
  const { path } = useRouteMatch();

  return (
    <>
      <h2>Users list</h2>
      <ul>
        <li>
          <NavLink to="/">Back to Home</NavLink>
        </li>
      </ul>

      <Switch>
        <Route path={path + ":userId"} component={ProfileLayout} />
        <Route path={path} exact component={UsersList} />
      </Switch>
    </>
  );
};

export default UsersListLayout;
