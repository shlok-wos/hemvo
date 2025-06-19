import { config } from "@/config";
import axios from "axios";
import { setCookie, getCookie } from "cookies-next";
const token = getCookie("_token");
const backendURL = config.API_URL;
const requestToken = config.REQUEST_TOKEN;

const axiosApi: any = axios.create({
  baseURL: backendURL,
  timeout: 100000,
});

const setAuthHeader = (token: string) => {
  axiosApi.defaults.headers.Authorization = `Bearer ${token}`;
};

if (typeof window !== "undefined") {
  axiosApi.defaults.headers = {
    Authorization: `Bearer ${token}` ? `Bearer ${token}` : "",
    requestToken: requestToken,
  };
}

// setting up interceptors
axiosApi.interceptors.response.use(
  (response: any) => {
    return response;
  },
  (error: any) => {
    if (error?.response?.status === 404) {
      console.log("/404");
    } else if (error?.response?.status === 500) {
      console.log("/500");
    } else if (error?.response?.status === 401) {
      console.log("/401");
    } else {
      console.log("/other-errors.");
    }
    return Promise.reject(error);
  }
);

export { axiosApi, setAuthHeader };
