// let ul = document.querySelector(".sayılar");
// let li = document.querySelectorAll(".sayılar li");
// let div = document.querySelector(".bölüm-2");

// var i = 0;

// li.forEach(el => {
//   el.addEventListener("click", function() {
//     i++;

//     ul.querySelector(".active").classList.remove("active");

//     el.classList.add("active");

//     addDiv();
//   });
// });

// const addDiv = () => {
//   if (i === 1) {
//     div.classList.add(".içeriye");
//   }
// };

var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("bölüm");
  var sayı = document.getElementsByClassName("sayı");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < sayı.length; i++) {
    sayı[i].className = sayı[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "inherit";
  sayı[slideIndex - 1].className += " active";
}
