let line = document.querySelector(".line");
let line1 = document.querySelector(".line1");

function startAnimation() {
  let count = 0;
  line1.style.width = `0%`;

  let ln = setInterval(() => {
    count++;
    line.style.width = `${count}%`;

    if (count >= 100) {
      clearInterval(ln);
      setTimeout(startAnimation1, 500);
    }
  }, 50);
}

function startAnimation1() {
  let count = 0;
  line.style.width = `0%`;

  let ln = setInterval(() => {
    count++;
    line1.style.width = `${count}%`;

    if (count >= 100) {
      clearInterval(ln);
      setTimeout(startAnimation, 500);
    }
  }, 50);
}

startAnimation();
