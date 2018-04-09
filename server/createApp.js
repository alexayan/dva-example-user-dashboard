import dva from 'dva';

function createApp(opts) {
  const app = dva(opts);

  app.model({ ...require('../src/models/users') });
  app.model({ ...{
    namespace: 'app',
    state: {

    },
  } });

  return app;
}

export default createApp;
