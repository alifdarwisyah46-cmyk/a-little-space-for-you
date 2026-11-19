
document.addEventListener("DOMContentLoaded", function () {

  // =========================
  
  // LITTLE LETTERS

  const envelopeButton = document.getElementById("envelopeButton");
  const loveLetter = document.getElementById("loveLetter");
  const envelopeLabel = document.getElementById("envelopeLabel");

  if (envelopeButton && loveLetter) {

    envelopeButton.addEventListener("click", function () {

      const isClosed = !loveLetter.classList.contains("is-open");

      if (isClosed) {

        // Random entrance animation
        loveLetter.classList.remove("from-side", "bomb-drop");

        const animations = ["from-side", "bomb-drop"];
        const selected =
          animations[Math.floor(Math.random() * animations.length)];

        loveLetter.classList.add(selected);
        loveLetter.classList.remove("is-closed");

        // Start opening animation
        requestAnimationFrame(function () {
          requestAnimationFrame(function () {
            loveLetter.classList.add("is-open");
          });
        });

        loveLetter.setAttribute("aria-hidden", "false");
        envelopeButton.setAttribute("aria-expanded", "true");

        if (envelopeLabel) {
          envelopeLabel.textContent = "Close your letter";
        }

      } else {

        loveLetter.classList.remove("is-open");
        loveLetter.classList.add("is-closed");

        loveLetter.setAttribute("aria-hidden", "true");
        envelopeButton.setAttribute("aria-expanded", "false");

        if (envelopeLabel) {
          envelopeLabel.textContent = "Open your letter";
        }

      }

    });

  }


  // =========================
  // OPEN SURPRISE
  // =========================

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


  // =========================
  // FULL SCREEN HEARTS
  // =========================

  
function createHearts() {

  const oldLayer = document.getElementById("loveExplosion");

  if (oldLayer) oldLayer.remove();

  const layer = document.createElement("div");
  layer.id = "loveExplosion";

  document.body.appendChild(layer);

  const symbols = [
    "❤️", "💗", "💕", "💖",
    "💘", "💞", "♥", "♡"
  ];

  // 350 hearts
  for (let i = 0; i < 350; i++) {

    const heart = document.createElement("span");

    heart.className = "flying-heart";

    heart.textContent =
      symbols[Math.floor(Math.random() * symbols.length)];

    const size = 16 + Math.random() * 35;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const duration = 3 + Math.random() * 4;
    const delay = Math.random() * 1.5;

    heart.style.left = x + "vw";
    heart.style.top = y + "vh";
    heart.style.fontSize = size + "px";

    heart.style.animationDuration = duration + "s";
    heart.style.animationDelay = delay + "s";

    heart.style.setProperty(
      "--drift",
      (Math.random() * 300 - 150) + "px"
    );

    layer.appendChild(heart);
  }

  setTimeout(function () {
    layer.remove();
  }, 9500);

}


  // =========================
  // CHAT BUTTON
  // =========================

  const chatButton = document.getElementById("chatButton");

  if (chatButton) {

    chatButton.addEventListener("click", function () {

      alert("Your little AI companion is coming soon. ♡");

    });

  }


  // =========================
  // NAVIGATION
  // =========================

  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

      navLinks.forEach(function (item) {
        item.classList.remove("active");
      });

      link.classList.add("active");

    });

  });


  // =========================
  // SMOOTH SCROLL
  // =========================

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

      const target = document.querySelector(
        link.getAttribute("href")
      );

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }

    });

  });

});

