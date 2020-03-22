import React, { Component, Fragment } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Survey from './components/Survey';

import Admin from './Admin';

import './App.css';

const App = () => (
  <Router>
    <div>App</div>
    <Fragment>
      <Route
        exact
        path='/'
        render={props => <Survey {...props} surveyName='demo' />}
      />
      <Route exact path='/admin' component={Admin} />
    </Fragment>
  </Router>
);

export default App;
