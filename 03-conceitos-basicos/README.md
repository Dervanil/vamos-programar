# Conceitos básicos

## Controle de fonte 

Quando trabalhamos com desenvolvimento, algo que é comum a todas as linguagens e plataformas é a necessidade de se gerenciar o que estamos fazendo.

Não importa se estamos trabalhando sozinhos ou em equipe, image o que aconteceria se por um defeito em nosso computador perdêssemos o que estamos fazendo ou precisemos corrigir um erro.

É ai que entra o controle de fonte, que permite que o fonte seja versionado e armazenado em outro local, centralizando o controle, assim em uma equipe podemos ter varias pessoas trabalhando no mesmo projeto, cada uma em uma parte ou ate mesmo alterando o mesmo arquivo, o controle de fontes auxiliará na gestão e controle destas alterações permitindo ate mesmo voltar para uma versão anterior se for necessário.

## Git e Github

Git é uma das mais conhecidas e usadas ferramentas de controle de fontes.

Com ela é possível versionar e controlar o fonte, não importa o tamanho da equipe é possível ter controle total das alterações e conflitos que possam ocorrer no caso de varias pessoas alterado o mesmo arquivo, por exemplo.

Github e serviço que nos permite gerenciar repositórios Git, assim não precisamos nos preocupar com o armazenamento do fonte e uma outra série de preocupações que teríamos se fossemos fazer isso nós mesmos, o que me quase todas as situações não é recomendável.

## Configurando o ambiente 

Para iniciarmos e necessário instalar o Git em nossa maquina, para tal basta baixar a versão [aqui](https://git-scm.com/download/win).
Agora basta criar uma conta no [Github](https://github.com/join?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home).

Pronto para iniciar os exercícios basta 'clonar' o projeto para sua maquina, que nada mais é que fazer uma cópia do fonte mas essa cópia terá suas alterações controladas pelo Github, sempre que houver uma alteração é possível atualizar a sua cópia local através de um comando (aprenderemos mais sobre comandos nas outras lições).

## Clonando o projeto

Acesse o link do [projeto](https://github.com/Dervanil/vamos-programar) no Github e siga as instruções:

1- Cópie a url do projeto.

![Url](https://github.com/Dervanil/vamos-programar/blob/main/03-conceitos-basicos/images/url.jpg) 

2- No seu computador, escolha uma pasta qualquer, de preferencia uma mais próxima da raiz, por exemplo, 'C:\\' ou 'D:\\', abra o prompt de comando e navegue até a pasta, ou digite 'cmd' e aperte enter na barra de endereço do Explorer uma janela do prompt será aberta na pasta atual. Digite o seguinte comando:

```cmd
git clone https://github.com/Dervanil/vamos-programar.git
```

Pronto agora você clonou o fonte do projeto para sua maquina e está pronto para começar.
