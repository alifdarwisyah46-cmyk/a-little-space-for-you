 
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

  // FALLING HEARTS
  function createHearts() {
    for (let i = 0; i < 15; i++) {
      const heart = document.createElement("div");

      heart.textContent = "♡";
      heart.style.position = "fixed";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.top = "-20px";
      heart.style.fontSize = "24px";
      heart.style.color = "#e8a4b5";
      heart.style.pointerEvents = "none";
      heart.style.zIndex = "9999";
      heart.style.transition = "transform 3s linear, opacity 3s";

      document.body.appendChild(heart);

      setTimeout(function () {
        heart.style.transform = "translateY(110vh) rotate(360deg)";
        heart.style.opacity = "0";
      }, 50);

      setTimeout(function () {
        heart.remove();
      }, 3200);
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
