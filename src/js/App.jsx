import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
    }
  }

  handleToggle = () => {
    this.setState(state => ({
      toggle: !state.toggle
    }));
  }
  
  render () {
    return (
      <div>
        <p>toggle: {this.state.toggle ? "true" : "false"}</p>
        <button onClick={this.handleToggle}>Toggle</button>
      </div>
    )
  }
}

export default App;
