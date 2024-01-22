import axios from "axios";

const BaseUrl = process.env.REACT_APP_BASE_URL;

const instance = axios.create({
  baseURL: BaseUrl,
  "Content-Type": "application/json",
});

instance.interceptors.request.use((config) => {
  config.headers["Authorization"] =
    "Bearer " + localStorage.getItem("user_token");
  return config;
});

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // if (error.response.status === 401 || error.response.status === 403) {
    //   // Redirect to login page if there's a 401 error
    //   window.location.replace(`${process.env.PUBLIC_URL}/`);
    //   localStorage.clear();
    // }
    return Promise.reject(error);
  }
);

export default instance;