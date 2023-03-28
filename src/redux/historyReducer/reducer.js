import {
  GET_HISTORY_REQUEST_SUCCESS,
  HISTORY_REQUEST_FAILURE,
  HISTORY_REQUEST_PENDING,
  HISTORY_REQUEST_SUCCESS,
} from "./actionTypes";
const initalState = {
  isLoading: false,
  isError: false,
  history: [],
};

export const reducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case HISTORY_REQUEST_PENDING:
      return { ...state, isLoading: true };
    case GET_HISTORY_REQUEST_SUCCESS:
      return { ...state, isLoading: false, history: payload };
    case HISTORY_REQUEST_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case HISTORY_REQUEST_SUCCESS:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
