import { Constants } from "../../Constants";
import { CREATE_USER } from "./ActionTypes/ApiActionTypes";

export const createUser = (body, onSuccess, onFailure) => {
  return {
    type: CREATE_USER,
    payload: {
      onSuccess,
      onFailure,
      apiUrl: Constants.api_user_create,
      body: body,
      useBaseURL: true,
      requestType: "POST",
      header: "application/json",
      reduxActionType: "",
    },
  };
};
