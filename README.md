Nesta atividade, vocês deverão desenvolver um jogo interativo utilizando HTML, CSS e JavaScript, colocando em prática os conhecimentos trabalhados em sala de aula.
O objetivo é criar um jogo com três cofres misteriosos, no qual o jogador deverá tentar encontrar um prêmio escondido aleatoriamente.
Durante o desenvolvimento, vocês deverão utilizar funções, eventos, manipulação do DOM, variáveis e estruturas condicionais para implementar as funcionalidades do jogo.

Sigam as instruções disponíveis no documento anexo.
Desenvolvam a atividade individualmente.
Organizem o projeto em arquivos HTML, CSS e JavaScript.
Testem todas as funcionalidades antes da entrega.
Enviar um link do repositório do github contendo todos os arquivos do projeto.
Serão considerados o funcionamento do jogo, a organização do código, a aplicação dos conceitos estudados e a criatividade na apresentação. LINGUAGEM DE MARCAÇÃO / ATIVIDADE PRÁTICA

LMA • Atividade prática de JavaScript

O Cofre Misterioso
A MISSÃO
Você foi contratado(a) para criar um jogo de sorte com três cofres. Apenas um deles esconde um
prêmio. O jogador escolhe um cofre por rodada, descobre o resultado e pode tentar novamente.
01 Monte a interface (HTML + CSS)
 Adicione um título e uma instrução curta explicando o jogo.
 Crie três botões identificados como Cofre 1, Cofre 2 e Cofre 3.
 Reserve espaços para a mensagem do resultado, total de tentativas e total de vitórias.
 Inclua o botão “Jogar Novamente” e personalize cores, bordas e efeitos ao passar o mouse.
02 Faça os botões funcionarem (DOM)
 Selecione os elementos da página com querySelector() ou getElementById().
 Cadastre um evento de clique com addEventListener() para cada cofre.
 Ao clicar, mostre com textContent uma mensagem como: “Você abriu o cofre 2!”.
03 Esconda o prêmio (JavaScript)
 No início de cada rodada, sorteie um número entre 1 e 3 usando Math.random() e Math.floor().
 Função para sortear o numero entre 1 a 3 :
 Math.floor(Math.random() * 3) + 1
 Compare o cofre escolhido com o cofre premiado usando if e else.
 Se acertar, mostre uma mensagem de vitória; se errar, informe que o cofre está vazio.
 Conte uma tentativa por rodada e some uma vitória somente quando houver acerto.
 Após a escolha, bloqueie novos cliques nos cofres até iniciar a próxima rodada.
04 Implemente “Jogar Novamente”
 Sorteie um novo cofre premiado e limpe a mensagem da rodada anterior.
 Habilite novamente os três cofres.
 Mantenha os totais de tentativas e vitórias acumulados entre as rodadas.

LINGUAGEM DE MARCAÇÃO / ATIVIDADE PRÁTICA

LMA • Atividade prática de JavaScript

05 Desafios extras (para quem terminar antes)
 Faça um dos cofres fugir quando o mouse se aproximar, como no Botão Maluco.
 Pinte de verde o cofre premiado e de vermelho os cofres vazios após a escolha.
 Crie um botão para zerar todos os contadores.
 Troque o tema do jogo: piratas, presentes, baús do tesouro, caixas-surpresa etc.
06 Regras e funcionamento esperado
 O jogo precisa funcionar ao abrir o arquivo index.html no navegador.
 O prêmio deve ser definido novamente a cada rodada.
 Cada rodada permite somente uma escolha antes de clicar em “Jogar Novamente”.
 A interface deve mostrar corretamente o resultado e os contadores.
07 O que entregar
Entregue uma pasta com os seguintes arquivos:
 index.html — estrutura da página
 style.css — estilos e efeitos visuais
 script.js — eventos, sorteio e lógica do jogo
Organize o código e esteja preparado(a) para demonstrar o funcionamento do jogo e explicar pelo
menos uma função JavaScript criada por você.
08 Critérios de avaliação
Critério Pontos
Estrutura HTML e organização 1,0
Estilização com CSS 1,5
Eventos dos três cofres 2,0
Sorteio e identificação do prêmio 2,0
Contadores de tentativas e vitórias 1,5
Botão Jogar Novamente 1,0
Criatividade e apresentação 1,0
TOTAL 10,0
Lembrete: a ideia é aplicar o que você aprendeu com o Botão Maluco: selecionar elementos, detectar
eventos e alterar a página com JavaScript.
