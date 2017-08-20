import React from 'react';
import { Router } from 'dva/router';

const cached = {};
function registerModel(app, model) {
  if (!cached[model.namespace]) {
    app.model(model);
    cached[model.namespace] = 1;
  }
}

function RouterConfig({ history, app }) {
  registerModel(app, require('./models/users'));
  const routes = [
    {
      path: '/',
      name: 'IndexPage',
      component: require('./routes/IndexPage'),
    },
    {
      path: '/users',
      name: 'UsersPage',
      component: require('./routes/Users'),
    },
  ];

  return <Router history={history} routes={routes} />;
}

export default RouterConfig;
