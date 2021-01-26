import {applyMiddleware, createStore} from "redux";
import logger from "redux-logger";

let initialState = {
  loading: false,
  comments: []
};

function mainReducer(state = initialState, action) {
  if (action.type === 'SET_COMMENTS') {
    return {
      ...state,
      comments: action.payload.data
    };
  } else if (action.type === 'SET_LOADING') {
    return {
      ...state,
      loading: action.payload.data
    };
  } else {
    return state;
  }
}

let store = createStore(mainReducer, applyMiddleware(logger));

export default store;