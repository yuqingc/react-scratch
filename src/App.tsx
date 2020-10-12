import React from 'react';
import './App.scss';

interface AppState {
  toggle: boolean;
}

// Make sure everything works
export class App extends React.Component<{}, AppState> {

  constructor(props: any) {
    super(props);
    this.state = {
      toggle: false,
    };
  }

  // Test if the inline arrow function works
  renderContent = () => {
    return (
      <p className="content">
        Thanks for using&nbsp;
        <a 
          href="https://github.com/yuqingc/react-scratch"
          target="_blank"
          rel="noopener noreferrer"
        >
          react-scratch
        </a>
      </p>
    );
  }
  
  render () {
    return (
      <React.StrictMode>
        <div className="container">
          <h1 className="welcome">Yeah! Everything works!</h1>
          {this.renderContent()}
        </div>
      </React.StrictMode>
    );
  }
}
