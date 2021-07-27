import React, { Suspense } from 'react';
import NotFound from './components/NotFound';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import { Spin } from 'antd';
import './App.scss';
import "antd/dist/antd.css";
import UserLogin from './features/Login';
import AdminDashboard from './features/AdminDashboard';
import Register from "./features/Register"

//Lazy loading
const ShareRoom = React.lazy(()=> import('./features/ShareRoom'));

function App() {
  return (
    <div className="app">
      <Suspense fallback={<div className="app__spin"><Spin tip="Loading..."/></div>}>
          <BrowserRouter>

          <Switch>
            <Redirect exact from="/" to="/share-room" />
            <Route path="/share-room" component={ShareRoom} />
            <Route path="/user-login" component={UserLogin} />
            <Route path="/user-register" component={Register} />
            <Route path="/admin-dashboard" component={AdminDashboard} />
            <Route component={NotFound} />

          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
