export const fetchPixabay = (query, page) => {
  const API_KEY = '32771558-0f8c3e89f81ea3198068793e7';
  const BASE_URL = 'https://pixabay.com/api/';

  return fetch(
    `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(
      new Error(`Пошук за значенням ${query} не дав результату`)
    );
  });
};
