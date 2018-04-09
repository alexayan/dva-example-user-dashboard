import React from 'react';
import { Router, Route, Switch } from 'dva/router';

const cached = {};
function registerModel(app, model) {
  if (!cached[model.namespace]) {
    app.model(model);
    cached[model.namespace] = 1;
  }
}

function RouterConfig({ history, app }) {
  registerModel(app, require('./models/users'));

  return (<Router history={history}>
    <Switch>
      <Route exact path="/" component={require('./routes/IndexPage')} />
      <Route exact path="/users" component={require('./routes/Users')} />
      <Route
        component={() => {
          return <div>404</div>;
        }}
      />
    </Switch>
  </Router>);
}

export default RouterConfig;
