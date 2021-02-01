import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
