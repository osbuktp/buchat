import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import routes from './routing/routes';
import ProtectedRoute from './routing/ProtectedRoute'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const accessibleRoutes = routes.map(route => {
    const GeneralRoute = route.protected ? ProtectedRoute : Route;
    return <GeneralRoute key={route.name} exact={route.exact} path={route.path}>
      <route.layout>
        <route.component />
      </route.layout>
    </GeneralRoute>
  })
  return (
    <Router>
      <Switch>
        {accessibleRoutes}
      </Switch>
    </Router>
  );
}

function AppWrapper() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default AppWrapper;
