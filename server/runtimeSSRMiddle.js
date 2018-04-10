import ssr from 'express-dva-ssr';
import React from 'react';
import { Route } from 'dva/router';
import createApp from './createApp';
import IndexPage from '../src/routes/IndexPage';
import UsersPage from '../src/routes/Users';
import renderFullPage from './renderFullPage';

const routes = (
  <div>
    <Route exact path="/users" component={UsersPage} />
    <Route exact path="/" sync component={IndexPage} />
  </div>
);

function onRenderSuccess() {
}

export default ssr.runtimeSSRMiddle({
  routes,
  createApp,
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
