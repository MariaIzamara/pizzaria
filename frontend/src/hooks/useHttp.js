import { useState, useCallback } from 'react';

const useHttp = (defaultData = {}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(defaultData);

  const sendRequest = useCallback(async (requestConfig, applyData = data => data) => {
    console.log(requestConfig, applyData);
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(requestConfig.url, {
        mode: 'no-cors',
        method: requestConfig.method ? requestConfig.method : 'GET',
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();
      setData(applyData(data));
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setLoading(false);
  }, []);

  return {
    loading,
    error,
    data,
    sendRequest,
  };
};

export default useHttp;