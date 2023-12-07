import axios from "axios";
import { useEffect, useState } from "react";
import api from "../api/api";

export default function useGetOneCategory(id) {
  const [getCategorie, setGetGategorie] = useState();

  useEffect(() => {
    axios
      .get(api + "/category/" + id)
      .then((res) => setGetGategorie(res.data.result[0]))
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return { getCategorie };
}
