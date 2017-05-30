import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="App-headings">
            <h3>Ain't no party like an</h3>
            <h1>API Party</h1>
          </div>
          <ul className="nav-links">
            <li>
              <NavLink to='/github'>Github API</NavLink>
            </li>
            <li>
              <NavLink to='/nasa'>NASA API</NavLink>
            </li>
            <li>
              <NavLink to='/homework'>Homework</NavLink>
            </li>
          </ul>
        </div>
        <Switch>
          <Route path='/github' render={() => <h1>GITHUB IS OK</h1>} />
          <Route render={() => <p> Pick a link bitch </p>}/>
        </Switch>
      </div>
    );
  }
}

export default App;