import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import NotFound from "../../components/NotFound";
import MainPage from "./page/main";
import DetailPage from "./detail/main";
import "./index.scss";

function ShareRoom() {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={match.url} component={DetailPage} />

      <Route component={NotFound} />
    </Switch>
  );
}

export default ShareRoom;
