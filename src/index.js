import dva from 'dva';
import createBrowserHistory from 'history/createBrowserHistory';
import createLoading from 'dva-loading';
import { message } from 'antd';
import './index.html';
import './index.css';

const ERROR_MSG_DURATION = 3; // 3 秒
const history = createBrowserHistory();

// 1. Initialize
const app = dva({
  history,
  initialState: window.__INITIAL_STATE__ || {}, // eslint-disable-line
  onError(e) {
    message.error(e.message, ERROR_MSG_DURATION);
  },
});

// 2. Plugins
app.use(createLoading());

// 3. Model
// Moved to router.js

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
