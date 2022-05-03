import * as axios from "axios";
import PropTypes from "prop-types";
import { portConstant } from "./httpConfig";
// import forceLogout from '../../helpers/forceLogout';

/**
 * Axios Default parameters
 */
axios.defaults.baseURL = portConstant;
// axios.defaults.headers.common["Authorization"] = authorizationCookie;
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

/**
 * @description Make an backend request using Axios
 * @typedef {Object} httpReq
 * @property {("get" | "post" | "put" | "delete" | "request" | "head" | "options" | "patch")} method
 * @property {String} url
 *
 * @param {httpReq} config
 */

async function httpReq(config) {
  const response = await axios(config);
  switch (response.status) {
    case 401:
      // forceLogout();
      break;
    case 200:
      return response;
    default:
      break;
  }
  return response;
}

httpReq.ProTypes = PropTypes.shape({
  method: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  baseURL: PropTypes.string,
  headers: PropTypes.object,
  params: PropTypes.object,
  paramsSerializer: PropTypes.func,
  data: PropTypes.object,
  timeout: PropTypes.number,
  withCredentials: PropTypes.bool,
  adapter: PropTypes.func,
  auth: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string,
  }),
  responseType: PropTypes.string,
  responseEncoding: PropTypes.string,
  xsrfCookieName: PropTypes.string,
  xsrfHeaderName: PropTypes.string,
  onUploadProgress: PropTypes.func,
  onDownloadProgress: PropTypes.func,
  maxContentLength: PropTypes.number,
  maxBodyLength: PropTypes.number,
  validateStatus: PropTypes.func,
  maxRedirects: PropTypes.number,
  socketPath: PropTypes.string,
  httpAgent: PropTypes.object,
  httpsAgent: PropTypes.object,
  proxy: PropTypes.shape({
    host: PropTypes.string,
    port: PropTypes.number,
    auth: PropTypes.shape({
      username: PropTypes.string.isRequired,
      password: PropTypes.string,
    }),
  }),
  cancelToken: PropTypes.object,
  decompress: PropTypes.bool,
});

export default httpReq;
