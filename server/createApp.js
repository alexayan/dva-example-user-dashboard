import dva from 'dva';

function createApp(opts) {
  const app = dva(opts);

  app.model({ ...require('../src/models/users') });

  return app;
}

export default createApp;
