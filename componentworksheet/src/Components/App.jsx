import React, { Component } from 'react';
import DisplayName from './DisplayName/DisplayName';
import AlertUser from './AlertUser/AlertUser';
import SuperHeroTable from './SuperHeroTable/SuperHeroTable';

class App extends Component {
  constructor(props) {
    super(props);
    //this.state = { firstName: 'Reggie', lastName: 'White' };
    this.state = {
      names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly', 'Marcus'],
      superheroes: [
        {
          superheroId: 1,
          name: 'Batman',
          primaryAbility: 'Wealthy',
          secondarAbility: 'Rich',
        },
        {
          superheroId: 2,
          name: 'Superman',
          primaryAbility: 'Super strength',
          secondarAbility: 'Fly',
        },
        {
          superheroId: 3,
          name: 'Spiderman',
          primaryAbility: 'Spider senses',
          secondarAbility: 'Shoots web',
        },
      ],
    };
  }

  displayAlert = () => {
    alert('devBootCamp2');
  };

  render() {
    return (
      <div>
        <DisplayName names={this.state.names} />;
        <AlertUser Display={this.displayAlert} />
        <SuperHeroTable heroes={this.state.superheroes} />
      </div>
    );
  }
}

export default App;
