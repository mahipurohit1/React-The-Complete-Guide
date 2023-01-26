import { useState, useCallback } from "react";
const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfigure, applyData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requestConfigure.url, {
        method: requestConfigure.method ? requestConfigure.method : "GET",
        headers: requestConfigure.headers ? requestConfigure.headers : {},
        body: requestConfigure.body
          ? JSON.stringify(requestConfigure.body)
          : null,
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();
      applyData(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, []);
  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
