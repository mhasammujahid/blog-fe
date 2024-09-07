import { api_user_create, api_user_login } from "../../Constants";
import { CREATE_USER, LOGIN_USER } from "./ActionTypes/ApiActionTypes";

export const createUser = (body, onSuccess, onFailure) => {
  return {
    type: CREATE_USER,
    payload: {
      onSuccess,
      onFailure,
      apiUrl: api_user_create,
      body: body,
      requestType: "POST",
      header: "application/json",
      reduxActionType: "",
    },
  };
};

export const loginUser = (body, onSuccess, onFailure) => {
  return {
    type: LOGIN_USER,
    payload: {
      onSuccess,
      onFailure,
      apiUrl: api_user_login,
      body: body,
      requestType: "POST",
      header: "application/json",
      reduxActionType: "",
    },
  };
};
