const result = document.querySelector(".result");
const pontosHumano = document.querySelector("#pontos-humano");
const pontosMaquina = document.querySelector("#pontos-maquina");

let humanoSaldoPontuacao = 0;
let maquinaSaldoPontuacao = 0;

const humano = (escolha) => {
  playNoJogo(escolha, maquina());
};

const maquina = () => {
  const maquinaEscolhe = ["pedra", "papel", "tesoura"];
  const randomNumber = Math.floor(Math.random() * 3);

  return maquinaEscolhe[randomNumber];
};

const playNoJogo = (humano, maquina) => {
  if (humano === maquina) {
    result.innerHTML = "Empate";
  } else if (
    (humano === "papel" && maquina === "pedra") ||
    (humano === "pedra" && maquina === "tesoura") ||
    (humano === "tesoura" && maquina === "papel")
  ) {
    humanoSaldoPontuacao++;
    pontosHumano.innerHTML = humanoSaldoPontuacao;
    result.innerHTML = "Você Ganhou";
  } else {
    maquinaSaldoPontuacao++;
    pontosMaquina.innerHTML = maquinaSaldoPontuacao;
    result.innerHTML = "Calabreso Ganhou";
  }
};

function zerarPontuacao(){  
result.innerHTML = "";
pontosHumano.innerHTML = "";
pontosMaquina.innerHTML = "";

}
