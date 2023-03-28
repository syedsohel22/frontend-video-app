import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as userReducer } from "./userReducer/reducer";
import { reducer as historyReducer } from "./historyReducer/reducer";
// console.log(historyReducer);
// console.log(userReducer);
const rootReducer = combineReducers({
  userReducer,
  historyReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
//console.log("from store", store);
