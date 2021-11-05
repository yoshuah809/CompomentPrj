import React from 'react';
import './SuperHero.css';

const SuperHeroTable = props => {
  return (
    <table id='heroes'>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Primary Ablity</th>
        <th>Secondary Ablity</th>
      </tr>
      {props.heroes.map(hero => {
        return (
          <tr>
            <th>{hero.superheroId} </th>
            <td>{hero.name}</td>
            <td>{hero.primaryAbility}</td>
            <td>{hero.secondarAbility}</td>
          </tr>
        );
      })}
    </table>
  );
};

export default SuperHeroTable;
