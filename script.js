const track = document.querySelector('.carousel-track');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let currentIndex = 0;

next.addEventListener('click', () => {
  if (currentIndex < 2) {
    currentIndex++;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
});

prev.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
});
