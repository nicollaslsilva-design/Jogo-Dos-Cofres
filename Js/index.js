const cofre1 = document.getElementById("Cofre1");
const cofre2 = document.getElementById("Cofre2");
const cofre3 = document.getElementById("Cofre3");
const arena = document.getElementById("arena");

const mensagem = document.getElementById("mensagem");
const totalTentativasEl = document.getElementById("totalTentativas");
const totalVitoriasEl = document.getElementById("totalVitorias");

const btnJogarNovamente = document.getElementById("btnJogarNovamente");
const btnZerarContadores = document.getElementById("btnZerarContadores");

const cofres = [cofre1, cofre2, cofre3];

let cofrePremiado = 0;
let tentativas = 0;
let vitorias = 0;
let rodadaAtiva = true;

function sortearCofre() {
  return Math.floor(Math.random() * 3) + 1;
}

function iniciarRodada() {
  cofrePremiado = sortearCofre();
  rodadaAtiva = true;

  mensagem.textContent = "Nova rodada! Escolha um cofre.";
  
  cofres.forEach((cofre, index) => {
    cofre.disabled = false;
    cofre.classList.remove("premiado", "vazio");
    cofre.style.position = "absolute";
    cofre.style.top = "40%";
    
    if (index === 0) cofre.style.left = "10%";
    if (index === 1) cofre.style.left = "40%";
    if (index === 2) cofre.style.left = "70%";
  });
}

function escolherCofre(numeroCofre) {
  if (!rodadaAtiva) return;

  rodadaAtiva = false;
  tentativas++;
  totalTentativasEl.textContent = tentativas;

  if (numeroCofre === cofrePremiado) {
    vitorias++;
    totalVitoriasEl.textContent = vitorias;
    mensagem.textContent = `🎉 Parabéns! Você abriu o Cofre ${numeroCofre} e achou o prêmio!`;
  } else {
    mensagem.textContent = `❌ Cofre ${numeroCofre} está vazio! O prêmio estava no Cofre ${cofrePremiado}.`;
  }

  cofres.forEach((cofre, index) => {
    cofre.disabled = true;
    const numeroAtual = index + 1;
    if (numeroAtual === cofrePremiado) {
      cofre.classList.add("premiado");
    } else {
      cofre.classList.add("vazio");
    }
  });
}

cofre1.addEventListener("click", () => escolherCofre(1));
cofre2.addEventListener("click", () => escolherCofre(2));
cofre3.addEventListener("click", () => escolherCofre(3));

btnJogarNovamente.addEventListener("click", iniciarRodada);

btnZerarContadores.addEventListener("click", () => {
  tentativas = 0;
  vitorias = 0;
  totalTentativasEl.textContent = tentativas;
  totalVitoriasEl.textContent = vitorias;
  iniciarRodada();
});

cofre3.addEventListener("mouseenter", () => {
  if (!rodadaAtiva) return; // Só foge se a rodada estiver ativa

  const larguraMax = arena.clientWidth - cofre3.offsetWidth;
  const alturaMax = arena.clientHeight - cofre3.offsetHeight;

  const novoX = Math.floor(Math.random() * larguraMax);
  const novoY = Math.floor(Math.random() * alturaMax);

  cofre3.style.left = novoX + "px";
  cofre3.style.top = novoY + "px";
});
iniciarRodada();
