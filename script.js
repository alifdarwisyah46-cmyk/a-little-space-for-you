 document.addEventListener("DOMContentLoaded", function () {

 
  // SURPRISE BUTTON
  const surpriseButton = document.getElementById("surpriseButton");
  const surpriseMessage = document.getElementById("surpriseMessage");

  if (surpriseButton && surpriseMessage) {
    surpriseButton.addEventListener("click", function () {
      surpriseMessage.textContent =
        "You are one of my favourite parts of life. ♡";

      
createHearts() {
  // Remove an old animation layer if one exists
  const oldLayer = document.getElementById("loveExplosion");
  if (oldLayer) oldLayer.remove();

  // Create a full-screen layer
  const layer = document.createElement("div");
  layer.id = "loveExplosion";

  layer.style.cssText = `
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    pointer-events: none;
    z-index: 2147483647;
  `;

  document.body.appendChild(layer);

  const hearts = ["♡", "♥", "💗", "💕", "💖", "💘", "💞"];

  // Create 200 hearts
  for (let i = 0; i < 200; i++) {
    const heart = document.createElement("span");

    heart.textContent =
      hearts[Math.floor(Math.random() * hearts.length)];

    const size = 16 + Math.random() * 35;
    const duration = 2.5 + Math.random() * 2.5;

    heart.style.cssText = `
      position: absolute;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      font-size: ${size}px;
      opacity: 0;
      animation: loveRain ${duration}s ease-in forwards;
      animation-delay: ${Math.random() * 0.8}s;
    `;

    layer.appendChild(heart);
  }

  // Add animation
  if (!document.getElementById("loveRainStyle")) {
    const style = document.createElement("style");
    style.id = "loveRainStyle";

    style.textContent = `
      @keyframes loveRain {
        0% {
          opacity: 0;
          transform: translateY(-30px) rotate(0deg) scale(0.5);
        }
        15% {
          opacity: 1;
        }
        100% {
          opacity: 0;
          transform: translateY(300px) rotate(360deg) scale(1.3);
        }
      }
    `;

    document.head.appendChild(style);
  }

  // Remove the animation layer after 6 seconds
  setTimeout(() => {
    layer.remove();
  }, 6500);
}


      setTimeout(function () {
        heart.style.transform =
          `translate(${x}px, ${y}px) rotate(${rotation}deg)`;
        heart.style.opacity = "0";
      }, 50);

      setTimeout(function () {
        heart.remove();
      }, 4200);
    }
  }

  // CHAT BUTTON
  const chatButton = document.getElementById("chatButton");

  if (chatButton) {
    chatButton.addEventListener("click", function () {
      alert("Your little AI companion is coming soon. ♡");
    });
  }

  // NAVIGATION HIGHLIGHT
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.forEach(function (item) {
        item.classList.remove("active");
      });

      link.classList.add("active");
    });
  });

  // LITTLE LETTERS
  const envelopeButton = document.getElementById("envelopeButton");
  const loveLetter = document.getElementById("loveLetter");

  if (envelopeButton && loveLetter) {
    envelopeButton.addEventListener("click", function () {
      loveLetter.classList.toggle("hidden");

      if (loveLetter.classList.contains("hidden")) {
        envelopeButton.querySelector(".envelope-label").textContent =
          "Open your letter";
      } else {
        envelopeButton.querySelector(".envelope-label").textContent =
          "Close your letter";
      }
    });
  }

});
