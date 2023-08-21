import Masonry from 'masonry-layout';

document.addEventListener('DOMContentLoaded', function () {
  const grid = document.querySelector('.grid');
  const masonry = new Masonry(grid, {
    itemSelector: '.grid-item',
    gutter: 24,
  });
});
