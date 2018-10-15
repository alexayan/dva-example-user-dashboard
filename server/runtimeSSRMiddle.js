import ssr from 'express-dva-ssr';
import React from 'react';
import { Route } from 'dva/router';
import IndexPage from '../src/routes/IndexPage';
import UsersPage from '../src/routes/Users';
import renderFullPage from './renderFullPage';
import UserModel from '../src/models/users';

const routes = (
  <div>
    <Route exact path="/users" component={UsersPage} />
    <Route exact path="/" component={IndexPage} />
  </div>
);

function onRenderSuccess() {
}

export default ssr.runtimeSSRMiddle({
  routes,
  models: [
    UserModel,
  ],
  renderFullPage,
  onRenderSuccess,
  initialState: {
    users: {
      list: [],
      total: null,
      page: null,
    },
  },
});
