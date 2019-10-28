import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

//Redux Imports
import { Provider } from "react-redux"
import { createStore, applyMiddleware, combineReducers } from "redux"

//Middleware Imports
import logger from "redux-logger"
import thunk from "redux-thunk"

//Reducer Imports
import { getReducer} from "./reducers/reducer"


const rootReducer = combineReducers({
    smurf: getReducer
})


const store = createStore(rootReducer, applyMiddleware(thunk, logger))

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById("root"));
