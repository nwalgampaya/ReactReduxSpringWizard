import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import getAppStore from "./store/store";
// import { getBooks } from './actions/books';
import { getPersons } from "./actions/persons";
import './index.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';
import background from '../src/img/headervector.png';
import "./styles/styles.scss";
import { Provider } from "react-redux";

const store = getAppStore();

const template = (
  <Provider store={store}>

    <AppRouter />
  </Provider>
);

store.dispatch(getPersons()).then(() => {
  ReactDOM.render(template, document.getElementById("app"));
});
