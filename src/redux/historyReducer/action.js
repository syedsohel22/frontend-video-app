import axios from "axios";
import {
  GET_HISTORY_REQUEST_SUCCESS,
  HISTORY_REQUEST_FAILURE,
  HISTORY_REQUEST_PENDING,
  HISTORY_REQUEST_SUCCESS,
} from "./actionTypes";

const API = "http://localhost:8080/history";

//GET request
export const getHistory = () => (dispatch) => {
  dispatch({ type: HISTORY_REQUEST_PENDING });

  return axios
    .get(API)
    .then((res) => {
   //   console.log("history action", res.data);
      dispatch({ type: GET_HISTORY_REQUEST_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      alert(err);
      dispatch({ type: HISTORY_REQUEST_FAILURE });
    });
};
//POST request
export const postHistory = (cardData) => (dispatch) => {
  dispatch({ type: HISTORY_REQUEST_PENDING });
  return axios
    .post(API, cardData)
    .then((res) => {
      console.log("post-res", res);
      dispatch({ type: HISTORY_REQUEST_SUCCESS });
    })
    .catch((err) => {
      alert(err);
      dispatch({ type: HISTORY_REQUEST_FAILURE });
    });
};
