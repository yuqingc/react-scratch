import React from 'react';

// Make sure everything works
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
    }
  }

  renderContent = () => {
    return (
      <p>
        Thanks for using&nbsp;
        <a 
          href="https://github.com/yuqingc/react-scratch"
          target="_blank"
        >
          react-scratch
        </a>
      </p>
    );
  }
  
  render () {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>Yeah! Everything works!</h1>
        {this.renderContent()}
      </div>
    );
  }
}

export default App;
