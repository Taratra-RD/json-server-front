import axios from "axios";
import { useEffect, useState } from "react";
import api from "../api/api";

export default function useGetOneProprietaire(id) {
  const [getProprietaire, setGetProprietaire] = useState();

  useEffect(() => {
    axios
      .get(api + "/proprietaire/" + id)
      .then((res) => setGetProprietaire(res.data.result[0]))
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return { getProprietaire };
}
