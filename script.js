
document.addEventListener("DOMContentLoaded", function () {

  // SURPRISE BUTTON
  const surpriseButton = document.getElementById("surpriseButton");
  const surpriseMessage = document.getElementById("surpriseMessage");

  if (surpriseButton) {
    surpriseButton.addEventListener("click", function () {
      if (surpriseMessage) {
        surpriseMessage.textContent =
          "You are one of my favourite parts of life. ♡";
      }

      createHearts();
    });
  }

  // HEART ANIMATION
  function createHearts() {
    const oldLayer = document.getElementById("loveExplosion");
    if (oldLayer) oldLayer.remove();

    const layer = document.createElement("div");
    layer.id = "loveExplosion";

    layer.style.cssText =
      "position:fixed;inset:0;width:100%;height:100%;overflow:hidden;pointer-events:none;z-index:999999;";

    document.body.appendChild(layer);

    const symbols = ["❤️", "💗", "💕", "💖", "💘", "♡"];

    for (let i = 0; i < 200; i++) {
      const heart = document.createElement("span");

      heart.textContent =
        symbols[Math.floor(Math.random() * symbols.length)];

      heart.style.cssText = `
        position:absolute;
        left:${Math.random() * 100}%;
        top:${Math.random() * 100}%;
        font-size:${16 + Math.random() * 25}px;
        animation: heartFall ${3 + Math.random() * 2}s ease forwards;
      `;

      layer.appendChild(heart);
    }

    if (!document.getElementById("heartAnimationStyle")) {
      const style = document.createElement("style");
      style.id = "heartAnimationStyle";

      style.textContent = `
        @keyframes heartFall {
          0% { opacity: 0; transform: translateY(-30px) rotate(0deg); }
          15% { opacity: 1; }
          100% { opacity: 0; transform: translateY(500px) rotate(360deg); }
        }
      `;

      document.head.appendChild(style);
    }

    setTimeout(function () {
      layer.remove();
    }, 5500);
  }

  // LITTLE LETTERS
  const envelopeButton = document.getElementById("envelopeButton");
  const loveLetter = document.getElementById("loveLetter");

  if (envelopeButton && loveLetter) {
    envelopeButton.addEventListener("click", function () {
      loveLetter.classList.toggle("hidden");

      const label = envelopeButton.querySelector(".envelope-label");

      if (label) {
        label.textContent = loveLetter.classList.contains("hidden")
          ? "Open your letter"
          : "Close your letter";
      }
    });
  }

  // CHAT BUTTON
  const chatButton = document.getElementById("chatButton");

  if (chatButton) {
    chatButton.addEventListener("click", function () {
      alert("Your little AI companion is coming soon. ♡");
    });
  }

  // NAVIGATION
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.forEach(function (item) {
        item.classList.remove("active");
      });

      link.classList.add("active");
    });
  });

});
