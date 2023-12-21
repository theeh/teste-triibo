import axios from "axios";
import { useState } from "react";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

export function useRequestPost<T = unknown>(pageLimit: number) {
  const [data, setData] = useState<T | null>(null);
  const [isRequesting, setIsRequesting] = useState(true);

  function fetchPosts(page: number) {
    const virtualPage = (page - 1) * pageLimit < 0 ? 0 : (page - 1) * pageLimit;

    axios
      .get(`${BASE_URL}?_start=${virtualPage}&_limit=${pageLimit}`)
      .then((response) => {
        setData(response.data);
      })
      .finally(() => {
        setIsRequesting(false);
      });
  }

  return { fetchPosts, isRequesting, data };
}
