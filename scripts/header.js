// Когда пользователь прокручивает страницу, выполните myFunction
window.onscroll = function() {myFunction()};

// Получить навигатор
var header = document.getElementById("header");

// Получить смещение позиции навигационной панели
var sticky = header.offsetTop;

// Добавить класс sticky к навигационной панели, когда вы достигнете ее положения прокрутки. Удалите "sticky", когда вы покидаете положение прокрутки
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky")
  } else {
    header.classList.remove("sticky");
  }
}