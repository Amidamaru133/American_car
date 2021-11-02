'use strict';
function ShowMore(){
  let dots = document.getElementById('dots');
  let moreText = document.querySelector(".services__content-text--more");
  let btnText = document.getElementById("btnMore");
  
  if (dots.style.display === 'none'){
    dots.style.display = 'inline';
    btnText.innerHTML = "Читать полностью";
    moreText.style.display = 'none';
  } else {
    dots.style.display = 'none';
    btnText.innerHTML = "Скрыть";
    moreText.style.display = 'inline';
  }
}

// Получить модальный
let modal = document.querySelector(".modal");
let modal_content = document.querySelector('.modal-content');

// Получить элемент <span>, который закрывает модальный
let span = document.getElementsByClassName("close")[0];
let fault = document.querySelector('.modal__footer-link--n');

// Когда пользователь нажимает на кнопку, откройте модальный
window.onload = function() {
  modal.style.display = "flex";
};

// Когда пользователь нажимает на <span> (x), закройте модальное окно
span.onclick = function() {
  modal.style.display = "none";
};

fault.onclick = function() {
  modal.style.display = "none";
};

// Когда пользователь щелкает в любом месте за пределами модального, закройте его

document.addEventListener('click', function(event) {
  
  if (!modal.contains(event.target)) modal.style.display='none';
});