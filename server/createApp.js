import React from 'react';
import dva from 'dva';
import { RouterContext } from 'dva/router';

function createApp(opts) {
  const app = dva(opts);

  app.model(require('../src/models/users'));

  app.router(({ renderProps }) => {
    return <RouterContext history {...renderProps} />;
  });
  return app;
}

export default createApp;
