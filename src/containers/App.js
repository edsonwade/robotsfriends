import React, { Component } from "react";
import SearchBox from "../component/SearchBox";
import CardList from "../component/CardList";
import Scroll from "../component/Scroll";
import ErrorBoundry from "../component/ErrorBoundry";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  // using lifecycle
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
    // if empty obj return loading .then(users => this.setState({ }))
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { searchfield, robots } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return !robots.length ? (
      <h1>Loading</h1>
    ) : (
      <React.StrictMode>
        <div className="tc">
          <h1 className="f2 header">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots} />
            </ErrorBoundry>
          </Scroll>
        </div>
      </React.StrictMode>
    );
  }
}

export default App;
