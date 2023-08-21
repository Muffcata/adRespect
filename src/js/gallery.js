import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.grid-item', {
  captionsData: 'alt',
  captionPosition: 'outside',
  captionDelay: '250',
  scrollZoom: true,
});
