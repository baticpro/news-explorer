export const extractNewsList = data => {
  if (data && data.articles) {
    return data.articles.map(article => {
      return {
        title: article.title,
        image: article.urlToImage,
        date: article.publishedAt,
      };
    });
  }

  return [];
};
