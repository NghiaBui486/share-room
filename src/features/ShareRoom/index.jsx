import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import NotFound from "../../components/NotFound";
import MainPage from "./page/main";
import "./index.scss";

function ShareRoom() {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={match.url} component={MainPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default ShareRoom;
