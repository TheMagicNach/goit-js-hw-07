import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryUl = document.querySelector('.gallery')
const imageMarkup = createGalleryImageMarkup(galleryItems);

galleryUl.insertAdjacentHTML("beforeend", imageMarkup);
galleryUl.addEventListener("click", onGalleryImageClick);


function createGalleryImageMarkup(galleryItem) {
  return galleryItem
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
                <a class="gallery__link" href="${original}">
                  <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                  />
                </a>
              </li>`;
    })
    .join("");
}

function onGalleryImageClick(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== 'IMG') {
    return;
  }

  function onEscKeyPress(evt) {
    if (evt.code !== "Escape") {
      return;
    }
    instance.close();
  }

  const originalImageResolution = evt.target.dataset.source;
  const instance = basicLightbox.create(
    `<img src="${originalImageResolution}"  width="1400px" height="900px"; >`,
    {
      onShow: () => window.addEventListener("keydown", onEscKeyPress),
      onClose: () => window.removeEventListener("keydown", onEscKeyPress),
    }
  );
  instance.show(); 
};