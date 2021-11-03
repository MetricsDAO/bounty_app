import Axios from "axios";
import { parseCookies, setCookie } from "nookies";
import querystring from "query-string";
import { v4 as uuidv4 } from "uuid";

export interface APIResponse<T> {
  status: {
    timestamp: string;
    error_code: string;
    error_description: string;
  };
  data: T;
}

const client = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL + "/api/v1/",
  paramsSerializer: (params) => querystring.stringify(params),
});

client.interceptors.request.use((config) => {
  const anonUserID = parseCookies()["AnonUserID"];
  if (anonUserID) {
    config.headers.AnonUserID = anonUserID;
  } else {
    const id = uuidv4();
    setCookie(null, "AnonUserID", id, {
      maxAge: 365 * 24 * 60 * 60, // one year
      path: "/",
    });
    config.headers.AnonUserID = id;
  }
  const authorization = parseCookies()["Authorization"];
  if (authorization) {
    config.headers.Authorization = authorization;
  }
  return config;
});

export default client;
