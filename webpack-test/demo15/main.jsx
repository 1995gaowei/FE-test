import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import "./app.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <ul>
            <li>
              <Link to="/app">Dashboard</Link>
            </li>
            <li>
              <Link to="/inbox">Inbox</Link>
            </li>
            <li>
              <Link to="/calendar">Calendar</Link>
            </li>
          </ul>
          Logged in as Jane
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/app" component={Dashboard} />
            <Route path="/inbox" component={Inbox} />
            <Route path="/calendar" component={Calendar} />
            <Route path="*" component={Dashboard} />
          </Switch>
        </main>
      </div>
    );
  }
}

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <p>Dashboard1111</p>
      </div>
    );
  }
}

class Inbox extends React.Component {
  render() {
    return (
      <div>
        <p>Inbox</p>
      </div>
    );
  }
}

class Calendar extends React.Component {
  render() {
    return (
      <div>
        <p>Calendar</p>
      </div>
    );
  }
}

render(
  <BrowserRouter>
    <Route path="/" component={App} />
  </BrowserRouter>,
  document.querySelector("#app")
);
