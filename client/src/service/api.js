import axios from "axios";

const API_URL = "http://localhost:8080";

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    "content-type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.request.use(
  function (response) {
    //Stop global loader here
    return processResponse(response);
  },
  function (error) {
    //Stop global loader here
    return Promise.reject(processError(response));
  }
);

const processResponse = (error) => {
  if (error.response) {
    //Request made and server responded with a staus other that falls out of range
    console.log("Error in response", error.toJSON());
    return {
      isError: true,
      msg: API_NOTIFICATION_MESSAGES.reponseFailure,
      code: error.reponse.status,
    };
  } else if (error.request) {
    //Request made but no server response was received
    console.log("Error in request", error.toJSON());
    return {
      isError: true,
      msg: API_NOTIFICATION_MESSAGES.requestFailure,
      code: error.request.request,
    };
  } else {
    //Something happened on setting up request that triggers an error
    console.log("Error in Network:", error.toJSON());
    return {
      isError: true,
      msg: API_NOTIFICATION_MESSAGES.networkError,
      code: error.response.status,
    };
  }
};
