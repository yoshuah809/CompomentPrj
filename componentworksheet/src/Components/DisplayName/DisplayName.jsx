import React from 'react';

const DisplayName = (props) => {
  return (
<h1>
      {props.names.map(name => {
        return <li> {name} </li>;
      })}
    </h1>
  );
};

export default DisplayName;

/*
create a list of component using a function and props
function DisplayName(props) {
  <h2>
    {this.props.names.map(name => {
      return <li> {name} </li>;
    })}
  </h2>;
}
create a list of component using class variable and props
class DisplayName extends Component {
  render() {
    return (
      <div>
        {this.props.names.map(name => {
          return <li> {name} </li>;
        })}
      </div>
    );
  }
}
*/