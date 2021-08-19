import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import { Spin } from "antd";
import "antd/dist/antd.css";
import "./App.scss";
import UserLogin from "./features/Login";
import Register from "./features/Register";
import UserLogout from "./features/Logout";
import AdminDashboard from "./features/AdminDashboard";
import NotFound from "./components/NotFound";
import DetailRoom from "./features/ShareRoom/pages/detail"

//Lazy loading
const ShareRoom = React.lazy(() => import("./features/ShareRoom"));

function App() {
  return (
    <div className="app">
      <Suspense
        fallback={
          <div className="app__spin">
            <Spin tip="Loading..." />
          </div>
        }
      >
        <BrowserRouter>
          <Switch>
            <Redirect exact from="/" to="/share-room" />
            <Route path="/share-room" component={ShareRoom} />
            <Route path="/user-login" component={UserLogin} />
            <Route path="/user-logout" component={UserLogout} />
            <Route path="/user-register" component={Register} />
            <Route path="/admin-dashboard" component={AdminDashboard} />
            <Route path="/room-detail" component={DetailRoom} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
