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

  // FULL SCREEN LOVE EXPLOSION
  function createHearts() {
    const hearts = ["♡", "♥", "💗", "💕", "💖", "💘", "💞"];
    
    for (let i = 0; i < 120; i++) {
      const heart = document.createElement("div");

      heart.textContent =
        hearts[Math.floor(Math.random() * hearts.length)];

      heart.style.position = "fixed";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.top = Math.random() * 100 + "vh";
      heart.style.fontSize = (18 + Math.random() * 35) + "px";
      heart.style.color = "#e88ca8";
      heart.style.pointerEvents = "none";
      heart.style.zIndex = "99999";
      heart.style.opacity = "1";
      heart.style.transition =
        "transform 4s ease-out, opacity 4s ease-out";

      document.body.appendChild(heart);

      const x = (Math.random() - 0.5) * 500;
      const y = (Math.random() - 0.5) * 900;
      const rotation = Math.random() * 720;

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
