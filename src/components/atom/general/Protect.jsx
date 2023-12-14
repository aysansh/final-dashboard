import axios from "../../../service/axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Protect({ children }) {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    axios
      .get("/auth/profile")
      .then((e) => {
        setAuth(true);
      })
      .catch(() => {
        navigate("/");
      });
  },[]);
  return auth && children;
}

export default Protect;
