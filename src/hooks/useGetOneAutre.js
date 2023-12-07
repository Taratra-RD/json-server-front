import axios from "axios";
import { useEffect, useState } from "react";
import api from "../api/api";

export default function useGetOneAutre(id) {
  const [getAutre, setGetAutre] = useState();

  useEffect(() => {
    axios
      .get(api + "/autre/" + id)
      .then((res) => setGetAutre(res.data.result[0]))
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return { getAutre };
}
