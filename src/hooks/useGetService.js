import axios from "axios";
import { useEffect, useState } from "react";
import api from "../api/api";

export default function useGetService() {
  const [getService, setGetService] = useState();

  useEffect(() => {
    axios
      .get(api + "/service")
      .then((res) => setGetService(res.data.result))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return { getService };
}
