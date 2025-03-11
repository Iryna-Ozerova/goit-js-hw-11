// http запит на бек
import axios from 'axios';

const API_KEY = '49186769-dabefba962826c776b77806d1';
const BASE_URL = 'https://pixabay.com/api/';

// функція для отримання зображень
export function searchImages(query) {
  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data.hits)
    .catch(error => {
      console.error('Error fetching images:', error.message);
      return [];
    });
}