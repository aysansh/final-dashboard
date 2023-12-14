import axios from "axios";
const token = localStorage.getItem("token");
const instace = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1",
  headers: {
    Authorization: ` Bearer ${token}`,
  },
});
export default instace;
