# Jogo Dino - DIO

- Esse repositório trata-se de um clone do jogo Dino do google
- Construído em HTML, CSS e Javascript.
- Nosso objetivo é criar os comandos necessários para que o dinossauro pule os obstáculos e chegue o mais longe possível.

## Javascript

- O primeiro passo é criar um `eventListener` que será responsável por ativar quando uma tecla for clicada `keyup`
- Tendo o `eventListener` podemos fazer o filtro pela tecla que foi clicada, no caso para pulo o espaço ou a seta para cima.
- Criamos a função `jump()` para inserir os comando de subir e descer a posição do nosso Dino.
- Quando criamos nosso comando para subir e descer, usando o `setInterval()` podemos ver que toda vez que clicarmos na seta ou espaço a função é chamada, para evitar isso vamos usar uma booleana que será responsável por dizer se já estamos pulando ou não. Ela inicia como **false** e só chama o `jump()` se seu valor for **false**.
- Vamos inserir dentro da função `jump()` o controle da booleana, transformando em **true** quando iniciar e em **false** quando terminar o evento.
- Com o evento de pular definido, vamos para os obstáculos, no caso os cactos. 
- Os cactos irão se mover da direita para esquerda e devem desaparecer quando saírem da tela, o que economiza processamento.
- Além disso os cactos aparecem de maneira aleatória, para isso vamos criar um **randomTime**, que será usado na função `setTimeout()`
- A `setTimeout()` chamará uma função de tempo em tempo, no caso nesse **randomTime**. 
- Usamos o conceito de recursividade para que a função chame a si própria.