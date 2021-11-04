import React, { Component } from 'react';
import DisplayName from './DisplayName/DisplayName';

class App extends Component {
  constructor(props) {
    super(props);
    //this.state = { firstName: 'Reggie', lastName: 'White' };
    this.state = {
      names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly', 'Marcus'],
    };
  }
  render() {
    return (
      <ol>
        {this.state.names.map(function (singleName) {
          return <ol>{singleName}</ol>;
        })}
      </ol>
    );
  }
}

export default App;
