document.addEventListener("DOMContentLoaded", () => {
   const sliderReviews = tns({
      container: '.reviews__slider',
      items: 1,
      autoplay: true,
      nav: false,
      arrowKeys: true,
      mouseDrag: true,
      autoplayButtonOutput: false,
      gutter: 10,
      controlsPosition: 'bottom',
      controlsContainer: ".reviews__slider__controls",
      prevButton: '#left',
      nextButton: '#right',
      loop: false
   });

   //question up-down
   const questList = [...document.querySelectorAll('.quest__question')]
   questList.forEach( question => {
      question.addEventListener('click', (e) => {
         e.preventDefault();
         e.currentTarget.classList.toggle('-show');
      })
   })
});