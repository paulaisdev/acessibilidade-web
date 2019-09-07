// Variaveis

var btns = document.querySelectorAll('.lista-artigos__slider-item');
var noticias = document.querySelectorAll('.lista-artigos__item');


var new0 = document.querySelector('#new0');
var new1 = document.querySelector('#new1');
var new2 = document.querySelector('#new2');


new0.style.display = 'block'


// Criando indicador de slide atual
var indicadorSlideAtual = document.createElement('span');
indicadorSlideAtual.classList.add('escondeVisualmente');
indicadorSlideAtual.textContent = '(Slide atual)';


// Percorre todos os botoes controladores
btns.forEach(function(btn) {
  btn.addEventListener('click', function() {

    // btn.href = 'javascript:void(0)'
    noticias.forEach(function(noticia) {
      noticia.style.display = 'none';

      if ( this.getAttribute('data-sliderItem') === noticia.getAttribute('data-noticia') ) {
        noticia.style.display = 'block'
      }

    }.bind(this));



    document.querySelector('.lista-artigos__slider-item .escondeVisualmente').remove();
    this.append(indicadorSlideAtual);


    // Remove classe 'ativo' dos outros botoes
    btns.forEach(function(btnRemoveClass) {
      btnRemoveClass.classList.remove('lista-artigos__slider-item--ativo')
    })

    this.classList.add('lista-artigos__slider-item--ativo')
  })
})
