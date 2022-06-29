const mario = document.querySelector(".super-mario");
const logoGame = document.querySelector(".logo-mario");
const bomb = document.querySelector(".bomb-game");
const cabecalho = document.querySelector(".cabecalho");

const gameOverScreen = document.querySelector("#game-over");
const floorGame = document.querySelector("#floor-game");
floorGame.style.animation = "none";

// __BUTTONS
const btnContinue = document.querySelector(".btn-continue");
const btnNewGame = document.querySelector(".btn-new-game");
const btnStart = document.querySelector(".btn-start");

// __VIDA
const contagemVida = document.querySelector(".life-h1");
let totalVidas = 3;
contagemVida.innerHTML = "x" + 3;
const valorVida = 1;

// __PONTUAÇÃO
const moeda = document.querySelector(".moeda-mario");
const contagemMoeda = document.querySelector(".coins-h1");
let totalMoedas = 0;
contagemMoeda.innerHTML = "000";
const valorMoeda = 10;

function jump() {
  mario.classList.add("jump-mario");
  moeda.style.display = "flex";

  setTimeout(() => {
    mario.classList.remove("jump-mario");
  }, 500);
}

function pegarMoeda() {
  const moedaPosition = moeda.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).top.replace("px", "");

  if (moedaPosition >= 50 && moedaPosition <= 150 && marioPosition <= 195) {
    moeda.style.display = "none";

    totalMoedas += valorMoeda;
    contagemMoeda.innerHTML = totalMoedas;
  }
}

function runGame() {
  const loopGame = setInterval(() => {
    const bombPosition = bomb.offsetLeft;
    const marioPosition = +window
      .getComputedStyle(mario)
      .bottom.replace("px", "");

    pegarMoeda();
    passarNivel();

    if (bombPosition <= 100 && bombPosition > 0 && marioPosition < 180) {
      bomb.style.animation = "none";
      bomb.style.left = `${bombPosition}px`;

      mario.style.animation = "none";
      mario.style.bottom = `${marioPosition}px`;

      mario.src = "./assets/mario-game-over.png";
      mario.style.width = "75px";
      mario.style.marginLeft = "45px";

      moeda.style.display = "none";

      btnContinue.style.display = "block";
      btnNewGame.style.display = "block";

      floorGame.style.animation = "none";

      totalVidas = totalVidas - valorVida;
      contagemVida.innerHTML = "x" + totalVidas;

      clearInterval(loopGame);
      gameOver();
    }
  }, 10);

  function gameOver() {
    if (totalVidas === 0) {
      gameOverScreen.style.display = "flex";

      body.style.backgroundColor = "black";
      body.style.backgroundImage = "none";

      floorGame.style.animation = "none";

      btnContinue.style.display = "none";
      btnNewGame.style.display = "block";
    }
  }
}

function passarNivel() {
  let animationValue = 0;

  switch (true) {
    case totalMoedas < 50:
      animationValue = 2;
      break;

    case totalMoedas < 100:
      animationValue = 1.8;
      break;

    case totalMoedas < 150:
      animationValue = 1.6;
      break;

    case totalMoedas < 200:
      animationValue = 1.4;
      break;

    case totalMoedas < 250:
      animationValue = 1.2;
      break;

    case totalMoedas < 300:
      animationValue = 1;
      break;

    default:
      animationValue = 2;
  }
  bomb.style.animation = `bomb-animation ${animationValue}s infinite linear`;
}

btnNewGame.addEventListener("click", function () {
  location.reload();

  logoGame.style.display = "none";
  btnNewGame.style.display = "none";
  contagemVida.innerHTML = "x" + 3;
  btnContinue.style.display = "none";

  cabecalho.style.display = "flex";
  cabecalho.style.opacity = "100%";

  mario.src = "./assets/super-mario.gif";
  mario.style.display = "flex";
  mario.style.width = "150px";
  mario.style.position = "absolute";
  mario.style.bottom = "80px";
  mario.style.animation = null;

  bomb.style.display = "flex";
  bomb.style.width = "100px";
  bomb.style.position = "absolute";
  bomb.style.bottom = "80px";
  bomb.style.animation = null;
  bomb.style.left = "";

  floorGame.style.animation = null;

  moeda.style.display = "flex";

  runGame();
});

btnContinue.addEventListener("click", function () {
  logoGame.style.display = "none";
  btnNewGame.style.display = "none";
  btnContinue.style.display = "none";
  btnStart.style.display = "none";

  floorGame.style.animation = null;

  cabecalho.style.display = "flex";
  cabecalho.style.opacity = "100%";

  mario.src = "./assets/super-mario.gif";
  mario.style.display = "flex";
  mario.style.width = "150px";
  mario.style.position = "absolute";
  mario.style.bottom = "80px";
  mario.style.animation = null;

  bomb.style.display = "flex";
  bomb.style.width = "100px";
  bomb.style.position = "absolute";
  bomb.style.bottom = "80px";
  bomb.style.animation = null;
  bomb.style.left = "";

  moeda.style.display = "flex";

  runGame();
});

btnStart.addEventListener("click", function () {
  // location.reload();

  logoGame.style.display = "none";
  btnNewGame.style.display = "none";
  contagemVida.innerHTML = "x" + 3;
  btnContinue.style.display = "none";
  btnStart.style.display = "none";

  cabecalho.style.display = "flex";
  cabecalho.style.opacity = "100%";

  mario.src = "./assets/super-mario.gif";
  mario.style.display = "flex";
  mario.style.width = "150px";
  mario.style.position = "absolute";
  mario.style.bottom = "80px";
  mario.style.animation = null;

  bomb.style.display = "flex";
  bomb.style.width = "100px";
  bomb.style.position = "absolute";
  bomb.style.bottom = "80px";
  bomb.style.animation = null;
  bomb.style.left = "";

  floorGame.style.animation = null;

  moeda.style.display = "flex";

  runGame();
});

document.addEventListener("keydown", jump);
