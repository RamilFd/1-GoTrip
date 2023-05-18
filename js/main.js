
// Carousel
  const owl = $('.owl-carousel');
owl.owlCarousel({
    center: true,
    margin: 20,
    startPosition: 2,
    loop: true,
    items: 1,

    responsive : {

      580 : {
        items: 2,
        margin: 20,
      },
      700 : {
        items: 3,
      },
      1200 : {
        margin: 30,
        items: 3,
      }
  }
});

$('.slider__btn--prev').click(function() {
   owl.trigger('prev.owl.carousel');
})

$('.slider__btn--next').click(function() {
    owl.trigger('next.owl.carousel');
})

// Nav icon
const navBtn = document.querySelector('.nav__toggle');
const nav = document.querySelector('.nav')
const menuIcon = document.querySelector('.menu-icon');


navBtn.onclick = function () {
	nav.classList.toggle('nav--mobile')
	menuIcon.classList.toggle('menu-icon--active');
	document.body.classList.toggle('no-scroll');
};

