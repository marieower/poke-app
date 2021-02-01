import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { List } from './features/list/List';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={List} />
      </Switch>
    </Router>
  );
}

export default App;
