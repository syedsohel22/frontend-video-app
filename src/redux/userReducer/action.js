import {
  CARD_REQUEST_FAILURE,
  CARD_REQUEST_SUCCESS,
  CARD_REQUEST_PENDING,
} from "./actionTypes";

import axios from "axios";

export const getCard = () => (dispatch) => {
  dispatch({ type: CARD_REQUEST_SUCCESS });
};
export const postCard = () => (dispatch) => {};
export const patchCard = () => (dispatch) => {};
export const deleteCard = () => (dispatch) => {};
