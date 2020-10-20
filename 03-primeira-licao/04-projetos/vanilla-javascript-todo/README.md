# Todo em Javascript

Primeiro projeto em Javascript, introdução a HTML, CSS e javascript. Lembre-se de seguir os passos definidos em **Conceitos Básicos**.

## Iniciando o projeto

Abra a pasta 'vanilla-javascript-todo' no Visual Studio Code.

![Visual Studio Code](/03-primeira-licao/04-projetos/images/vanilla-javascript-todo-01.jpg?raw=true "Visual Studio Code")

Feito isso você tem agora a estrutura inicial para o seu primeiro projeto. Para ir acompanhando as alterações basta abrir o arquivo 'index.html' em qualquer browser, lembre-se de atualizar a página para ver as alterações.

## Passo a passo

Neste projeto iremos criar algo bem comum um TODO, que nada mais é que uma lista de tarefas, sendo bem simples mas é um bom começo.

1- Abra o arquivo html em 'src/index.html' e cole o trecho abaixo:

```HTML
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="utf-8">
    <title>TODO - Primeiro projeto</title>
  </head>
  <body>
    <p>Tudo começa aqui.</p>
  </body>
</html>
```

Aqui nós temos a estrutura básica de uma pagina HTML.

2- Abra o arquivo 'src/assets/styles.css' e adicione o conteúdo abaixo:

```CSS
* {
    font-family: Arial, Helvetica, sans-serif;
  }

  body {
    background: #f2f2f2;
  }
```

Aqui usamos '\*' que é um seletor que aplica o que definimos para todos os elementos na pagina, neste caso estamos trocando a fonte.

usando o seletor 'body' podemos aplicar estilos a tag 'body', estamos alterando a cor de fundo da pagina para cinza.

3- Atualize o HTML para referenciar o CSS, para isso atualize a tag 'head' do arquivo HTML:

```HTML
<head>
  <meta charset="utf-8">
  <title>TODO - Primeiro projeto</title>
  <link rel="stylesheet" href="assets/styles.css">
</head>
```

A tag 'link' indica que arquivo deve ser carregado, assim o nosso CSS será aplicado ao HTML.

4- Agora vamos adicionar as tags necessárias para o funcionamento do nosso TODO, adicione o trecho abaixo dentro da tag 'body':

```HTML
<header>
    <h1>TODO</h1>
</header>
<main class="container">
    <section>
        <h2>Adicione os TODOs</h2>
        <input type="text" name="add" placeholder="O que você quer fazer?"/>
        <input type="button" value="add"/>
        <ul>
        </ul>
    </section>
</main>
<footer>
    <p>Vamos programar?</p>
</footer>
```

Aqui nós definimos um titulo 'h1', dentro de uma tag 'head' que deve ser usada para definir um cabeçalho para a pagina, com navegação e logo, por exemplo.

Em seguida a tag 'main' que define o conteúdo principal dentro do 'body', esta tag só deve aparecer uma única vez na pagina. Dentro da tag 'section' temos outro cabeçalho 'h2', mas dessa vez com uma importância menor.

As próximas tags são: 'input' e 'ul', veja que temos dois 'inputs' mas com o atributo 'type' com o valor diferente sendo 'text' que permite que digite algo na pagina e 'button' que mostra um botão na pagina.

Por fim as tags 'ul' e 'li' que são usadas para exibir uma lista de itens na pagina.

Neste ponto a sua pagina deve estar assim:

![Projeto inicial](/03-primeira-licao/04-projetos/images/vanilla-javascript-todo-02.jpg?raw=true "Projeto inicial")

5- Precisamos deixar mais bonita, para isso abra o arquivo 'src/assets/styles.css' e adicione o trecho a seguir:

```CSS
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif; /* Define a fonte */
}

body {
  background-color: #f2f2f2; /* Troca a cor do fundo */
  overflow: auto;
  padding: 36px; /* Define um espaço dentro do elemento (tag) */
}

h1 {
  text-align: center; /* Alina o texto ao centro */
  margin-bottom: 16px;
}

h2 {
  text-align: center;
  margin-bottom: 8px;
}

main {
  display: flex;
  align-items: center;
  justify-content: center;
}

section {
  background: #fff;
  padding: 8px;
  width: 50%; /* Define a largura */
  height: auto; /* Define a largura */
  overflow: auto;
}

input {
  padding: 4px;
  height: 28px;
  width: 80%;
  border: #9d9d9d solid 1px; /* Define a borda do elemento */
  border-radius: 4px; /* Arredonda a borda do elemento */
}

button {
  padding: 4px;
  border: 0;
  height: 28px;
  width: 18%;
  border-radius: 4px;
  background-color: #0e25a7;
  color: #fff;
}

ul {
  list-style-position: inside;
  list-style-type: decimal;
  text-align: left;
  margin-top: 8px;
  padding: 8px;
}

li {
  cursor: pointer;
  padding-bottom: 8px;
}

li:hover { /* Troca o cursor do mouse quando passa por cima da lista (hover) */
  cursor: pointer;
}

footer {
  padding: 24px;
  font-weight: 700; /* Adiciona negrito ao texto */
  text-align: center;
}

```

Agora a pagina já tem um visual bem legal para seguirmos com nosso projeto, neste CSS estamos usando seletores que aplicam o estilo diretamente a tags do HTML não se preocupe em entender o que cada propriedade está fazendo, vamos entender todas com o tempo nas próximas lições.

Se tudo deu certo sua pagina deve estar assim:

![Projeto com CSS](/03-primeira-licao/04-projetos/images/vanilla-javascript-todo-03.jpg?raw=true "Projeto com CSS")

5- Neste ponto já temos a estrutura pronta para adicionar o Javascript. Abra o arquivo 'src/assets/todo.js'
Altere novamente a tag head para adicionar o Javascript, assim como fizemos com o CSS:

```HTML
<head>
  <meta charset="utf-8">
  <title>TODO - Primeiro projeto</title>
  <link rel="stylesheet" href="assets/styles.css">
  <script type="text/javascript" src="assets/todo.js"></script>
</head>
```

Para que possamos adicionar a interação entre o html e Javascript iremos alterar alguns elemento definindo o id, que nada mais é que uma forma de fazer com o que possamos manipular os elementos e um atributo no botão para que quando clicarmos nele o javascript seja executado.

```HTML
<main>
  <section>   
    <h2>Adicione os TODOs</h2>
    <input type="text" name="todoText" placeholder="O que você quer fazer?" id="todo-text"/>
    <button name="button" onclick="add_item()">Adicionar</button>
    <ul id="items">          
    </ul>
  </section>
</main>
```

```javascript
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
```

Tudo pronto seu TODO agora está funcionando!