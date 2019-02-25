import React, { useState } from 'react';

// Hook example
function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>This is an example for the new Hooks. You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

// Make sure everything works
export class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
    }
  }

  // Test if the inline arrow function works
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
        <Example/>
      </div>
    );
  }
}
