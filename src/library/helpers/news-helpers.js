export const extractNewsList = data => {
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
