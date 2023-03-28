import {
  CARD_REQUEST_FAILURE,
  CARD_REQUEST_SUCCESS,
  CARD_REQUEST_PENDING,
  CARD_DELETE_REQUEST_SUCCESS,
  CARD_POST_REQUEST_SUCCESS,
  CARD_PATCH_REQUEST_SUCCESS,
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

    case CARD_POST_REQUEST_SUCCESS:
      return { ...state, isLoading: false };

    case CARD_PATCH_REQUEST_SUCCESS:
      return { ...state, isLoading: false };

    case CARD_DELETE_REQUEST_SUCCESS:
      return { ...state, isLoading: false };

    default:
      return state;
  }
};
