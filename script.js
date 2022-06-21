const mario = document.querySelector(".super-mario");
const bomb = document.querySelector(".bomb-game");

const btnStart = document.querySelector(".btn-start");
// const btnContinue = document.querySelector(".btn-continue");

const menuGame = document.querySelector(".menu-game");

const logoGame = document.querySelector(".logo-game");

function jump() {
  mario.classList.add("jump-mario");

  setTimeout(() => {
    mario.classList.remove("jump-mario");
  }, 500);
}

function runGame() {
  const loopGame = setInterval(() => {
    const bombPosition = bomb.offsetLeft;
    const marioPosition = +window
      .getComputedStyle(mario)
      .bottom.replace("px", "");

    if (bombPosition <= 100 && bombPosition > 0 && marioPosition < 180) {
      bomb.style.animation = "none";
      bomb.style.left = `${bombPosition}px`;

      mario.style.animation = "none";
      mario.style.bottom = `${marioPosition}px`;

      mario.src = "./assets/mario-game-over.png";
      mario.style.width = "75px";
      mario.style.marginLeft = "45px";

      logoGame.style.display = "";
      btnStart.style.display = "";
      // btnContinue.style.display = "";

      clearInterval(loopGame);
    }
  }, 10);
}

btnStart.addEventListener("click", function () {
  logoGame.style.display = "none";
  btnStart.style.display = "none";
  // btnContinue.style.display = "none";

  mario.src = "./assets/super-mario.gif";
  mario.style.display = "flex";
  mario.style.width = "150px";
  mario.style.position = "absolute";
  mario.style.bottom = "80px";
  mario.style.animation = null;

  bomb.style.display = "flex";
  bomb.style.width = "120px";
  bomb.style.position = "absolute";
  bomb.style.bottom = "80px";
  bomb.style.animation = null;
  bomb.style.left = "";

  runGame();
});

document.addEventListener("keydown", jump);
