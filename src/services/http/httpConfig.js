// import cookies from "../cookies";
// import cookiesContants from "../../constants/cookiesContants";

const portConstant = process.env.BASE_URL;

const httpConfig = {
  baseURL: portConstant,
  defaultTimeOut: 2500,
  // authorizationHeader: cookies.get(cookiesContants.sessionId),
  contentType: 'application/json',
};

export { portConstant };
export default httpConfig;
