import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { AuthProvider } from './auth/Authcontext';
import PrivateRoute from './components/PrivateRoute';
import Login from './pages/login';
import Repos from './pages/repos';
import SignUp from './pages/sign-up';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <PrivateRoute exact path="/">
            <Repos />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
