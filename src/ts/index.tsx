import ReactDOM from 'react-dom';
import React from 'react';

import { hello } from './test';
import { App } from './App';

console.log(hello);

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
