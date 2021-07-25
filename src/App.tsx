import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GraphQLClient, ClientContext } from 'graphql-hooks';

import { AuthProvider } from './auth/Authcontext';
import PrivateRoute from './components/PrivateRoute';
import Login from './pages/login';
import Repos from './pages/repos';
import SignUp from './pages/sign-up';

const client = new GraphQLClient({
  url: 'https://api.github.com/graphql',
  headers: {
    Authorization: 'bearer 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',
  },
});

function App() {
  return (
    <Router>
      <ClientContext.Provider value={client}>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={Repos} />
            <Route path="/login" component={Login} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>
        </AuthProvider>
      </ClientContext.Provider>
    </Router>
  );
}

export default App;
