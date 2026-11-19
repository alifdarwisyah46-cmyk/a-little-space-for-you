const enterButton = document.getElementById("enterButton");

enterButton.addEventListener("click", function () {

  const welcome = document.querySelector(".welcome");

  welcome.innerHTML = `
    <p class="eyebrow">YOU MADE IT HERE ♡</p>

    <h1>I'm glad<br>you're here.</h1>

    <p class="subtitle">
      This little space belongs to you.
      Take your time and explore.
    </p>

    <button id="surpriseButton">
      A little surprise ♡
    </button>

    <p class="footer">
      Made with love, just for you.
    </p>
  `;

  const surpriseButton = document.getElementById("surpriseButton");

  surpriseButton.addEventListener("click", function () {

    const hearts = ["♡", "♥", "💕", "💗", "💖"];

    for (let i = 0; i < 30; i++) {
      const heart = document.createElement("span");

      heart.textContent =
        hearts[Math.floor(Math.random() * hearts.length)];

      heart.style.position = "fixed";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.top = "-30px";
      heart.style.fontSize = (15 + Math.random() * 25) + "px";
      heart.style.pointerEvents = "none";
      heart.style.zIndex = "9999";

      document.body.appendChild(heart);

      const duration = 2000 + Math.random() * 2000;

      heart.animate(
        [
          { transform: "translateY(0) rotate(0deg)", opacity: 1 },
          { transform: `translateY(110vh) rotate(360deg)`, opacity: 0 }
        ],
        {
          duration: duration,
          easing: "ease-in",
        }
      );

      setTimeout(() => heart.remove(), duration);
    }

  });

});
