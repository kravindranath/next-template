const { API_KEY } = process.env;

export const API = {
  search: {
    article: `https://api.nytimes.com/svc/search/v2/articlesearch.json?q?api-key=${API_KEY}`,
  },
  mostPopular: {
    shared: `https://api.nytimes.com/svc/mostpopular/v2/shared/1/facebook.json?api-key=${API_KEY}`,
    viewed: `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${API_KEY}`,
  },
};

const COMMON = {
  API,
};

export default COMMON;
