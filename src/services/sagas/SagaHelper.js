import { put, select, call } from "redux-saga/effects";

// Base URL constants
const BASE_URL = "https://api.example.com";
const FEE_BASE_URL = "https://fee.example.com";

// Utility functions (placeholders for your actual implementations)
const getTenantDomain = () => "your-domain.com";
const getActiveSession = () => ({ db_postfix: "example" });
const appendIds = (userInfo, body, useFeeBaseURL) => body; // Your logic to append IDs
const debugLog = (type, message, data) =>
  console.log(`[${type}] ${message}:`, data); // Replace with your logging

// Generic fetchData function
function* fetchData(action) {
  const { payload } = action;
  const {
    apiUrl,
    useFeeBaseURL,
    requestType,
    body,
    reduxActionType,
    onSuccess,
    onFailure,
    htmlResponse,
  } = payload;

  try {
    let completeUrl = `http://localhost:3011/${apiUrl}`;

    // Set up headers
    const headers = {
      Accept: "application/json",
    };

    // Prepare request options
    const requestOptions = {
      method: requestType,
      headers,
      ...(requestType !== "GET" && {
        body: body,
      }),
    };

    // Fetch data from the API
    const response = yield call(fetch, completeUrl, requestOptions);
    const responseData = htmlResponse
      ? yield response.text()
      : yield response.json();

    // Handle success response
    if (
      responseData.status === "true" ||
      responseData.success === "true" ||
      useFeeBaseURL
    ) {
      if (reduxActionType) {
        yield put({ type: reduxActionType, payload: responseData });
      }
      if (onSuccess) {
        onSuccess(responseData);
      }
    } else {
      // Handle failure response
      if (responseData.statusCode === 401) {
        localStorage.clear();
        // Perform additional actions if needed
        yield put({ type: "LOGOUT_USER" }); // Replace with your logout action
        window.location.href = "/logout";
      }
      if (onFailure) {
        onFailure(responseData);
      }
    }
  } catch (error) {
    debugLog("DEBUG_LOG_API_ERROR", "API ERROR", error);
    if (action.type === "GET_USER_SETTINGS") {
      yield put({ type: "LOGOUT_USER" }); // Replace with your logout action
    }
    if (action.type === "LOGOUT_USER") {
      localStorage.clear();
      // Perform additional actions if needed
    }
  }
}
