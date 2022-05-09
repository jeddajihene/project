import axios from "axios";
const setToken = () => {
  let token = localStorage.getItem("token");
  if (token) {
    axios.defaults.headers.common["authentification"] = token;
  } else {
    delete axios.defaults.headers.common["authentification"];
  }
};
export default setToken;
