import {
  CARD_REQUEST_FAILURE,
  CARD_REQUEST_SUCCESS,
  CARD_REQUEST_PENDING,
} from "./actionTypes";
const initaState = {
  isLoading: false,
  isError: false,
  data: [],
};
export const reducer = (state = initaState, { type, payload }) => {
  switch (type) {
    case CARD_REQUEST_PENDING:
      return { ...state, isLoading: true };

    case CARD_REQUEST_SUCCESS:
      return { ...state, isLoading: false, data: payload };

    case CARD_REQUEST_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
