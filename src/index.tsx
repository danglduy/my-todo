import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
/* import App from './components/App'; */
import Todos from './components/Todos';
import * as serviceWorker from './serviceWorker';
import rootReducer from 'store/rootReducer';
import { Provider } from 'react-redux';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Todos />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
