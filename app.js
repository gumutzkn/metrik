let ul = document.querySelector(".sayılar");
let li = document.querySelectorAll(".sayılar li");
let div = document.querySelector(".bölüm-2");

li.forEach(el => {
  el.addEventListener("click", function() {
    ul.querySelector(".active").classList.remove("active");

    el.classList.add("active");

    div.classList.add("içeriye");
  });
});
