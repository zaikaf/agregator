document.addEventListener("DOMContentLoaded", () => {
   const questList = [...document.querySelectorAll('.quest__question')]

   questList.forEach( question => {
      question.addEventListener('click', (e) => {
         e.preventDefault();
         e.currentTarget.classList.toggle('-show');
      })
   })
});