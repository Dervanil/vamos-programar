# Iniciando com Javascript

## O que é Javascript?

Javascript é uma linguagem de programação que permite adicionar comportamentos adicionais ao HTML e CSS, álem de ter uma série de outras aplicações, inicialmente iremos nos focar em uso Web.

Com Javascript é possível manipular o HTML e o CSS, tornando as paginas Web dinâmicas.

```Javascript
const para = document.querySelector('p');

para.addEventListener('click', updateName);

function updateName() {
  let name = prompt('Enter a new name');
  para.textContent = 'Player 1: ' + name;
}
```
Este exemplo adiciona comportamento em botão na pagina.
