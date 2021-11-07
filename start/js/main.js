'use strict';

function ShowMore() {
  let dots = document.getElementById('dots');
  let moreText = document.querySelector(".services__content-text--more");
  let btnText = document.getElementById("btnMore");

  if (dots.style.display === 'none') {
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
let span__header = document.getElementsByClassName("close__model-header")[0];
let fault = document.querySelector('.modal__footer-link--n');

// Когда пользователь открывает страницу, откройте модальный
window.onload = function() {
  if (localStorage.getItem('region') == null){
    modal.style.display = "flex";
  } else {
    let region_link = document.querySelector('.region-link');
    region_link.innerHTML = localStorage.getItem('region');
  }
};


// Когда пользователь нажимает на <span> (x), закройте модальное окно
span__header.onclick = function () {
  modal.style.display = "none";
};

function ModalNo() {
  modal.style.display = "none";
  let region_link = document.querySelector('.region-link');
  region_link.innerHTML = 'Не выбрано';

};

// Когда пользователь щелкает в любом месте за пределами модального, закройте его
document.addEventListener('click', function (event) {
  if (!modal.contains(event.target)) modal.style.display = 'none';
});

$(function () {

  $('.slider__inner').slick({
    arrows: false,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1

  });

});


let modal__choose = document.querySelector('.modal__choose');
let span__choose = document.querySelector('.close__choose');


//появление окна выбора региона
function ShowModalRegion() {
  modal__choose.style.display = 'block';
  modal.style.display = "none";

};

//закрытие по крестику
span__choose.onclick = function () {
  modal__choose.style.display = 'none';
};


let modal__ch = document.querySelector('.modal__choose');
window.onclick = function(event) {
  if (event.target == modal__choose) {
    if (localStorage.getItem('region') == null){
      ModalNo();
      modal__ch.style.display = "none";

    } else {
      modal__ch.style.display = "none";
    }
    
  }
};


function getValue() {
  var select = document.getElementById("region");
  var value = select.value;
  let region_link = document.querySelector('.region-link');
  region_link.innerHTML = value;
  localStorage.setItem('region', value.toString());

}