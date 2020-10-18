# Iniciando com HTML e CSS

## O que é HTML?

HTML é uma linguagem de marcação (Hypertext Markup Language), que usada para definir as estruturas dos sites.
Permitindo definir o conteúdo, imagens, textos e vídeos e qualquer outro conteúdo que iremos apresentar no site.


### Historia e origem

O HTML foi inicialmente criado por Tim Berners-Lee e Robert Cailliau, por volta de 1989 noi inicio da Internet.
Hoje o HTML já está na versão 5, conhecida como HTML5.


### Como funciona?

Possui dois elementos básicos principais, Tags e Attributes.

**Tags** são usadas para definir os elementos que queremos incluir, cada tag define um elemento e seu comportamento através de **Attribures** que complementam as tags.

Exemplo:

```HTML 
<img src="meu-projeto.jpg" alt="Foto do projeto">
```
Define uma imagem e um texto de descrição.

> **Importante** <br /><br /> As Tags deve em geral devem ser abertas e fechadas na ordem correta, por exemplo: <br /> ``` <strong><em>Bem importante!</em></strong> ``` <br /><br />

## O que é CSS?

Cascading Style Sheets, é usado para complementar o HTML, definindo estilos, cores, posicionamento, espaçamento e vários outros recursos.  

### Como funciona?

Para definir onde iremos aplicar o estilo, usamos 'seletores', que permitem especificar onde iremos aplicar e o que iremos apos definirmos o seletor.

```CSS
h1 {
    color: red;
    font-size: 14px;
}
```
Colore de vermelho a tag H1 do html com tamanho de 14px.
