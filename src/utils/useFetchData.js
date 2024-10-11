import { useEffect, useState } from "react";
import fetchData from "../utils/fetchData";

const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      setLoading(true);
      try {
        const result = await fetchData(url);
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDataAsync();
  }, [url]);

  return { data, loading, error };
};

export default useFetchData;
