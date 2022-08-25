import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import  productsReducers  from "./reducers/productsReducers";
import "./index.css";

const store = createStore(productsReducers, compose(applyMiddleware(thunk)));


/*import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    todos: '',
    filters: '',
  },
// });
*/
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


