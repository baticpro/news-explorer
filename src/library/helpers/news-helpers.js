import {API_URL, API_KEY, API_COUNTRY} from '../../config/config';

const extractNewsList = data => {
  if (!data) return [];

  const {articles = []} = data;

  return articles.map(
    ({
      title,
      urlToImage: image,
      publishedAt: date,
      content,
      source: {name: tag},
      url,
      description,
    }) => {
      return {
        title,
        image,
        date,
        content,
        tag,
        url,
        description,
      };
    },
  );
};

const buildUrl = (path, params) => {
  let url = `${API_URL}/${path}?apiKey=${API_KEY}&country=${API_COUNTRY}`;

  for (let paramName in params) {
    url += '&' + params[paramName];
  }

  return url;
};

export const fetchNews = async () => {
  const data = await fetch(buildUrl('top-headlines'));
  const jsonData = await data.json();
  const items = extractNewsList(jsonData);

  return {items};
};
