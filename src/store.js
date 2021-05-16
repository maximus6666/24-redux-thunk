import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";

const initialState = {
  users:[],
  
}
const reduser = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USERS":
      return {
      ...state,
      users: [...action.payload]
    } 
    case "ADD_USER":
      return {
        ...state
      }
  
    default:
      return state;
  }
}

export const store = createStore(
  reduser,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  );
