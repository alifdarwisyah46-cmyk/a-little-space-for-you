document.addEventListener("DOMContentLoaded", function () {

  // SURPRISE BUTTON
  const surpriseButton = document.getElementById("surpriseButton");
  const surpriseMessage = document.getElementById("surpriseMessage");

  if (surpriseButton && surpriseMessage) {
    surpriseButton.addEventListener("click", function () {
      surpriseMessage.textContent =
        "You are one of my favourite parts of life. ♡";

      createHearts();
    });
  }

  // FULL SCREEN HEART ANIMATION
  function createHearts() {
    const oldLayer = document.getElementById("loveExplosion");
    if (oldLayer) oldLayer.remove();

    const layer = document.createElement("div");
    layer.id = "loveExplosion";

    layer.style.position = "fixed";
    layer.style.top = "0";
    layer.style.left = "0";
    layer.style.width = "100%";
    layer.style.height = "100%";
    layer.style.overflow = "hidden";
    layer.style.pointerEvents = "none";
    layer.style.zIndex = "999999";

    document.body.appendChild(layer);

    const hearts = ["❤️", "💗", "💕", "💖", "💘", "💞", "♡"];

    for (let i = 0; i < 200; i++) {
      const heart = document.createElement("span");

      heart.textContent =
        hearts[Math.floor(Math.random() * hearts.length)];

      heart.style.position = "absolute";
      heart.style.left = Math.random() * 100 + "%";
      heart.style.top = Math.random() * 100 + "%";
      heart.style.fontSize = 15 + Math.random() * 30 + "px";
      heart.style.display = "block";
      heart.style.opacity = "1";
      heart.style.transition = "transform 4s ease, opacity 4s ease";

      layer.appendChild(heart);

      const x = (Math.random() - 0.5) * 250;
      const y = 200 + Math.random() * 500;
      const rotation = Math.random() * 360;

      setTimeout(function () {
        heart.style.transform =
          "translate(" + x + "px, " + y + "px) rotate(" +
          rotation + "deg)";
        heart.style.opacity = "0";
      }, 100);
    }

    setTimeout(function () {
      layer.remove();
    }, 4500);
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

      const label = envelopeButton.querySelector(".envelope-label");

      if (label) {
        label.textContent = loveLetter.classList.contains("hidden")
          ? "Open your letter"
          : "Close your letter";
      }
    });
  }

});
