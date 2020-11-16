import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from './components/App';

import './main.scss';

ReactDOM.render(
  <App userName="Developers" lang="TypeScript" />,
  document.getElementById('root'),
);
