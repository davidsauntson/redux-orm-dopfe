import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import orm from './orm/orm';

const emptyDBState = orm.getEmptyState();

console.log(emptyDBState);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
