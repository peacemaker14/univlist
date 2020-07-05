import React from 'react';
import { render } from 'react-dom';
import Home from './routes/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import './styles/index.scss';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

render(<App />, document.getElementById("app"));
