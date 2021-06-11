import axios from "axios";

const appAxios = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL
  //   headers : {
  //       ...
  //   }
});

export { appAxios };

// axiosInstance.interceptors.request.use(config => {})
// axiosInstance.interceptors.response.use(config => {})
