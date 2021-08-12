import React from "react";
import { Route, Switch, useRouteMatch, Redirect } from "react-router-dom";
import NotFound from "../../components/NotFound";
import MainPage from "./page/main";
import Account from "./components/account";
import Room from "./components/room";

import "./index.scss";

function ShareRoom() {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={match.url} component={MainPage} />

      <Route path="/admin-dashboard/user">
        <MainPage component={<Account title="Tài khoản / Người thuê trọ" />} />
      </Route>
      <Route path="/admin-dashboard/list-room">
        <MainPage component={<Room title="Phòng trọ / Danh sách phòng" />} />
      </Route>

      <Route component={NotFound} />
    </Switch>
  );
}

export default ShareRoom;
