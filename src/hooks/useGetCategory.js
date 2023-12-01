import axios from "axios";
import { useEffect, useState } from "react";
import api from "../api/api";

export default function useGetCategory() {
  const [getCategories, setGetGategories] = useState();

  useEffect(() => {
    axios
      .get(api + "/category")
      .then((res) => setGetGategories(res.data.result))
      .catch((err) => {
        console.log(err);
      });
  }, [getCategories]);

  return { getCategories };
}
