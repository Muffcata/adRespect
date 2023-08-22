import Masonry from 'masonry-layout';

document.addEventListener('DOMContentLoaded', function () {
  const grid = document.querySelector('.grid');
  const masonry = new Masonry(grid, {
    itemSelector: '.grid-item',
    gutter: 24,
    horizontalOrder: true,
    percentPosition: true,
  });
});

//Trying loading next photos - unfortunetely failed

// const gallery = document.querySelector('.grid');
// const addImageButton = document.querySelector('.btn-load');

// function addImageToGallery(src, alt) {
//   const masonryItem = document.createElement('a');
//   masonryItem.className = 'grid-item';

//   const img = document.createElement('img');
//   img.src = src;
//   img.alt = alt;
//   masonryItem.appendChild(img);
//   gallery.appendChild(masonryItem);
// }

// addImageButton.addEventListener('click', function () {
//   addImageToGallery('./src/images/Photo(9).png', 'Nowy obrazek');
// });
