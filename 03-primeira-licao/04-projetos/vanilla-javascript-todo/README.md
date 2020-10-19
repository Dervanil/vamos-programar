# Todo em Javascript 

Primeiro projeto em Javascript, introdução a HTML, CSS e javascript. Lembre-se de seguir os passos definidos em **Conceitos Básicos**.

## Iniciando o projeto

Abra a pasta 'vanilla-javascript-todo' no Visual Studio Code.

![Visual Studio Code](/03-primeira-licao/04-projeto/images/vanilla-javascript-todo-01.jpg?raw=true "Visual Studio Code")

Feito isso você tem agora a estrutura inicial para iniciar o seu primeiro projeto.

## Passo a passo

Neste projeto iremos criar algo bem comum um TODO, que é bem simples mas possui que é um bom começo.

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
Aqui usamos '*' que é um seletor que aplica o que definimos para todos os elementos na pagina, neste caso estamos trocando a fonte.

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
        <input type="text" name="add" placeholder="todo-item"/>
        <input type="button" value="add"/>
        <ul id="list_item">
          <li>Terminar a tarefa</li>
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

![Projeto inicial](/03-primeira-licao/04-projeto/images/vanilla-javascript-todo-02.jpg?raw=true "Projeto inicial")