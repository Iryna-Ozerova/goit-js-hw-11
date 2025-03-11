import { searchImages } from './js/pixabay-api.js';
import { updateGallery, showNoResultsMessage, showLoader, hideLoader } from './js/render-functions.js';


  const form = document.querySelector('.form');
  const input = document.querySelector('.input-search');
  const gallery = document.querySelector('.gallery');

   form.addEventListener('submit', function (event) {
    event.preventDefault();

    const query = input.value.trim();
    if (query === '') {
      showNoResultsMessage('Please enter a search query!');
      return;
    }

    gallery.innerHTML = ''; // Очищаємо галерею перед новим пошуком
    showLoader(); // Показуємо лоадер перед запитом

    searchImages(query)
      .then(images => {
        hideLoader(); // Ховаємо лоадер після отримання результатів

        if (images.length === 0) {
          showNoResultsMessage('Sorry, there are no images matching your search query. Please try again!');
          return;
        }

        updateGallery(images);
      })
      .catch(error => {
        hideLoader();
        showNoResultsMessage('Error fetching images. Please try again!');
        console.error('Помилка сервера:', error.message);
      });

    form.reset(); 
  });
    

