import axios from "axios";
import { useEffect, useState } from "react";
import api from "../api/api";

export default function useGetAutre() {
  const [getAutre, setGetAutre] = useState();

  useEffect(() => {
    axios
      .get(api + "/autre")
      .then((res) => setGetAutre(res.data.result))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return { getAutre };
}
