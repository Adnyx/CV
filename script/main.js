const themeButton = document.getElementById('theme-toggle')

const clickableImg = document.getElementById('smallImage')
const bigImage = document.getElementById('bigImage')
const darkBackground = document.getElementById('darkBackground')

themeButton.addEventListener('click', function() {
    if (document.body.classList.contains('light-theme')) {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
      } else {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
      }
})

clickableImg.addEventListener("click", function() {
  bigImage.style.display = "block";
  darkBackground.style.display = "block";
});

darkBackground.addEventListener("click", function() {
  bigImage.style.display = "none";
  darkBackground.style.display = "none";
});