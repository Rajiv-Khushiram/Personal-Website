import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { render } from 'react-dom';
import { injectGlobal } from 'styled-components';
import 'normalize-css/normalize.css';
import 'font-awesome/css/font-awesome.css';
import 'hamburgers/dist/hamburgers.css';

import * as serviceWorker from './serviceWorker';

const globalStyle = () => injectGlobal`
  body {
    overflow-x: hidden;
    font-family: Raleway, Arial, Helvetica, sans-serif;
  }
`;

globalStyle();

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept()
}
