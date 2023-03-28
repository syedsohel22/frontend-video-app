import {
  CARD_REQUEST_FAILURE,
  CARD_REQUEST_SUCCESS,
  CARD_REQUEST_PENDING,
  CARD_DELETE_REQUEST_SUCCESS,
  CARD_POST_REQUEST_SUCCESS,
  CARD_PATCH_REQUEST_SUCCESS,
} from "./actionTypes";

import axios from "axios";
const API = "http://localhost:8080/posts";

//GET request
export const getCard = () => (dispatch) => {
  dispatch({ type: CARD_REQUEST_PENDING });

  return axios
    .get(API)
    .then((res) => {
      console.log("cardData", res.data);
      dispatch({ type: CARD_REQUEST_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      alert(err);
      dispatch({ type: CARD_REQUEST_FAILURE });
    });
};

//POST request
export const postCard = (cardData) => (dispatch) => {
  dispatch({ type: CARD_REQUEST_PENDING });

  return axios
    .post(API, cardData)
    .then((res) => {
      dispatch({ type: CARD_POST_REQUEST_SUCCESS });
    })
    .catch((err) => {
      alert(err);
      dispatch({ type: CARD_REQUEST_FAILURE });
    });
};

//PATCH request
export const patchCard = (cardData) => (dispatch) => {
  return axios
    .patch(API, cardData)
    .then((res) => {
      dispatch({ type: CARD_PATCH_REQUEST_SUCCESS });
    })
    .catch((err) => {
      alert(err);
      dispatch({ type: CARD_REQUEST_FAILURE });
    });
};

//DELETE request
export const deleteCard = (id) => (dispatch) => {
  return axios
    .delete(API, id)
    .then((res) => {
      dispatch({ type: CARD_DELETE_REQUEST_SUCCESS });
    })
    .catch((err) => {
      alert(err);
      dispatch({ type: CARD_REQUEST_FAILURE });
    });
};
