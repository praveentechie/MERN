import { Route, IndexRoute }  from 'react-router';


export default (reducerRegistry) => {
  let homeRoute = {
    renderScreen: (location, cb) => {
      require(['../screens/HomeScreen', '../reducers/HomeReducer'], (component, reducer)=> {
        reducerRegistry.register({
          homeReducer: reducer
        });
        cb(null, component);
      });
    }
  };

  return(
    <Route path='/home' getComponent={homeRoute.renderScreen} />
  );

};
