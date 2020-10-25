# Conceitos básicos

## O que é código fonte?

É tudo aquilo que escrevemos em uma linguagem de programação (conforme aprendemos no modulo anterior) que pode ser interpretada/compilada pelo computador criando um programa.

## Controle de código fonte 

Quando trabalhamos com desenvolvimento, algo que é comum a todas as linguagens e plataformas é a necessidade de se gerenciar o que estamos fazendo.

Não importa se trabalhamos sozinhos ou em equipe, imagine o que aconteceria se por um defeito no computador, perdêssemos o código fonte?

É ai que entra o controle de fonte. Ele permite que seja versionado e armazenado em outro local. 

O controle de fontes auxiliará na gestão e controle destas alterações permitindo ate inclusive voltar para uma versão anterior se for necessário.
Centralizando o controle, assim uma equipe podemos ter varias pessoas trabalhando no mesmo projeto, cada uma em uma parte ou até mesmo alterando o mesmo arquivo. 

## Git e Github

Git é uma das mais conhecidas e usadas ferramentas de controle de fontes.

Com ela é possível versionar e controlar as alterações, não importa o tamanho da equipe é possível ter controle total. Facilitando a resolução de conflitos que possam ocorrer no caso de varias pessoas alterem o mesmo arquivo, por exemplo.

Github e serviço que nos permite gerenciar repositórios Git, assim não precisamos nos preocupar com o armazenamento do fonte e uma outra série de preocupações que teríamos se fossemos fazer isso nós mesmos, o que me quase todas as situações não é recomendável.

## Configurando o ambiente 

Para iniciarmos é necessário instalar o Git em nossa maquina, para tal basta baixar a versão [aqui](https://git-scm.com/download/win).
Agora basta criar uma conta no [Github](https://github.com/join?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home).

Pronto para iniciar os exercícios basta 'clonar' o projeto para sua maquina, que nada mais é que fazer uma cópia do fonte mas essa cópia terá suas alterações controladas pelo Github, sempre que houver uma alteração é possível atualizar a sua cópia local através de um comando (aprenderemos mais sobre comandos nas outras lições).

## Criando a sua cópia do projeto

Na pagina inicial do [projeto]( https://github.com/Dervanil/vamos-programar), clique em 'Fork', assim o Github fará uma cópia do projeto para a sua conta.

![Fork Project](/03-primeira-licao/01-conceitos-basicos/images/fork-project.jpg?raw=true "Fork Project")

## Clonando o projeto

1- No seu computador, escolha uma pasta qualquer, de preferência uma mais próxima da raiz, por exemplo, 'C:\\' ou 'D:\\', abra o prompt de comando e navegue até a pasta, ou digite 'cmd' e aperte enter na barra de endereço do Windows Explorer uma janela do prompt será aberta na pasta atual. Digite o seguinte comando:

```cmd
git clone https://github.com/[SEU USUARIO]/vamos-programar.git
```
Lembre de alterar a url para o seu usuário antes.
Pronto agora você clonou o fonte do projeto para sua maquina e está pronto para começar.


Para quem não está ambientado ainda com o prompt de comando, para iniciá-lo basta digitar na barra de pesquisa do Windows "CMD"

## Onde Programar?

Para programar podemos usar diversas ferramentas, inclusive bloco de notas, mas para que tenhamos produtividade no dia dia, existem ferramentas dedicadas chamadas de IDE do inglês 'Integrated Development Environment', existem varias no mercado, gratuitas ou pagas, com varias funcionalidades diferentes.


## Visual Studio Code

Uma das IDEs mais usadas para desenvolvimento Web é o Visual Studio Code da Microsoft que é gratuita. Para iniciar [baixe](https://code.visualstudio.com/) e instale na sua maquina. Para saber mais veja os vídeos [introdutórios](https://code.visualstudio.com/docs/getstarted/introvideos).
