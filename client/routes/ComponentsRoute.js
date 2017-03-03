import { Route, IndexRoute }  from 'react-router';


export default (reducerRegistry) => {
  const appRoute = {
    renderComponents: (location, cb) => {
      require(['../screens/ComponentScreen', '../reducers/UserReducer'], (component, reducer)=> {
        reducerRegistry.register({
          userReducer: reducer
        });
        cb(null, component);
      });
    },
    renderTable: (location, cb) => {
      require(['../components/Table'], (component)=> {
        cb(null, component);
      });
    },
    renderButton: (location, cb) => {
      require(['../components/Button'], (component)=> {
        cb(null, component);
      });
    },
    renderInputField: (location, cb) => {
      require(['../components/InputField'], (component)=> {
        cb(null, component);
      });
    }
  };

  return(
    <Route path='components' getComponent={appRoute.renderComponents}>
      <Route path='table' getComponent={appRoute.renderTable} />
      <Route path='button' getComponent={appRoute.renderButton} />
      <Route path='input-field' getComponent={appRoute.renderInputField} />
    </Route>
  );

};
