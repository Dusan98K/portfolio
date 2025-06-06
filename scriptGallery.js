const images = [
  "images/gallery17.JPG",
  "images/gallery14.JPG",
  "images/gallery31.jpg",
  "images/gallery1.jpg",
  "images/gallery4.jpg",
  "images/gallery25.jpg",
  "images/gallery5.jpg",
  "images/gallery6.jpg",
  "images/gallery7.JPG",
  "images/gallery8.jpg",
  "images/gallery9.jpg",
  "images/gallery10.jpg",
  "images/gallery13.JPG",
  "images/gallery2.jpg",
  "images/gallery15.JPG",
  "images/gallery16.jpg",
  "images/gallery18.JPG",
  "images/gallery19.jpg",
  "images/gallery20.jpg",
  "images/gallery21.jpg",
  "images/gallery22.jpg",
  "images/gallery23.jpg",
  "images/gallery24.jpg",
  "images/gallery27.jpg",
  "images/gallery28.jpg",
  "images/gallery30.jpg",
  "images/gallery32.jpg",
  "images/gallery33.jpg",
  "images/gallery29.jpg",
  "images/gallery26.jpg",
];

const galleryWrapper = document.getElementById("gallery-slides");

images.forEach(src => {
  const slide = document.createElement("div");
  slide.className = "swiper-slide tranding-slide";

  slide.innerHTML = `
      <div class="tranding-slide-img">
        <img src="${src}">
      </div>
    `;

  galleryWrapper.appendChild(slide);
});


var TrandingSlider = new Swiper('.tranding-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});