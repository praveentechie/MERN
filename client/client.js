// import 'babel-polyfill';
import React                    from 'react';
window.React = React;
import ReactDOM                 from 'react-dom';
import {combineReducers}        from 'redux';
import {Provider}               from 'react-redux';
import {
  Router,
  Route,
  Redirect,
  browserHistory
}                               from 'react-router';
import createHistory            from 'history/lib/createHashHistory';
import {syncReduxAndRouter,
        routeReducer}           from 'redux-simple-router';
import ReducerRegistry          from './utils/ReducerRegistry';
import storeFactory             from './utils/StoreFactory';
import App                      from './components/App';

// import 'jquery.growl/stylesheets/jquery.growl.css';
// import './css/Utils.css';
// import './sass/Utils.scss';

const reducerRegistry = new ReducerRegistry({
  routing: routeReducer
});

const history = createHistory({
  queryKey: false
});

const getDebugPanel = ()=>{
  return new Promise((resolve,reject)=>{
    if(process.env.NODE_ENV === 'development'){
      require.ensure([], (require) => {
        // resolve(require('../components/DevTools'));
      });
    }else{
      resolve(null);
    }
  });
};

Promise.all([storeFactory(combineReducers(reducerRegistry.getReducers()))]).then(resolves=>{
  let store = resolves[0];
  let DebuggingPanel = resolves[1];
  reducerRegistry.setChangeListener((reducers) => {
    store.replaceReducer(combineReducers(reducerRegistry.getReducers()));
  });

  // reducerRegistry.register({
  //   userInfo: require('./reducers/userInfoReducer')
  // });
  syncReduxAndRouter(history, store);
  render(store,DebuggingPanel);
}).catch(error=>{
  throw error;
});


const render = (store,DebuggingPanel)=>{
  console.log('render');
  ReactDOM.render(
    <div>
      <Provider store={store}>
        <div>
          <Router history={browserHistory}>
            <Route path='/' component={App}>
              <div><h1>Hello App</h1></div>
            </Route>
          </Router>
        </div>
      </Provider>
    </div>,
    document.getElementById('mount')
  );
};
