import axios from "axios";
import { useEffect, useState } from "react";
import api from "../api/api";

export default function useGetProprietaire() {
  const [getProprietaire, setGetProprietaire] = useState();

  useEffect(() => {
    axios
      .get(api + "/proprietaire")
      .then((res) => setGetProprietaire(res.data.result))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return { getProprietaire };
}
