import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import Index from 'layouts/index'

import Item from './article/list/item'
import Detail from './article/detail'

ReactDOM.render(
  <React.StrictMode>
    <Index>
      <Item title="Hello World!" date="2020年3月20日" summary="我始终还是又自己开始“写”博客了！" />
      <hr />
      <Detail />
    </Index>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
