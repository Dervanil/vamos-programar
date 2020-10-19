/* Define uma função, que é um bloco de código que podem chamar para interagir com a pagina */
function add_item() {
  /* Para manipular os elementos na pagina esta função permite que selecionemos um elemento */
  let item = document.getElementById("todo-text");
  let list_item = document.getElementById("items");

  /* Verificamos se foi digitado algo campo */
  if (item.value != "") {
    // Cria um novo elemento para lista
    let newItem = document.createElement("li");

    // Pega o texto que foi digitado e adiciona no elemento
    newItem.appendChild(document.createTextNode(item.value));

    // Adiciona o elemento na lista
    list_item.appendChild(newItem);

    // Limpa o valor do campo de texto
    item.value = "";

    // Adiciona um evento de click no novo elemento
    newItem.onclick = function () {
      // Quando clicamos no elemento ele será removido
      this.parentNode.removeChild(this);
    };
  } else {
    /* Caso não tenha sido exibimos uma mensagem */
    alert("O campo não pode estar vazio!");
  }
}
