import axios from "axios";
import { useEffect, useState } from "react";
import api from "../api/api";

export default function useGetSociete() {
  const [getSociete, setGetSociete] = useState();

  useEffect(() => {
    axios
      .get(api + "/societe")
      .then((res) => setGetSociete(res.data.result))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return { getSociete };
}
