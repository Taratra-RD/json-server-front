import axios from "axios";
import { useEffect, useState } from "react";
import api from "../api/api";

export default function useGetOneService(id) {
  const [getService, setGetService] = useState();

  useEffect(() => {
    axios
      .get(api + "/service/" + id)
      .then((res) => setGetService(res.data.result[0]))
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return { getService };
}
