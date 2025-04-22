import { useEffect, useState, useRef } from "react";

const TTL = 5 * 60 * 1000; // 5 minutes

export const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const abortRef = useRef(null);

  const fetchData = async (force = false) => {
    setLoading(true);
    setError(null);

    try {
      const now = Date.now();
      const cache = sessionStorage.getItem(url);
      if (!force && cache) {
        const { data, ts } = JSON.parse(cache);
        if (now - ts < TTL) {
          setData(data);
          setLoading(false);
          return;
        }
      }

      abortRef.current = new AbortController();
      const res = await fetch(url, { ...options, signal: abortRef.current.signal });
      if (!res.ok) throw new Error("Network response not ok");

      const result = await res.json();
      setData(result);
      sessionStorage.setItem(url, JSON.stringify({ data: result, ts: now }));
    } catch (err) {
      if (err.name !== "AbortError") setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    return () => {
      if (abortRef.current) abortRef.current.abort();
    };
  }, [url]);

  const refetch = () => fetchData(true);

  return { data, error, loading, refetch };
};
