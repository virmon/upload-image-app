import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Upload from './components/Upload';
import Preview from './components/Preview';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Upload} />
            <Route path="/preview" component={Preview} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
