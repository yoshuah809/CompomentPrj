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
    <button className='btn btn-primary'>Click Me</button>;
    return <DisplayName names={this.state.names}
    />;
    
    
  }
  
}

export default App;
