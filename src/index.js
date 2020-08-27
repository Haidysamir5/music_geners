
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from 'redux-promise';
import reducers from "./reducers";

import * as serviceWorker from './serviceWorker';

import GenreList from './components/GenreList';
import GenreArtists from './components/GenreArtists';
// import ReduxModal from 'react-redux-modal'

// import reducers from "./reducers";
import 'antd/dist/antd.css';
import "bootstrap/dist/css/bootstrap.min.css";
// import "http://diegoddox.github.io/react-redux-modal/0.5/react-redux-modal.min.css"
import './index.css';

// import "@fortawesome/fontawesome-free/css/all.min.css";
const store = createStore(reducers, applyMiddleware(promiseMiddleware));
// const store = createStore(reducers, applyMiddleware(promiseMiddleware));
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          {/* <Route path="/posts/new" exact component={PostNew} /> */}
          <Route path="/:id" exact component={GenreArtists} />
          <Route path="/" exact component={GenreList} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
