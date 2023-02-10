const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector('.gallery');

// ------------- 1st variant ----------------------------------------------------------------
// const galleryItems = ({ url, alt }) =>
//   `<li><img src="${url}" alt="${alt}" width = 300 height = auto></li>`;
// const galleryMarkup = images.reduce(
//   (acc, item) => acc + galleryItems(item),
//   []
// );

// gallery.insertAdjacentHTML('afterbegin', galleryMarkup);

// ------------- 2nd variant ----------------------------------------------------------------
/*
const renderGallery = (arr) => {
  return arr.map(({ url, alt }) => {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = url;
    img.alt = alt;
    img.width = 150;
    li.append(img);
    return li;
  });
};

const galleryMarkup = renderGallery(images);
console.log(galleryMarkup);

gallery.append(...galleryMarkup);
*/

//------------- 3rd variant ----------------------------------------------------------------------
/*
const renderGallery = ({ url, alt }) =>
  `<li><img src="${url}" alt="${alt}" width = "200" height = "auto"></li>`;

const galleryMarkup = images.map(renderGallery).join('');
gallery.insertAdjacentHTML('beforeend', galleryMarkup);
*/

// ------------- 4th variant --------------------------------------------------------------------
/*
const galleryMarkup = images
  .map(
    ({ url, alt }) =>
      `<li><img src="${url}" alt="${alt}" width = "250" height = "auto"></li>`
  )
  .join('');

gallery.insertAdjacentHTML('beforeend', galleryMarkup);
*/

// ------------- 5th variant --------------------------------------------------------------------

const galleryMarkup = images.reduce(
  (acc, { alt, url }) =>
    (acc += `<li><img src="${url}" alt="${alt}" width = "300" height = "auto"></li>`),
  ''
);

gallery.insertAdjacentHTML('beforeend', galleryMarkup);

// ------------- 6th variant --------------------------------------------------------------------
/*
const galleryMarkup = images
  .reduce(
    (acc, image) =>
      acc.concat(
        `<li><img src="${image.url}" alt="${image.alt}" width = "350" height = "auto"></li>`
      ),
    []
  )
  .join('');

gallery.insertAdjacentHTML('beforeend', galleryMarkup);
*/
