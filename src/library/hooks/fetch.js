import {useState, useEffect, useCallback} from 'react';
import {API_URL, API_KEY, API_COUNTRY} from 'src/config/config';

export const useFetch = ({path, params}) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetching = useCallback(() => {
    const onSuccess = responseData => {
      setData(responseData);
      setLoading(false);
    };

    const onError = error => {
      setError(error);
      setLoading(false);
    };

    setLoading(true);

    loadData({
      path,
      params,
      onSuccess,
      onError,
    });
  }, []);

  useEffect(() => {
    fetching();
  }, []);

  return {data, loading, error, refetch: fetching};
};

const loadData = async ({path, params, onSuccess, onError}) => {
  try {
    const d = await fetch(buildUrl(path, params));
    const data = await d.json();

    console.log('fetch');

    onSuccess(data);
  } catch (e) {
    console.log(e);
    onError(e);
  }
};

const buildUrl = (path, params) => {
  let url = `${API_URL}/${path}?apiKey=${API_KEY}&country=${API_COUNTRY}`;

  for (let paramName in params) {
    url += '&' + params[paramName];
  }

  return url;
};
