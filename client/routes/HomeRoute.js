import { Route, IndexRoute }  from 'react-router';


export default (reducerRegistry) => {
  const appRoute = {
    renderHome: (location, cb) => {
      require(['../screens/HomeScreen', '../reducers/HomeReducer'], (component, reducer)=> {
        reducerRegistry.register({
          homeReducer: reducer
        });
        cb(null, component);
      });
    },
    renderUsers: (location, cb) => {
      require(['../screens/UserScreen', '../reducers/UserReducer'], (component, reducer)=> {
        reducerRegistry.register({
          userReducer: reducer
        });
        cb(null, component);
      });
    }
  };

  return(
    <Route>
      <Route path='/home' getComponent={appRoute.renderHome} />
      <Route path='/user-list' getComponent={appRoute.renderUsers} />
    </Route>
  );

};
