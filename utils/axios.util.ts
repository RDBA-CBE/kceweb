import axios from "axios";

export const instance = () => {
  const data = axios.create({
    baseURL: "https://kahedu.edu.in/wp-json/wp/v2/pages?slug=",
  });
  data.interceptors.request.use(async function (config) {

    config.headers["authorization"] = null;
    delete config.headers["authorization"];

    return config;
  });
  return data;
};

export default instance;
