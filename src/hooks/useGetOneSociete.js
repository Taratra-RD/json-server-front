import axios from "axios";
import { useEffect, useState } from "react";
import api from "../api/api";

export default function useGetOneSociete(id) {
  const [getSociete, setGetSociete] = useState();

  useEffect(() => {
    axios
      .get(api + "/societe/" + id)
      .then((res) => setGetSociete(res.data.result[0]))
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return { getSociete };
}
