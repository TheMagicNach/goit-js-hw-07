import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryUl = document.querySelector('.gallery');
const imageMarkup = createGalleryImageMarkup(galleryItems);
galleryUl.insertAdjacentHTML("beforeend", imageMarkup);

function createGalleryImageMarkup(galleryItem) {
  return galleryItem
    .map(({ preview, original, description }) => {
      return `
  <li class="gallery__item">
  <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
</li>
`;
    })
    .join("");
}

let gallery = new SimpleLightbox(".gallery a",
{
  captionsData: "alt",
  captionPosition: "top",
  captionDelay: 250,
  animationSpeed:100,
});


