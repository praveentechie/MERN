import 'babel-polyfill';
import React                    from 'react';
window.React = React;
import ReactDOM                 from 'react-dom';
import {combineReducers}        from 'redux';
import {Provider}               from 'react-redux';
import {
  Router,
  Route,
  IndexRedirect,
  browserHistory
}                               from 'react-router';
import {
  syncHistoryWithStore,
  routerReducer
}                               from 'react-router-redux';
import ReducerRegistry          from './utils/ReducerRegistry';
import storeFactory             from './utils/StoreFactory';
import App                      from './components/App';

// import 'jquery.growl/stylesheets/jquery.growl.css';
// import './css/Utils.css';
// import './sass/Utils.scss';
let history = null;
const reducerRegistry = new ReducerRegistry({
  routing: routerReducer
});

Promise.all([storeFactory(combineReducers(reducerRegistry.getReducers()))]).then(resolves=>{
  let store = resolves[0];
  reducerRegistry.setChangeListener((reducers) => {
    store.replaceReducer(combineReducers(reducerRegistry.getReducers()));
  });
  history = syncHistoryWithStore(browserHistory, store);
  render(store);
}).catch(error=>{
  console.log('init error', error);
  throw error;
});

const render = (store)=>{
  ReactDOM.render(
    <div>
      <Provider store={store}>
        <div>
          <Router history={history}>
            <Route path='/' component={App}>
              {require('./routes/HomeRoute')(reducerRegistry)}
            </Route>
          </Router>
        </div>
      </Provider>
    </div>,
    document.getElementById('mount')
  );
};
