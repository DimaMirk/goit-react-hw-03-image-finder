const API_KEY = '24657500-5c2ff9cb7634f4ca49a4c6811';
const BASE_URL = 'https://pixabay.com/api/';

function fetchImages(name, page) {
  const url = `${BASE_URL}?key=${API_KEY}&q=${name}&image_type=photo&page=${page}&per_page=12`;

  const images = fetch(url);

  return images;
}

export default fetchImages;
