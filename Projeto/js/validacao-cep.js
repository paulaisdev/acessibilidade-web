document.querySelector('#cep').oninvalid = function() {
  this.setCustomValidity('');

  if (!this.validity.valid) {
      this.setCustomValidity('Ops! Tem algo errado neste campo!');
      this.parentNode.classList.add('contato-campo__erro')
   }
}
